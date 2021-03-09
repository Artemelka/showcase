import { fork, take } from 'redux-saga/effects'
import { GAME_STEP_ACTION_SAGA } from '../../actions';
import { gameStepWorkerSaga } from './game-step-worker-saga';

export const GAME_TOOLKIT_STEP_WATCHER_SAGA_NAME = 'GAME_STEP_WATCHER_SAGA';
export function* gameStepWatcherSaga() {
  while (true) {
    yield take(GAME_STEP_ACTION_SAGA);
    yield fork(gameStepWorkerSaga);
  }
}