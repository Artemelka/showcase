import { fork, take } from 'redux-saga/effects';
import { GAME_STEP_ACTION_SAGA } from '../../actions';
import { gameStepSaga } from './game-step-saga';

const GAME_STEP_WATCHER_SAGA_NAME = 'GAME_STEP_WATCHER_SAGA';

function* gameStepWatcherSaga() {
  while (true) {
    yield take(GAME_STEP_ACTION_SAGA);
    yield fork(gameStepSaga);
  }
}

export const GAME_STEP_INJECT_SAGA_CONFIG = {
  name: GAME_STEP_WATCHER_SAGA_NAME,
  saga: gameStepWatcherSaga,
};
