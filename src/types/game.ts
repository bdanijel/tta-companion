export type Language = 'sr' | 'en';

export type GameVersion = 'simple' | 'advanced' | 'full';

export type ExpansionMode = 
  | 'none'           // Base game only
  | 'rebalanced'     // Rebalanced base game
  | 'pure'           // Pure expansion (all new leaders & wonders)
  | 'secret_mix'     // Secret mix (shuffled together)
  | 'public_mix';    // Public mix with proxy cards & boards (recommended)

export type PlayerCount = 2 | 3 | 4;

export type AgeType = 'A' | 'I' | 'II' | 'III';

export type CardType = 
  | 'leader' 
  | 'wonder' 
  | 'military' 
  | 'tactic' 
  | 'action' 
  | 'technology' 
  | 'government';

export interface CardClarification {
  id: string;
  nameEn: string;
  nameSr: string;
  age: AgeType;
  type: CardType;
  isExpansion: boolean;
  isRebalanced?: boolean;
  summarySr: string;
  summaryEn: string;
  detailsSr: string[];
  detailsEn: string[];
  bookkeepingTipSr?: string;
  bookkeepingTipEn?: string;
  tags: string[];
}

export interface RuleCategory {
  id: string;
  titleSr: string;
  titleEn: string;
  iconName: string;
  summarySr: string;
  summaryEn: string;
}

export interface RuleTopic {
  id: string;
  categoryId: string;
  titleSr: string;
  titleEn: string;
  summarySr: string;
  summaryEn: string;
  contentSr: string[];
  contentEn: string[];
  keyPointsSr?: string[];
  keyPointsEn?: string[];
  commonMistakesSr?: string[];
  commonMistakesEn?: string[];
  tags: string[];
}

export interface SetupStep {
  id: string;
  titleSr: string;
  titleEn: string;
  descriptionSr: string;
  descriptionEn: string;
  detailsSr?: string[];
  detailsEn?: string[];
  tokenNotesSr?: { color: 'yellow' | 'blue' | 'white' | 'red'; textSr: string; textEn: string }[];
  alertSr?: string;
  alertEn?: string;
}

export interface BoardSlotCard {
  proxyNumber: number;
  card: CardClarification;
}
