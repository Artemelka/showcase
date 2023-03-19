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
  isPlayerStep: boolean;
  tableEnemyPlace: Cards;
  tablePlayerPlace: Cards;
}

export type SetCardsAction = BaseAction<Cards>;
export type StartGameAction = BaseAction<DurakState>;

export type DurakGameReducerCase = {
  addEnemyBank: (state: DurakState, action: SetCardsAction) => void,
  setEnemyBank: (state: DurakState, action: SetCardsAction) => void,

  addPlayerBank: (state: DurakState, action: SetCardsAction) => void,
  setPlayerBank: (state: DurakState, action: SetCardsAction) => void,

  setDeckBank: (state: DurakState, action: SetCardsAction) => void,

  addEnemyPlace: (state: DurakState, action: BaseAction<CardParams>) => void;
  addPlayerPlace: (state: DurakState, action: BaseAction<CardParams>) => void;

  clearPlaces: (state: DurakState) => void;

  setTrumpCard: (state: DurakState, action: BaseAction<CardParams>) => void,
  toggleStep: (state: DurakState) => void,
  startGame: (state: DurakState, action: StartGameAction) => void,
}

export type DurakGameStore = { [DURAK_REDUCER_NAME]: DurakState };