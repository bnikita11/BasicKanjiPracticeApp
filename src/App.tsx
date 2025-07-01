import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { StudySession } from './components/StudySession';
import { CompletionScreen } from './components/CompletionScreen';
import { kanjiData } from './data/kanjiData';

type AppState = 'welcome' | 'studying' | 'completed';

function App() {
  const [appState, setAppState] = useState<AppState>('welcome');

  const handleStartStudy = () => {
    setAppState('studying');
  };

  const handleStudyComplete = () => {
    setAppState('completed');
  };

  const handleRestart = () => {
    setAppState('studying');
  };

  const handleHome = () => {
    setAppState('welcome');
  };

  return (
    <div className="min-h-screen">
      {appState === 'welcome' && (
        <WelcomeScreen 
          onStartStudy={handleStartStudy}
          totalCards={kanjiData.length}
        />
      )}
      
      {appState === 'studying' && (
        <StudySession 
          cards={kanjiData}
          onComplete={handleStudyComplete}
        />
      )}
      
      {appState === 'completed' && (
        <CompletionScreen 
          onRestart={handleRestart}
          onHome={handleHome}
          totalCards={kanjiData.length}
        />
      )}
    </div>
  );
}

export default App;