import React from 'react';
import { Clock, BookOpen, Award } from 'lucide-react';
import { Quiz } from '../types';

interface QuizSelectionProps {
  quizzes: Quiz[];
  onSelectQuiz: (quiz: Quiz) => void;
  getStoredScore: (quizId: string) => number | null;
}

const QuizSelection: React.FC<QuizSelectionProps> = ({ quizzes, onSelectQuiz, getStoredScore }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                alt="QuadraPlus Logo" 
                className="h-16 w-16 rounded-lg object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            QuadraPlus Professional
          </h1>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Management Training Institute
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Power BI CertMaster Quiz App is an interactive quiz application designed to help learners prepare for the PL-300: Microsoft Power BI Data Analyst certification exam. The app is structured to assess the learner's knowledge across the four core domains of the certification exam. Each domain is tested separately, followed by a final comprehensive assessment that draws questions from all domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {quizzes.map((quiz) => {
            const storedScore = getStoredScore(quiz.id);
            
            return (
              <div
                key={quiz.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {quiz.title}
                    </h3>
                    {storedScore !== null && (
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {storedScore}%
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {quiz.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-500">
                      <BookOpen className="h-5 w-5 mr-3 text-blue-500" />
                      <span>{quiz.questions.length} Questions</span>
                    </div>
                    {quiz.timePerQuestion && (
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-5 w-5 mr-3 text-purple-500" />
                        <span>{quiz.timePerQuestion} seconds per question</span>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => onSelectQuiz(quiz)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;