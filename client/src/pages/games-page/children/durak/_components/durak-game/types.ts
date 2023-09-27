import { CaseReducer } from '@reduxjs/toolkit';
import { BaseAction } from '@/app';
import { DURAK_REDUCER_NAME } from './redux/constants';

export type Suit = 'diamonds' | 'hearts' | 'clubs' | 'spades';

export type Rank = 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type CardParams = {
  id: string;
  img: string;
  rank: Rank;
  suit: Suit;
};

type Cards = Array<CardParams>;

export type DurakState = {
  playerBank: Cards;
  enemyBank: Cards;
  deck: Cards;
  trumpCard: CardParams;
  isNeedUpdateCards: boolean;
  isPlayerStep: boolean;
  tableEnemyPlace: Cards;
  tablePlayerPlace: Cards;
  isGetCard: boolean;
}

export type SetCardsAction = BaseAction<Cards>;
export type StartGameAction = BaseAction<DurakState>;

export type DurakGameReducerCase = {
  addEnemyBank: CaseReducer<DurakState, SetCardsAction>;
  setEnemyBank: CaseReducer<DurakState, SetCardsAction>;

  addPlayerBank: CaseReducer<DurakState, SetCardsAction>;
  setPlayerBank: CaseReducer<DurakState, SetCardsAction>;

  setDeckBank: CaseReducer<DurakState, SetCardsAction>;
  setIsNeedUpdateCards: CaseReducer<DurakState>;
  restoreIsNeedUpdateCards: CaseReducer<DurakState>;

  addEnemyPlace: CaseReducer<DurakState, BaseAction<CardParams>>;
  addPlayerPlace: CaseReducer<DurakState, BaseAction<CardParams>>;

  clearPlaces: CaseReducer<DurakState>;

  setTrumpCard: CaseReducer<DurakState, BaseAction<CardParams>>;
  toggleStep: CaseReducer<DurakState>;
  startGame: CaseReducer<DurakState, StartGameAction>;
}

export type DurakGameStore = { [DURAK_REDUCER_NAME]: DurakState };