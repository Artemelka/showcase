import { createSelector } from 'reselect';
import { DURAK_REDUCER_NAME, INITIAL_STATE } from './constants';
import { DurakGameStore } from '../types';

const durakGameSelector = (state: DurakGameStore) =>
  state[DURAK_REDUCER_NAME] || INITIAL_STATE;

export const enemyBankSelector = createSelector(
  [durakGameSelector],
  (state) => state.enemyBank,
);

export const enemyPlaceSelector = createSelector(
  [durakGameSelector],
  (state) => state.tableEnemyPlace,
);

export const playerBankSelector = createSelector(
  [durakGameSelector],
  (state) => state.playerBank,
);

export const playerPlaceSelector = createSelector(
  [durakGameSelector],
  (state) => state.tablePlayerPlace,
);

export const deckBankSelector = createSelector(
  [durakGameSelector],
  (state) => state.deck,
);

export const trumpCardSelector = createSelector(
  [durakGameSelector],
  (state) => state.trumpCard,
);

export const isPlayerStepSelector = createSelector(
  [durakGameSelector],
  (state) => state.isPlayerStep,
);