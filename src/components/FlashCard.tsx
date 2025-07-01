import React from 'react';
import { KanjiCard } from '../types';

interface FlashCardProps {
  card: KanjiCard;
  isFlipped: boolean;
  onFlip: () => void;
}

export const FlashCard: React.FC<FlashCardProps> = ({ card, isFlipped, onFlip }) => {
  return (
    <div 
      className="relative w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-md mx-auto cursor-pointer touch-manipulation"
      onClick={onFlip}
      style={{ aspectRatio: '4/5' }}
    >
      <div className={`absolute inset-0 transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl shadow-xl border border-blue-200 flex items-center justify-center backface-hidden">
          <div className="text-center px-4 sm:px-6">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-blue-900 mb-3 sm:mb-4 select-none leading-none">
              {card.kanji}
            </div>
            <div className="text-xs sm:text-sm text-blue-600 font-medium">
              Tap to reveal meaning
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl shadow-xl border border-orange-200 flex items-center justify-center backface-hidden rotate-y-180">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-900 mb-4 sm:mb-6 select-none leading-none">
              {card.kanji}
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-800 mb-3 sm:mb-4 leading-tight">
              {card.meaning}
            </div>
            <div className="text-xs sm:text-sm text-orange-600 font-medium">
              Tap to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};