import React, { useState, useEffect } from 'react';
import QuizSelection from './components/QuizSelection';
import QuizTaking from './components/QuizTaking';
import QuizResults from './components/QuizResults';
import { Quiz, UserAnswer, QuizResult } from './types';
import { quizzes } from './data/quizData';

type AppState = 'selection' | 'taking' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('selection');
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  // Load stored scores from localStorage
  const getStoredScore = (quizId: string): number | null => {
    const stored = localStorage.getItem(`quiz_result_${quizId}`);
    if (stored) {
      const result: QuizResult = JSON.parse(stored);
      return result.score;
    }
    return null;
  };

  // Save result to localStorage
  const saveResult = (result: QuizResult) => {
    localStorage.setItem(`quiz_result_${result.quizId}`, JSON.stringify(result));
  };

  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentState('taking');
  };

  const handleQuizComplete = (answers: UserAnswer[]) => {
    if (!selectedQuiz) return;

    setUserAnswers(answers);

    // Calculate score
    let correctAnswers = 0;
    answers.forEach(answer => {
      const question = selectedQuiz.questions.find(q => q.id === answer.questionId);
      if (question && answer.selectedAnswer === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / selectedQuiz.questions.length) * 100);

    const result: QuizResult = {
      quizId: selectedQuiz.id,
      score,
      totalQuestions: selectedQuiz.questions.length,
      answers: answers.map(a => a.selectedAnswer),
      completedAt: new Date().toISOString(),
    };

    setQuizResult(result);
    saveResult(result);
    setCurrentState('results');
  };

  const handleRestartQuiz = () => {
    setUserAnswers([]);
    setQuizResult(null);
    setCurrentState('taking');
  };

  const handleBackToHome = () => {
    setSelectedQuiz(null);
    setUserAnswers([]);
    setQuizResult(null);
    setCurrentState('selection');
  };

  return (
    <div className="min-h-screen">
      {currentState === 'selection' && (
        <QuizSelection
          quizzes={quizzes}
          onSelectQuiz={handleSelectQuiz}
          getStoredScore={getStoredScore}
        />
      )}

      {currentState === 'taking' && selectedQuiz && (
        <QuizTaking
          quiz={selectedQuiz}
          onComplete={handleQuizComplete}
          onBack={handleBackToHome}
        />
      )}

      {currentState === 'results' && selectedQuiz && quizResult && (
        <QuizResults
          quiz={selectedQuiz}
          userAnswers={userAnswers}
          result={quizResult}
          onRestart={handleRestartQuiz}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;