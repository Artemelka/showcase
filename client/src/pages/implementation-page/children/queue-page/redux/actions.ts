import { Action } from 'redux';

export const CHECK_QUEUE = 'CHECK_QUEUE_SAGA';
export const checkQueueActionSaga = (): Action<string> => ({ type: CHECK_QUEUE });

export const QUEUE_SEND_TASK = 'QUEUE_SEND_TASK_SAGA';
export const queueSendTaskActionSaga = (): Action<string> => ({ type: QUEUE_SEND_TASK });
