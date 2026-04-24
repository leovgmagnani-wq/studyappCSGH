/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SubjectId = 'history' | 'geography' | 'computerscience' | 'science';

export interface TimelineEvent {
  year: string;
  event: string;
  description: string;
  topicId: string; // Used for linking to subtopics
  significance?: string;
}

export interface Question {
  id: string;
  type: 'mcq' | 'structured' | 'exam_style_6' | 'exam_style_8' | 'exam_style_16' | 'formula';
  question: string;
  formulaData?: {
    triangle?: {
      top: string;
      left: string;
      right: string;
    };
    rawFormula?: string;
    symbols: {
      symbol: string;
      name: string;
      unit: string;
    }[];
  };
  options?: string[];
  correctAnswer?: number | string;
  guidelines?: string[];
  hints?: string;
  markScheme?: string;
  modelAnswer?: string;
  explanation?: string;
  keywords?: string[];
  imageType?: 'tectonics' | 'population_pyramid' | 'river_system' | 'logic_gate';
  tags?: string[];
}

export interface Subtopic {
  id: string;
  title: string;
  questions: Question[];
}

export interface Topic {
  id: string;
  title: string;
  section?: string;
  description?: string;
  color?: string;
  timeline?: TimelineEvent[];
  subtopics: Subtopic[];
}

export interface MemoryData {
  interval: number;
  ease: number;
  consecutiveCorrect: number;
  lastTested: number;
  nextReview: number;
}

export interface UserProgress {
  scores: Record<string, number>;
  attempts: Record<string, number>;
  srs: Record<string, MemoryData>;
}
