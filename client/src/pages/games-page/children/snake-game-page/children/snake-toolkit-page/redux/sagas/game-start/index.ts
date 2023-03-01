import { fork, take } from 'redux-saga/effects';
import { GAME_START_ACTION_SAGA } from '../../actions';
import { gameStartSaga } from './game-start-saga';

const GAME_TOOLKIT_START_WATCHER_SAGA_NAME = 'GAME_TOOLKIT_START_WATCHER_SAGA';

function* gameStartWatcherSaga() {
  while (true) {
    yield take(GAME_START_ACTION_SAGA);
    yield fork(gameStartSaga);
  }
}

export const GAME_START_INJECT_SAGA_CONFIG = {
  name: GAME_TOOLKIT_START_WATCHER_SAGA_NAME,
  saga: gameStartWatcherSaga,
};