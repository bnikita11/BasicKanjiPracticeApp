import React from 'react';
import { Trophy, RotateCcw, Home } from 'lucide-react';

interface CompletionScreenProps {
  onRestart: () => void;
  onHome: () => void;
  totalCards: number;
}

export const CompletionScreen: React.FC<CompletionScreenProps> = ({ 
  onRestart, 
  onHome, 
  totalCards 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-md w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4 sm:mb-6">
          <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          Session Complete!
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 mb-2">
          Great work! You've reviewed
        </p>
        
        <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-4 sm:mb-6">
          {totalCards} kanji
        </div>
        
        <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 leading-relaxed">
          Consistent practice is key to mastering Japanese characters. Keep up the excellent work!
        </p>
        
        <div className="space-y-3">
          <button
            onClick={onRestart}
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-full transition-colors duration-200 touch-manipulation text-sm sm:text-base"
          >
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Study Again
          </button>
          
          <button
            onClick={onHome}
            className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 font-semibold rounded-full transition-colors duration-200 touch-manipulation text-sm sm:text-base"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};