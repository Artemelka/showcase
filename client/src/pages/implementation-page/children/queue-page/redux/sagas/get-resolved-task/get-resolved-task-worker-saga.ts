import { call, delay, select, put } from 'redux-saga/effects';
import { API } from '../../../../../../../api';
import { getResolvedTaskActionSaga } from '../../actions';
import { updateTasks } from '../../reducer';
import { queueSendingTasksSelector } from '../../selectors';

export function* getResolvedTaskWorkerSaga() {
  const sendingTasks = yield select(queueSendingTasksSelector);

  if (sendingTasks.length) {
    try {
      const response = yield call(API.QUEUE_TASK.getResolvedTask, sendingTasks);

      if (response.length) {
        yield put(updateTasks(response));
      }
    } catch (error) {
      console.log('=== Error getResolvedTaskWorkerSaga ===', error);
    } finally {
      const actualSendingTasks = yield select(queueSendingTasksSelector);

      if (actualSendingTasks.length) {
        yield delay(3000);
        yield put(getResolvedTaskActionSaga());
      }
    }
  }
}