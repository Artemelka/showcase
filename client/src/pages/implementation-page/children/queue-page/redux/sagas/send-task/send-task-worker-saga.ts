import { put, call, select } from 'redux-saga/effects';
import { checkQueueActionSaga } from '../../actions';
import { queuePendingTasksSelector } from '../../selectors';
import { updateTask, decrementCounter, incrementCounter } from '../../reducer';
import { fakeRequest } from './utils';

export function* sendTaskWorkerSaga() {
  const pendingTasks = yield select(queuePendingTasksSelector);

  if (pendingTasks.length) {
    const currentTask = { ...pendingTasks[0], status: 'progress' };

    yield put(updateTask(currentTask));
    yield put(incrementCounter());
    yield put(checkQueueActionSaga());

    try {
      const response = yield call(fakeRequest, currentTask);
      yield put(updateTask(response));

    } catch (error) {
      yield put(updateTask(error));
    } finally {
      yield put(decrementCounter());
      yield put(checkQueueActionSaga());
    }
  }
}