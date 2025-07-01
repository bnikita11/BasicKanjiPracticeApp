import React from 'react';
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw } from 'lucide-react';

interface StudyControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: () => void;
  onRestart: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  isShuffled: boolean;
}

export const StudyControls: React.FC<StudyControlsProps> = ({
  onPrevious,
  onNext,
  onShuffle,
  onRestart,
  hasPrevious,
  hasNext,
  isShuffled
}) => {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:bg-gray-50 disabled:text-gray-300 text-gray-600 rounded-full transition-colors duration-200 touch-manipulation"
        aria-label="Previous card"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={onShuffle}
        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-colors duration-200 touch-manipulation ${
          isShuffled 
            ? 'bg-orange-100 text-orange-600 hover:bg-orange-200 active:bg-orange-300' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
        }`}
        title="Shuffle cards"
        aria-label="Shuffle cards"
      >
        <Shuffle size={18} className="sm:w-5 sm:h-5" />
      </button>
      
      <button
        onClick={onRestart}
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 rounded-full transition-colors duration-200 touch-manipulation"
        title="Restart session"
        aria-label="Restart session"
      >
        <RotateCcw size={18} className="sm:w-5 sm:h-5" />
      </button>
      
      <button
        onClick={onNext}
        disabled={!hasNext}
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-50 disabled:text-gray-300 text-white rounded-full transition-colors duration-200 touch-manipulation"
        aria-label="Next card"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};