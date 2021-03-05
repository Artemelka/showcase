import { QueueState } from './types';

export const QUEUE_REDUCER_NAME = 'queue';

export const INITIAL_STATE: QueueState = {
  createTaskQuantity: 10,
  filterValues: { id: 'allTasks', value: 'all' },
  maxRequestCount: 3,
  requestCount: 0,
  tasks: {},
};