import React from 'react';
import { Trophy, RefreshCw, Home, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Quiz, UserAnswer, QuizResult } from '../types';

interface QuizResultsProps {
  quiz: Quiz;
  userAnswers: UserAnswer[];
  result: QuizResult;
  onRestart: () => void;
  onBackToHome: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  quiz,
  userAnswers,
  result,
  onRestart,
  onBackToHome,
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const totalTimeSpent = userAnswers.reduce((total, answer) => total + answer.timeSpent, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white p-3 rounded-xl shadow-lg mr-4">
              <img 
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
                alt="QuadraPlus Logo" 
                className="h-12 w-12 rounded-lg object-cover"
              />
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
              <Trophy className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Assessment Complete!</h1>
          <p className="text-xl text-gray-600">{quiz.title} - QuadraPlus Training</p>
        </div>

        {/* Score Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className={`text-6xl font-bold ${getScoreColor(result.score)} mb-4`}>
              {result.score}%
            </div>
            <div className={`inline-flex items-center px-6 py-3 rounded-full border-2 ${getScoreBadgeColor(result.score)}`}>
              <Trophy className="h-5 w-5 mr-2" />
              <span className="font-semibold text-lg">
                {result.score >= 80 ? 'Excellent!' : result.score >= 60 ? 'Good Job!' : 'Keep Practicing!'}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {userAnswers.filter(answer => {
                  const question = quiz.questions.find(q => q.id === answer.questionId);
                  return question && answer.selectedAnswer === question.correctAnswer;
                }).length}
              </div>
              <div className="text-blue-800 font-medium">Correct Answers</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">{result.totalQuestions}</div>
              <div className="text-purple-800 font-medium">Total Questions</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-2xl font-bold text-green-600 mb-2">{Math.floor(totalTimeSpent / 60)}m {totalTimeSpent % 60}s</div>
              <div className="text-green-800 font-medium">Time Spent</div>
            </div>
          </div>
        </div>

        {/* Question Review */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Question Review</h2>
          <div className="space-y-6">
            {quiz.questions.map((question, index) => {
              const userAnswer = userAnswers.find(answer => answer.questionId === question.id);
              const isCorrect = userAnswer?.selectedAnswer === question.correctAnswer;
              const wasAnswered = userAnswer?.selectedAnswer !== undefined && userAnswer.selectedAnswer !== -1;

              return (
                <div
                  key={question.id}
                  className={`border-2 rounded-xl p-6 ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex-1 pr-4">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {wasAnswered && userAnswer && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {userAnswer.timeSpent}s
                        </div>
                      )}
                      {isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {question.options.map((option, optionIndex) => {
                      const isUserAnswer = userAnswer?.selectedAnswer === optionIndex;
                      const isCorrectAnswer = optionIndex === question.correctAnswer;

                      return (
                        <div
                          key={optionIndex}
                          className={`p-3 rounded-lg ${
                            isCorrectAnswer
                              ? 'bg-green-100 border border-green-300'
                              : isUserAnswer
                              ? 'bg-red-100 border border-red-300'
                              : 'bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="font-medium mr-2">
                              {String.fromCharCode(65 + optionIndex)}.
                            </span>
                            <span>{option}</span>
                            {isCorrectAnswer && (
                              <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <XCircle className="h-4 w-4 text-red-600 ml-2" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {question.explanation && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-800 text-sm">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  )}

                  {!wasAnswered && (
                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-3">
                      <p className="text-gray-600 text-sm">
                        <strong>No answer provided</strong> - Time ran out
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Retake Quiz
          </button>
          <button
            onClick={onBackToHome}
            className="flex items-center justify-center px-8 py-4 bg-white text-gray-800 border-2 border-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;