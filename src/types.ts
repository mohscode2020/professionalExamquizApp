export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timePerQuestion?: number; // in seconds
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: number[];
  completedAt: string;
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  timeSpent: number;
}