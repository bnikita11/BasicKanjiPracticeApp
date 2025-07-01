import React from 'react';
import { BookOpen, Target, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onStartStudy: () => void;
  totalCards: number;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartStudy, totalCards }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-4 sm:mb-6">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4">
            JLPT N4 Kanji
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Master essential Japanese characters with interactive flashcards
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full mb-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Focused Learning</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {totalCards} carefully selected kanji for JLPT N4 preparation
              </p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full mb-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Interactive Cards</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Smooth animations and touch-friendly controls for efficient study
              </p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 sm:col-span-2 lg:col-span-1">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full mb-3">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Progress Tracking</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Visual progress bar and session management
              </p>
            </div>
          </div>
          
          <button
            onClick={onStartStudy}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Start Studying
          </button>
          
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 space-y-1">
            <p className="hidden sm:block">Use arrow keys to navigate • Space to flip cards • Click to interact</p>
            <p className="sm:hidden">Tap cards to flip • Swipe or use buttons to navigate</p>
          </div>
        </div>
      </div>
    </div>
  );
};