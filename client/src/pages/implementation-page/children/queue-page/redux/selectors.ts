import { createSelector } from 'reselect';
import { DropdownItemParams } from '@artemelka/react-components';
import { INITIAL_STATE, QUEUE_REDUCER_NAME } from './constants';
import { QueueStore, QueueState, TaskItem, Tasks } from './types';

const queueSelector = (state: QueueStore): QueueState => state[QUEUE_REDUCER_NAME] || INITIAL_STATE;

export const queueTasksSelector = createSelector(
  [queueSelector],
  (queueState): Tasks => queueState.tasks
);

export const queueTasksArraySelector = createSelector(
  [queueSelector],
  (queueState): Array<TaskItem> => Object.values(queueState.tasks)
);

export const queueCreatedTasksSelector = createSelector(
  [queueTasksArraySelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'create')
);

export const queuePendingTasksSelector = createSelector(
  [queueTasksArraySelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'pending')
);

export const queueProgressTasksSelector = createSelector(
  [queueTasksArraySelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'progress')
);

export const queueSendingTasksSelector = createSelector(
  [queueTasksArraySelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'sending')
);

export const queueDoneTasksSelector = createSelector(
  [queueTasksArraySelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'done')
);

export const queueErrorTasksSelector = createSelector(
  [queueTasksArraySelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'error')
);

export const queueCreateTasksQuantitySelector = createSelector(
  [queueSelector],
  (queueState): number => queueState.createTaskQuantity
);

export const queueRequestCountSelector = createSelector(
  [queueSelector],
  (queueState): number => queueState.requestCount
);

export const queueMaxRequestCountSelector = createSelector(
  [queueSelector],
  (queueState): number => queueState.maxRequestCount
);

export const queueFilterValuesSelector = createSelector(
  [queueSelector],
  (queueState): DropdownItemParams => queueState.filterValues
);

export const queueFilteredTasksSelector = createSelector(
  [queueTasksArraySelector, queueFilterValuesSelector],
  (tasks, filter): Array<TaskItem> =>
    filter.value === 'all'
      ? tasks
      : tasks.filter(({ status }) => status === filter.value)
);
