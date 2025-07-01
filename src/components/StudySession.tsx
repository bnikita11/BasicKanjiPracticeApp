import React, { useState, useEffect, useCallback } from 'react';
import { KanjiCard } from '../types';
import { FlashCard } from './FlashCard';
import { ProgressBar } from './ProgressBar';
import { StudyControls } from './StudyControls';

interface StudySessionProps {
  cards: KanjiCard[];
  onComplete: () => void;
}

export const StudySession: React.FC<StudySessionProps> = ({ cards, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyCards, setStudyCards] = useState(cards);
  const [isShuffled, setIsShuffled] = useState(false);

  const currentCard = studyCards[currentIndex];

  const handleFlip = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);

  const handleNext = useCallback(() => {
    if (currentIndex < studyCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      onComplete();
    }
  }, [currentIndex, studyCards.length, onComplete]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const handleShuffle = useCallback(() => {
    const shuffled = [...studyCards].sort(() => Math.random() - 0.5);
    setStudyCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsShuffled(true);
  }, [studyCards]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setStudyCards(cards);
    setIsShuffled(false);
  }, [cards]);

  // Touch gesture handling
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    };

    const handleSwipe = () => {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const minSwipeDistance = 50;

      // Only handle horizontal swipes if they're more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          // Swipe right - previous card
          handlePrevious();
        } else {
          // Swipe left - next card
          if (isFlipped) {
            handleNext();
          } else {
            handleFlip();
          }
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleNext, handlePrevious, handleFlip, isFlipped]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
        case ' ':
          if (isFlipped) {
            handleNext();
          } else {
            handleFlip();
          }
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          handleFlip();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleNext, handlePrevious, handleFlip, isFlipped]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            JLPT N4 Kanji Study
          </h1>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            <span className="hidden sm:inline">Use arrow keys or click to navigate • Space to flip cards</span>
            <span className="sm:hidden">Tap to flip • Swipe to navigate</span>
          </p>
        </div>

        <ProgressBar current={currentIndex + 1} total={studyCards.length} />

        <div className="mb-6 sm:mb-8 px-4">
          <FlashCard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={handleFlip}
          />
        </div>

        <StudyControls
          onPrevious={handlePrevious}
          onNext={handleNext}
          onShuffle={handleShuffle}
          onRestart={handleRestart}
          hasPrevious={currentIndex > 0}
          hasNext={currentIndex < studyCards.length - 1}
          isShuffled={isShuffled}
        />

        <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
          {isShuffled && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-2">
              Shuffled Mode
            </span>
          )}
        </div>
      </div>
    </div>
  );
};