import { put, call, select } from 'redux-saga/effects';
import { API } from '../../../../../../../api';
import { checkQueueActionSaga, getResolvedTaskActionSaga } from '../../actions';
import { queuePendingTasksSelector } from '../../selectors';
import { updateTask, decrementCounter, incrementCounter } from '../../reducer';

export function* sendTaskWorkerSaga() {
  const pendingTasks = yield select(queuePendingTasksSelector);

  if (pendingTasks.length) {
    const currentTask = { ...pendingTasks[0], status: 'progress' };

    yield put(updateTask(currentTask));
    yield put(incrementCounter());
    yield put(checkQueueActionSaga());

    try {
      const response = yield call(API.QUEUE_TASK.sendTask, currentTask);
      yield put(updateTask(response));
      yield put(getResolvedTaskActionSaga());

    } catch (error) {
      console.log('=== Error sendTaskWorkerSaga ===');
    } finally {
      yield put(decrementCounter());
      yield put(checkQueueActionSaga());
    }
  }
}