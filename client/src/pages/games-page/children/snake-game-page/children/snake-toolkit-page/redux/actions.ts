import { Action } from 'redux';

export const GAME_START_ACTION_SAGA = 'GAME_START';
export const gameStartActionSaga = (): Action<string> => ({
  type: GAME_START_ACTION_SAGA,
});

export const GAME_STEP_ACTION_SAGA = 'GAME_STEP';
export const gameStepActionSaga = (): Action<string> => ({
  type: GAME_STEP_ACTION_SAGA,
});
