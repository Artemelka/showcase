import { gameStartWatcherSaga, GAME_START_WATCHER_SAGA_NAME } from './game-start-watcher-saga';

export const GAME_START_INJECT_SAGA_CONFIG = {
  name: GAME_START_WATCHER_SAGA_NAME,
  saga: gameStartWatcherSaga,
};