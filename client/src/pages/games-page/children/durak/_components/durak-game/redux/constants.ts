import { getGameDeck } from '../utils';
import { DurakState } from '../types';

export const DURAK_REDUCER_NAME = 'durak-game';

export const INITIAL_STATE: DurakState = {
  playerBank: [],
  enemyBank: [],
  deck: [],
  trumpCard: getGameDeck()[0],
  isPlayerStep: false,
  tablePlayerPlace: [],
  tableEnemyPlace: [],
}