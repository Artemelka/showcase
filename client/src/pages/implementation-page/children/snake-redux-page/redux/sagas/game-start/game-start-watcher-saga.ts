import { fork, take } from 'redux-saga/effects';
import { GAME_START_ACTION_SAGA } from '../../actions';
import { gameStartWorkerSaga } from './game-start-worker-saga';

export const GAME_START_WATCHER_SAGA_NAME = 'GAME_START_WATCHER_SAGA';
export function* gameStartWatcherSaga() {
  while (true) {
    yield take(GAME_START_ACTION_SAGA);
    yield fork(gameStartWorkerSaga);
  }
}