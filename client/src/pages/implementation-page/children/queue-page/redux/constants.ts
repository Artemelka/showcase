export const QUEUE_REDUCER_NAME = 'queue';

export const INITIAL_STATE = {
  tasks: [],
  requestCount: 0,
  maxRequestCount: 3,
  createTaskQuantity: 4,
  filterValues: { id: 'allTasks', value: 'all' },
};