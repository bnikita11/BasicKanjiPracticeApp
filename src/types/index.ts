export interface KanjiCard {
  id: number;
  kanji: string;
  meaning: string;
}

export interface StudySession {
  totalCards: number;
  currentIndex: number;
  correctAnswers: number;
  isComplete: boolean;
  startTime: Date;
}