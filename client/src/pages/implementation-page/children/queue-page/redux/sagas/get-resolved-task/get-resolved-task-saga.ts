import { call, delay, select, put } from 'redux-saga/effects';
import { API } from '@/api';
import { getResolvedTaskActionSaga } from '../../actions';
import { replaceTasks } from '../../reducer';
import { queueTasksSelector, queueSendingTasksSelector } from '../../selectors';
import { prepareTasks } from '../../_utils';

export function* getResolvedTaskSaga() {
  const sendingTasks = yield select(queueSendingTasksSelector);

  if (sendingTasks.length) {
    try {
      const response = yield call(API.QUEUE_TASK.getResolvedTask, sendingTasks);

      if (response.length) {
        const allTasks = yield select(queueTasksSelector);
        const result = prepareTasks(allTasks, response);

        yield put(replaceTasks(result));
      }
    } catch (error) {
      console.error('=== Error getResolvedTaskWorkerSaga ===', error);
    } finally {
      const actualSendingTasks = yield select(queueSendingTasksSelector);

      if (actualSendingTasks.length) {
        yield delay(3000);
        yield put(getResolvedTaskActionSaga());
      }
    }
  }
}