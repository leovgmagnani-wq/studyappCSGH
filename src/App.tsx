import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  History, 
  Globe, 
  Cpu, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  RotateCcw,
  ShieldCheck,
  BookText,
  RotateCw
} from 'lucide-react';
import { HISTORY_TOPICS, GEOGRAPHY_TOPICS, CS_TOPICS } from './data/content';
import { SubjectId, Topic, Subtopic, UserProgress, Question, MemoryData, TimelineEvent } from './types';

// SRS Algorithm
const updateSRS = (current: MemoryData | undefined, correct: boolean): MemoryData => {
  const now = Date.now();
  const defaultMemory: MemoryData = { interval: 0, ease: 2.5, consecutiveCorrect: 0, lastTested: now, nextReview: now };
  const mem = current || defaultMemory;

  if (!correct) {
    return { ...mem, interval: 1, consecutiveCorrect: 0, lastTested: now, nextReview: now + 86400000 };
  }

  const n = mem.consecutiveCorrect + 1;
  let interval = 1;
  if (n === 2) interval = 4;
  else if (n > 2) interval = Math.round(mem.interval * mem.ease);

  return {
    ...mem,
    interval,
    consecutiveCorrect: n,
    lastTested: now,
    nextReview: now + (interval * 86400000)
  };
};

interface TimelineNodeProps {
  event: TimelineEvent;
  onClick: () => void;
  key?: React.Key;
}

const TimelineNode = ({ event, onClick }: TimelineNodeProps) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="relative flex items-start gap-4 p-4 rounded-2xl hover:glass transition-all text-left group w-full"
  >
    <div className="mt-1 w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] shrink-0" />
    <div>
      <div className="text-xs font-black text-amber-500 uppercase tracking-widest">{event.year}</div>
      <div className="text-slate-100 font-bold group-hover:text-amber-400 transition-colors">{event.event}</div>
    </div>
  </motion.button>
);

export default function App() {
  const [view, setView] = useState<'topic_list' | 'topic_detail' | 'quiz' | 'srs_review'>('topic_list');
  const [activeSubject, setActiveSubject] = useState<SubjectId>('history');
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState<Subtopic | null>(null);
  const [selectedTimelineEvent, setSelectedTimelineEvent] = useState<TimelineEvent | null>(null);
  
  const [quizQueue, setQuizQueue] = useState<Question[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress>({ scores: {}, attempts: {}, srs: {} });

  useEffect(() => {
    const saved = localStorage.getItem('aura_study_progress_v2');
    if (saved) setUserProgress(JSON.parse(saved));
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setUserProgress(newProgress);
    localStorage.setItem('aura_study_progress_v2', JSON.stringify(newProgress));
  };

  const getTopics = () => {
    switch (activeSubject) {
      case 'history': return HISTORY_TOPICS;
      case 'geography': return GEOGRAPHY_TOPICS;
      case 'computer_science': return CS_TOPICS;
      default: return [];
    }
  };

  const handleSubjectSelect = (id: SubjectId) => {
    setActiveSubject(id);
    setView('topic_list');
    setActiveTopic(null);
  };

  const handleTopicSelect = (topic: Topic) => {
    setActiveTopic(topic);
    setView('topic_detail');
  };

  const startTopicQuiz = (sub: Subtopic) => {
    setActiveSubtopic(sub);
    setQuizQueue(sub.questions);
    setQuizIndex(0);
    setQuizScore(0);
    setShowAnswer(false);
    setView('quiz');
  };

  const startSmartReview = () => {
    const now = Date.now();
    const allQuestions: Question[] = [];
    [...HISTORY_TOPICS, ...GEOGRAPHY_TOPICS, ...CS_TOPICS].forEach(t => 
      t.subtopics.forEach(s => allQuestions.push(...s.questions))
    );

    const due = allQuestions.filter(q => {
      const mem = userProgress.srs[q.id];
      return q.type === 'mcq' && (!mem || mem.nextReview <= now);
    }).slice(0, 20);

    if (due.length === 0) {
      alert("No questions due for review! Great job.");
      return;
    }
    
    setQuizQueue(due);
    setQuizIndex(0);
    setQuizScore(0);
    setShowAnswer(false);
    setView('srs_review');
  };

  const handleQuizAnswer = (isCorrect: boolean, qId: string) => {
    if (isCorrect) setQuizScore(prev => prev + 1);
    const newSRS = updateSRS(userProgress.srs[qId], isCorrect);
    saveProgress({
      ...userProgress,
      srs: { ...userProgress.srs, [qId]: newSRS }
    });
    setShowAnswer(true);
  };

  const handleSelfGrade = (score: number, qId: string) => {
    const isCorrect = score === 1;
    if (score === 1) setQuizScore(prev => prev + 1);
    else if (score === 0.5) setQuizScore(prev => prev + 0.5);
    
    const newSRS = updateSRS(userProgress.srs[qId], isCorrect);
    saveProgress({
      ...userProgress,
      srs: { ...userProgress.srs, [qId]: newSRS }
    });
    setQuizIndex(prev => prev + 1);
    setShowAnswer(false);
  };

  const subjectThemes: Record<SubjectId, { primary: string; accent: string; bg: string; font?: string }> = {
    history: { primary: 'amber-500', accent: 'amber-400', bg: 'slate-950', font: 'font-sans' },
    geography: { primary: 'emerald-500', accent: 'emerald-400', bg: 'slate-950', font: 'font-sans' },
    computer_science: { primary: 'blue-500', accent: 'blue-400', bg: 'slate-950', font: 'font-sora' }
  };

  const theme = subjectThemes[activeSubject];

  return (
    <div className={`w-screen h-screen flex flex-col bg-slate-950 text-slate-50 ${theme.font} selection:bg-amber-500 selection:text-slate-950 overflow-hidden`}>
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-4 md:px-8 bg-slate-950/50 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 md:gap-3">
          <div className={`w-8 h-8 bg-${theme.primary} rounded flex items-center justify-center font-bold text-slate-900 shadow-[0_0_12px_rgba(59,130,246,0.5)]`}>A</div>
          <h1 className="text-lg md:text-xl font-bold tracking-tight cursor-pointer" onClick={() => setView('topic_list')}>Aura <span className={`text-${theme.primary}`}>Study</span></h1>
        </div>
        <div className="flex gap-2 md:gap-6 items-center">
          <button onClick={startSmartReview} className={`flex items-center gap-2 px-3 py-1.5 bg-${theme.primary}/10 border border-${theme.primary}/20 rounded-lg text-[10px] md:text-xs font-bold text-${theme.primary} hover:bg-${theme.primary}/20 transition-all`}>
            <RotateCw size={12} className="md:w-[14px] md:h-[14px]" /> <span className="hidden xs:inline">Smart</span> Review
          </button>
          <div className="hidden sm:block h-4 w-px bg-slate-800"></div>
          <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Due: <span className={`text-${theme.primary}`}>
            {Object.values(userProgress.srs).filter((v: MemoryData) => v.nextReview <= Date.now()).length}
          </span></div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden relative">
        <main className="flex-1 p-3 md:p-8 bg-gradient-to-br from-slate-950 to-slate-900 overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            {view === 'topic_list' && (
              <motion.section key="tlist" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="mb-6 md:mb-10 text-center max-w-2xl mx-auto">
                   <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">System <span className={`text-${theme.primary}`}>Core</span></h2>
                   <p className="text-sm md:text-base text-slate-500 font-medium">Cambridge Syllabus 2023-2025. Dynamic knowledge fragments loaded.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {getTopics().map(topic => (
                    <div key={topic.id} onClick={() => handleTopicSelect(topic)} className="glass p-6 md:p-8 rounded-3xl card-hover cursor-pointer relative group flex flex-col h-full">
                       <div className="flex justify-between items-start mb-4">
                         <span className={`text-[10px] font-black font-mono px-2 py-1 bg-${theme.primary}/10 text-${theme.primary} rounded border border-${theme.primary}/20 uppercase tracking-widest`}>
                           {topic.section || 'Unit'}
                         </span>
                       </div>
                       <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-amber-500 transition-colors uppercase leading-tight">{topic.title}</h3>
                       <p className="text-[10px] md:text-xs text-slate-500 line-clamp-2 mb-6">{topic.description}</p>
                       <div className="mt-auto pt-6 border-t border-slate-800/50 flex gap-4 items-center">
                          <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{topic.subtopics.length} Units</span>
                          <div className="h-1 flex-1 bg-slate-900 rounded-full overflow-hidden">
                             <div className={`h-full bg-${theme.primary} w-full opacity-50`} />
                          </div>
                          <ChevronRight size={16} className="text-slate-700" />
                       </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {view === 'topic_detail' && (
              <motion.section key="tdet" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 h-full">
                <div className="xl:col-span-8 flex flex-col">
                  <button onClick={() => setView('topic_list')} className="text-[10px] font-black text-slate-500 flex items-center gap-2 hover:text-white mb-4 md:mb-6 uppercase tracking-widest self-start"><ArrowLeft size={14}/> Return</button>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6 md:mb-8">
                     <span className={`text-xs md:text-sm font-black font-mono text-${theme.primary}`}>{activeTopic?.section}</span>
                     <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight md:leading-none">{activeTopic?.title}</h2>
                  </div>
                  <div className="grid gap-3 md:gap-4">
                    {activeTopic?.subtopics.map(sub => (
                      <div key={sub.id} onClick={() => startTopicQuiz(sub)} className="glass p-4 md:p-8 rounded-3xl flex items-center justify-between card-hover cursor-pointer group">
                        <div className="flex items-center gap-4 md:gap-6">
                           <div className={`w-10 h-10 md:w-14 md:h-14 bg-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-${theme.primary} transition-colors`}><BookOpen className="w-5 h-5 md:w-7 md:h-7"/></div>
                           <div>
                             <h4 className="font-bold text-lg md:text-2xl group-hover:text-white transition-colors">{sub.title}</h4>
                             <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Status: Ready for Sync</p>
                           </div>
                        </div>
                        <ChevronRight size={20} className="text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="xl:col-span-4 glass p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-blue-500/10 flex flex-col h-fit xl:h-full">
                   <h4 className={`text-[10px] font-black uppercase tracking-[0.5em] text-${theme.primary} mb-6 md:mb-10 pb-4 border-b border-slate-800 flex items-center gap-3`}><History size={14}/> {activeSubject === 'history' ? 'Timeline' : 'Knowledge Base'}</h4>
                   <div className="space-y-4 overflow-y-auto pr-2 scrollbar-hide text-xs text-slate-400 leading-relaxed font-mono max-h-[300px] xl:max-h-none">
                     {activeTopic?.description}
                     <div className="h-px bg-slate-800 my-4" />
                     {activeTopic?.timeline?.map((e, idx) => (
                        <TimelineNode key={idx} event={e} onClick={() => setSelectedTimelineEvent(e)} />
                     ))}
                   </div>
                </div>
              </motion.section>
            )}

            {(view === 'quiz' || view === 'srs_review') && (
              <motion.section key="quiz" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto py-2 md:py-12 w-full">
                 <div className="flex justify-between items-center mb-4 md:mb-8">
                    <button onClick={() => setView('topic_detail')} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white">Abort Sync</button>
                    <div className={`text-[9px] md:text-xs font-bold text-${theme.primary} bg-${theme.primary}/10 px-2 md:px-4 py-1 rounded-full border border-${theme.primary}/20`}>{quizIndex + 1} / {quizQueue.length}</div>
                 </div>
                 {quizIndex < quizQueue.length ? (
                   <div className="glass p-4 md:p-12 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden">
                      <div className="relative z-10">
                         <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-10">
                            <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-slate-900 rounded-md md:rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-slate-800">{quizQueue[quizIndex]?.type.replace('_', ' ')}</span>
                            {quizQueue[quizIndex]?.keywords?.map(kw => (
                               <span key={kw} className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-blue-500/10 text-blue-400 rounded-md md:rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-blue-500/20">{kw}</span>
                            ))}
                         </div>
                         <h3 className="text-lg md:text-4xl font-bold md:leading-[1.2] mb-6 md:mb-12">{quizQueue[quizIndex]?.question}</h3>
                         <div className="grid gap-2.5 md:gap-4">
                            {quizQueue[quizIndex]?.type === 'mcq' && quizQueue[quizIndex]?.options?.map((opt, i) => {
                               const isCorrect = i === quizQueue[quizIndex].correctAnswer;
                               return (
                                 <button key={i} disabled={showAnswer} onClick={() => handleQuizAnswer(isCorrect, quizQueue[quizIndex].id)} className={`p-4 md:p-8 rounded-xl md:rounded-3xl border-2 text-left transition-all flex items-center justify-between font-bold text-sm md:text-xl ${showAnswer ? (isCorrect ? `border-${theme.primary} bg-${theme.primary}/10 text-${theme.primary}` : 'border-slate-800 bg-slate-900 text-slate-600') : `border-slate-800/50 hover:border-${theme.primary} hover:bg-slate-900 hover:scale-[1.01]`}`}>
                                   <span className="flex-1 pr-3">{opt}</span> {showAnswer && isCorrect && <CheckCircle2 size={16} className={`text-${theme.primary} shrink-0 md:w-6 md:h-6`} />}
                                 </button>
                               )
                            })}
                            {(quizQueue[quizIndex]?.type.startsWith('exam') || quizQueue[quizIndex]?.type === 'structured') && (
                               <div className="space-y-3 md:space-y-6">
                                  {!showAnswer ? (
                                    <div className="space-y-3">
                                       <textarea 
                                         className="w-full bg-slate-900/50 border border-slate-800 rounded-xl md:rounded-3xl p-4 md:p-8 text-sm md:text-xl min-h-[120px] md:min-h-[200px] focus:outline-none focus:border-blue-500/50" 
                                         placeholder="Type your answer here..." 
                                       />
                                       <button onClick={() => setShowAnswer(true)} className={`w-full py-3.5 md:py-6 bg-slate-50 text-slate-950 font-black uppercase tracking-widest rounded-xl md:rounded-3xl shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:bg-white text-xs md:text-base`}>Evaluate Answer</button>
                                    </div>
                                  ) : (
                                    <div className="space-y-3 md:space-y-6">
                                       <div className={`bg-${theme.primary}/5 p-4 md:p-8 rounded-xl md:rounded-[2.5rem] border border-${theme.primary}/20`}>
                                          <h4 className={`text-[9px] md:text-xs font-black uppercase text-${theme.primary} mb-3 flex items-center gap-2`}><BookText size={14} className="md:w-4 md:h-4"/> Mark Scheme</h4>
                                          <div className="space-y-2.5 text-slate-300 text-[11px] md:text-sm leading-relaxed whitespace-pre-line">
                                            {quizQueue[quizIndex].markScheme || quizQueue[quizIndex].guidelines?.join('\n')}
                                          </div>
                                       </div>
                                       {quizQueue[quizIndex].modelAnswer && (
                                          <div className="bg-slate-900 p-4 md:p-8 rounded-xl md:rounded-[2.5rem] border border-slate-800">
                                            <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Model Answer</h4>
                                            <p className="text-slate-400 italic text-[11px] md:text-sm">{quizQueue[quizIndex].modelAnswer}</p>
                                          </div>
                                       )}
                                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-8">
                                          <button onClick={() => handleSelfGrade(1, quizQueue[quizIndex].id)} className="py-3 md:py-6 rounded-lg md:rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold text-[10px] md:text-base hover:bg-emerald-500/20 uppercase tracking-wider">Full Marks</button>
                                          <button onClick={() => handleSelfGrade(0.5, quizQueue[quizIndex].id)} className="py-3 md:py-6 rounded-lg md:rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 font-bold text-[10px] md:text-base hover:bg-blue-500/20 uppercase tracking-wider">Partial Credit</button>
                                          <button onClick={() => handleSelfGrade(0, quizQueue[quizIndex].id)} className="py-3 md:py-6 rounded-lg md:rounded-2xl bg-rose-500/10 text-rose-500 border border-rose-500/20 font-bold text-[10px] md:text-base hover:bg-rose-500/20 uppercase tracking-wider">Missed Marks</button>
                                       </div>
                                    </div>
                                  )}
                               </div>
                            )}
                         </div>
                      </div>
                      {(quizQueue[quizIndex]?.type === 'mcq' && showAnswer) && (
                         <div className="mt-6 md:mt-12 flex gap-4">
                           <button onClick={() => { setShowAnswer(false); setQuizIndex(prev => prev + 1); }} className={`flex-1 py-5 md:py-8 bg-${theme.primary} text-slate-950 font-black uppercase tracking-[0.2em] rounded-xl md:rounded-3xl shadow-[0_25px_50px_rgba(59,130,246,0.3)] text-center text-xs md:text-base`}>Continue Integration</button>
                         </div>
                      )}
                   </div>
                 ) : (
                   <div className="glass p-10 md:p-16 rounded-[3rem] md:rounded-[5rem] text-center">
                      <div className={`w-16 h-16 md:w-24 md:h-24 bg-${theme.primary}/20 flex items-center justify-center rounded-2xl md:rounded-box mx-auto mb-6 md:mb-8 border border-${theme.primary}/20`}><ShieldCheck className={`w-8 h-8 md:w-12 md:h-12 text-${theme.primary}`} /></div>
                      <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tighter leading-tight">Integration <span className={`text-${theme.primary}`}>Complete</span></h2>
                      <p className="text-slate-400 text-base md:text-xl font-medium mb-8 md:mb-12">System update successful. Mastery level increased.</p>
                      <button onClick={() => setView('topic_list')} className="px-8 md:px-12 py-4 md:py-6 bg-white text-slate-950 font-black uppercase tracking-widest rounded-2xl md:rounded-3xl text-sm md:text-base">Return to Core Hub</button>
                   </div>
                 )}
              </motion.section>
            )}
          </AnimatePresence>
        </main>

        <AnimatePresence>
          {selectedTimelineEvent && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl">
                <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="glass max-w-2xl w-full p-8 md:p-16 rounded-[2.5rem] md:rounded-[4.5rem] relative shadow-2xl border border-amber-500/20 overflow-y-auto max-h-[90vh] scrollbar-hide">
                   <button onClick={() => setSelectedTimelineEvent(null)} className="absolute top-6 right-6 md:top-10 md:right-10 text-slate-500 hover:text-white transition-colors"><ShieldCheck size={32} className="md:w-10 md:h-10"/></button>
                   <div className="text-amber-500 font-black text-xl md:text-2xl mb-4 md:mb-6 tracking-widest flex items-center gap-2 md:gap-3"><RotateCcw size={20} className="md:w-6 md:h-6"/> {selectedTimelineEvent.year}</div>
                   <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white uppercase tracking-tighter leading-tight md:leading-none">{selectedTimelineEvent.event}</h2>
                   <p className="text-slate-300 text-base md:text-xl leading-relaxed mb-8 md:mb-12 font-medium">{selectedTimelineEvent.description}</p>
                   {selectedTimelineEvent.significance && (
                     <div className="bg-amber-500/5 p-6 md:p-10 rounded-2xl md:rounded-[3rem] border border-amber-500/10 mb-8 md:mb-12">
                        <h4 className="text-[10px] font-black uppercase text-amber-500 mb-2 md:mb-4 tracking-[0.4em]">Historical Significance</h4>
                        <p className="text-xs md:text-sm text-slate-400 italic leading-relaxed">{selectedTimelineEvent.significance}</p>
                     </div>
                   )}
                   <div className="flex flex-col sm:flex-row gap-4">
                      <button onClick={() => {
                        const sub = activeTopic?.subtopics.find(s => s.id === selectedTimelineEvent.topicId);
                        if (sub) { startTopicQuiz(sub); setSelectedTimelineEvent(null); }
                      }} className="flex-1 py-5 md:py-7 bg-amber-500 text-slate-950 font-black uppercase tracking-widest rounded-xl md:rounded-[2rem] text-xs md:text-sm shadow-[0_20px_40px_rgba(245,158,11,0.2)]">Engage Module Sync</button>
                      <button onClick={() => setSelectedTimelineEvent(null)} className="flex-1 py-5 md:py-7 glass font-black uppercase tracking-widest rounded-xl md:rounded-[2rem] text-xs md:text-sm text-slate-500 hover:text-white transition-colors">Abort Terminal</button>
                   </div>
                </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="w-full md:w-20 border-t md:border-t-0 md:border-r border-slate-800 bg-slate-950 flex flex-row md:flex-col items-center justify-center md:justify-start py-4 md:py-8 gap-4 xs:gap-8">
           {[
             { id: 'history', icon: History, label: 'History' },
             { id: 'geography', icon: Globe, label: 'Geo' },
             { id: 'computer_science', icon: Cpu, label: 'CS' }
           ].map(s => (
             <button key={s.id} onClick={() => handleSubjectSelect(s.id as SubjectId)} className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-[1.25rem] flex items-center justify-center transition-all ${activeSubject === s.id ? `bg-${theme.primary} text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)]` : 'text-slate-600 hover:text-slate-300 hover:bg-slate-900'}`}>
               <s.icon className="w-6 h-6 md:w-7 md:h-7" />
               <span className="md:hidden absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-widest text-slate-500 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">{s.label}</span>
             </button>
           ))}
        </nav>
      </div>
    </div>
  );
}
