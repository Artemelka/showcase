import { gameStepWatcherSaga, GAME_STEP_WATCHER_SAGA_NAME } from './game-step-watcher-saga';

export const GAME_STEP_INJECT_SAGA_CONFIG = {
  name: GAME_STEP_WATCHER_SAGA_NAME,
  saga: gameStepWatcherSaga,
}