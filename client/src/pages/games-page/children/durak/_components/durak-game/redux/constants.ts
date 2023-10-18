import { CARD_DECK } from '@/pages/games-page/_constants/cards';

export const DURAK_REDUCER_NAME = 'durak-game';

export const INITIAL_STATE = {
  deck: [],
  enemyBank: [],
  isGetCard: false,
  isNeedUpdateCards: false,
  isPlayerStep: false,
  playerBank: [],
  tableEnemyPlace: [],
  tablePlayerPlace: [],
  trumpCard: [...CARD_DECK][0],
};
