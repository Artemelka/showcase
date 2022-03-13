import { Action } from 'redux';

export const CHECK_QUEUE_ACTION_SAGA = 'CHECK_QUEUE_ACTION_SAGA';
export const checkQueueActionSaga = (): Action<string> => ({
  type: CHECK_QUEUE_ACTION_SAGA,
});

export const GET_RESOLVED_TASK_ACTION_SAGA = 'GET_RESOLVED_TASK_ACTION_SAGA';
export const getResolvedTaskActionSaga = (): Action<string> => ({
  type: GET_RESOLVED_TASK_ACTION_SAGA,
});

export const QUEUE_SEND_TASK_ACTION_SAGA = 'QUEUE_SEND_TASK_ACTION_SAGA';
export const queueSendTaskActionSaga = (): Action<string> => ({
  type: QUEUE_SEND_TASK_ACTION_SAGA,
});