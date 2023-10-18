import { call, put, select } from 'redux-saga/effects';
import { API } from '@/api';
import { checkQueueActionSaga, getResolvedTaskActionSaga } from '../../actions';
import { queuePendingTasksSelector } from '../../selectors';
import { decrementCounter, incrementCounter, updateTasks } from '../../reducer';

export function* sendTaskSaga() {
  const pendingTasks = yield select(queuePendingTasksSelector);

  if (pendingTasks.length) {
    const currentTask = { ...pendingTasks[0], status: 'progress' };

    yield put(updateTasks([currentTask]));
    yield put(incrementCounter());
    yield put(checkQueueActionSaga());

    try {
      const response = yield call(API.QUEUE_TASK.sendTask, currentTask);
      yield put(updateTasks([response]));
      yield put(getResolvedTaskActionSaga());
    } catch (error) {
      console.error('=== Error sendTaskWorkerSaga ===');
    } finally {
      yield put(decrementCounter());
      yield put(checkQueueActionSaga());
    }
  }
}
