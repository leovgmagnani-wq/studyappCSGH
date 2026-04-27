import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, Flag, Book, List, LayoutGrid } from 'lucide-react';
import { GEOGRAPHY_DATA } from '../data/geographyData';
import { GeoTheme, GeoUnit, GeoKeyword, GeoCaseStudy, Question } from '../types';
import { HelpCircle } from 'lucide-react';

interface KeywordFlashcardProps {
  keyword: GeoKeyword;
  accentColor: string;
}

const KeywordFlashcard: React.FC<KeywordFlashcardProps> = ({ keyword, accentColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 h-40 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center group-hover:border-slate-700 transition-colors">
          <div className={`text-[10px] uppercase font-black tracking-widest text-${accentColor} mb-2`}>Term</div>
          <div className="text-lg font-bold text-slate-100 group-hover:scale-105 transition-transform">{keyword.term}</div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center rotate-y-180 shadow-2xl"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="text-xs text-slate-300 leading-relaxed overflow-y-auto max-h-full scrollbar-hide font-medium">
            {keyword.definition}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface CaseStudyAccordionProps {
  caseStudy: GeoCaseStudy;
  isExpanded: boolean;
  onToggle: () => void;
  onStartQuiz: (questions: Question[]) => void;
}

const CaseStudyAccordion: React.FC<CaseStudyAccordionProps> = ({ 
  caseStudy, 
  isExpanded, 
  onToggle, 
  onStartQuiz 
}) => {
  const allQuestions = useMemo(() => caseStudy.sections.flatMap(s => s.questions || []), [caseStudy.sections]);

  return (
    <div id={`casestudy-${caseStudy.id}`} className="bg-slate-900/40 rounded-2xl border border-slate-800/60 overflow-hidden transition-all duration-300">
      <button
        id={`toggle-${caseStudy.id}`}
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-5 text-left group transition-colors ${isExpanded ? `bg-${caseStudy.color}-500/10` : 'hover:bg-slate-800/50'}`}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{caseStudy.flag}</span>
          <h3 className={`text-sm md:text-base font-bold text-slate-100 group-hover:text-${caseStudy.color}-400 transition-colors`}>
            {caseStudy.title}
          </h3>
        </div>
        {isExpanded ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3 group/section">
                    <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] text-${caseStudy.color}-500/80 mb-2 border-b border-slate-800 pb-1 flex items-center gap-2`}>
                      <LayoutGrid size={10} /> {section.subtitle}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {allQuestions.length > 0 && (
                <div className="pt-6 border-t border-slate-800/50">
                  <button 
                    id={`quiz-btn-${caseStudy.id}`}
                    onClick={() => onStartQuiz(allQuestions)}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-${caseStudy.color}-500/10 border border-${caseStudy.color}-500/30 text-[10px] font-black uppercase tracking-[0.2em] text-${caseStudy.color}-400 hover:bg-${caseStudy.color}-500/20 transition-all shadow-xl group/btn`}
                  >
                    <HelpCircle size={16} className={`text-${caseStudy.color}-500 group-hover/btn:scale-110 transition-transform`} /> 
                    Test Knowledge & Case Study Mastery
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function GeographyDashboard({ onStartQuiz }: { onStartQuiz: (questions: Question[]) => void }) {
  const [activeThemeId, setActiveThemeId] = useState(GEOGRAPHY_DATA[0].id);
  const [activeUnitId, setActiveUnitId] = useState(GEOGRAPHY_DATA[0].units[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'keywords' | 'casestudies'>('keywords');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);

  const activeTheme = useMemo(() => 
    GEOGRAPHY_DATA.find(t => t.id === activeThemeId) || GEOGRAPHY_DATA[0],
    [activeThemeId]
  );

  const activeUnit = useMemo(() => 
    activeTheme.units.find(u => u.id === activeUnitId) || activeTheme.units[0],
    [activeUnitId, activeTheme]
  );

  // Sync unit when theme changes
  React.useEffect(() => {
    if (activeTheme.units.length > 0) {
      setActiveUnitId(activeTheme.units[0].id);
    } else {
      setActiveUnitId('');
    }
    setExpandedCaseStudy(null);
    setSearchQuery('');
  }, [activeThemeId]);

  const filteredKeywords = useMemo(() => {
    if (!activeUnit) return [];
    return activeUnit.keywords.filter(k => 
      k.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.definition.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeUnit, searchQuery]);

  const filteredCaseStudies = useMemo(() => {
    if (!activeUnit) return [];
    return activeUnit.caseStudies.filter(cs => 
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.sections.some(s => s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) || s.body.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [activeUnit, searchQuery]);

  const themeColors: Record<string, { accent: string; muted: string; gradient: string }> = {
    'theme-1': { accent: 'blue-500', muted: 'blue-500/10', gradient: 'from-blue-600/20 to-purple-600/20' },
    'theme-2': { accent: 'emerald-500', muted: 'emerald-500/10', gradient: 'from-emerald-600/20 to-teal-600/20' },
    'theme-3': { accent: 'amber-500', muted: 'amber-500/10', gradient: 'from-amber-600/20 to-red-600/20' }
  };

  const currentColors = themeColors[activeThemeId] || themeColors['theme-1'];

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Theme Selector */}
      <div className="flex flex-wrap gap-2 p-1 bg-slate-900/50 rounded-2xl border border-slate-800">
        {GEOGRAPHY_DATA.map(theme => (
          <button
            key={theme.id}
            onClick={() => setActiveThemeId(theme.id)}
            className={`flex-1 min-w-[200px] px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              activeThemeId === theme.id 
                ? `bg-${themeColors[theme.id].accent} text-slate-950 shadow-lg` 
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
            }`}
          >
            {theme.title}
          </button>
        ))}
      </div>

      {/* Unit Selector */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {activeTheme.units.length > 0 ? (
          activeTheme.units.map(unit => (
            <button
              key={unit.id}
              onClick={() => setActiveUnitId(unit.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border transition-all ${
                activeUnitId === unit.id
                  ? `bg-${currentColors.accent}/10 border-${currentColors.accent} text-${currentColors.accent}`
                  : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700'
              }`}
            >
              Unit {unit.number}: {unit.title}
            </button>
          ))
        ) : (
          <div className="text-slate-600 text-xs font-medium py-2">Module expansion in progress... (Coming Soon)</div>
        )}
      </div>

      {activeUnit && (
        <>
          {/* Search and Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800 self-start">
              <button
                onClick={() => setActiveTab('keywords')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'keywords' 
                    ? `bg-slate-800 text-${currentColors.accent}` 
                    : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                <Book size={14} /> 📚 Keywords
              </button>
              <button
                onClick={() => setActiveTab('casestudies')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'casestudies' 
                    ? `bg-slate-800 text-${currentColors.accent}` 
                    : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                <List size={14} /> 🗂️ Case Studies
              </button>
            </div>

            <div className="relative w-full md:w-64 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={16} />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'keywords' ? 'terms' : 'case studies'}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-500/50 focus:bg-slate-900 transition-all"
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide py-2">
            <AnimatePresence mode="wait">
              {activeTab === 'keywords' ? (
                <motion.div
                  key="keywords-grid"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {filteredKeywords.map((kw, idx) => (
                    <KeywordFlashcard key={`${kw.term}-${idx}`} keyword={kw} accentColor={currentColors.accent} />
                  ))}
                  {filteredKeywords.length === 0 && (
                    <div className="col-span-full py-20 text-center text-slate-600 italic">No matching keywords found.</div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="casestudies-list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {filteredCaseStudies.map((cs) => (
                    <CaseStudyAccordion 
                      key={cs.id} 
                      caseStudy={cs} 
                      isExpanded={expandedCaseStudy === cs.id}
                      onToggle={() => setExpandedCaseStudy(expandedCaseStudy === cs.id ? null : cs.id)}
                      onStartQuiz={onStartQuiz}
                    />
                  ))}
                  {filteredCaseStudies.length === 0 && (
                    <div className="py-20 text-center text-slate-600 italic">No matching case studies found in this unit.</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}
