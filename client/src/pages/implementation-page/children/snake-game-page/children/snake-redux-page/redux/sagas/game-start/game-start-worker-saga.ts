import { delay, put, select } from 'redux-saga/effects';
import { gameStartActionSaga, gameStepActionSaga } from '../../actions';
import { gameIsStartedSelector, gameDelaySelector } from '../../selectors';

export function* gameStartWorkerSaga () {
  const isStarted = yield select(gameIsStartedSelector);
  const gameDelay = yield select(gameDelaySelector);

  if (isStarted) {
    yield delay(gameDelay);

    yield put(gameStepActionSaga());
    yield put(gameStartActionSaga());
  }
}