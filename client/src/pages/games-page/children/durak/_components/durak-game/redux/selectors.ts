import { createSelector } from 'reselect';
import { DurakGameStore } from '../types';
import { DURAK_REDUCER_NAME, INITIAL_STATE } from './constants';

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

export const isNeedUpdateCardsSelector = createSelector(
  [durakGameSelector],
  (state) => state.isNeedUpdateCards,
);

export const isPlayerAttackSelector = createSelector(
  [playerPlaceSelector, enemyPlaceSelector],
  (playerPlace, enemyPlace) =>
    !enemyPlace.length || enemyPlace.length === playerPlace.length,
);

export const isEnemyAttackSelector = createSelector(
  [playerPlaceSelector, enemyPlaceSelector],
  (playerPlace, enemyPlace) =>
    !playerPlace.length || playerPlace.length === enemyPlace.length,
);
