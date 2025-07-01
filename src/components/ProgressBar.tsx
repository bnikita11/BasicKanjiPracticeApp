import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full max-w-lg mx-auto mb-6 sm:mb-8 px-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs sm:text-sm font-medium text-gray-600">Progress</span>
        <span className="text-xs sm:text-sm font-medium text-gray-600">
          {current} / {total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};