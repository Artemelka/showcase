import { getGameDeck } from '../utils';
import { DurakState } from '../types';

export const DURAK_REDUCER_NAME = 'durak-game';

export const INITIAL_STATE: DurakState = {
  deck: [],
  enemyBank: [],
  isGetCard: false,
  isNeedUpdateCards: false,
  isPlayerStep: false,
  playerBank: [],
  tableEnemyPlace: [],
  tablePlayerPlace: [],
  trumpCard: getGameDeck()[0],
}