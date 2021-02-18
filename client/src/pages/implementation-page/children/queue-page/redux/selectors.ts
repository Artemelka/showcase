import { createSelector } from 'reselect';
import { DropdownItemParams } from '@artemelka/react-components';
import { INITIAL_STATE, QUEUE_REDUCER_NAME } from './constants';
import { AppStoreWithQueue, QueueState, TaskItem } from './types';

const queueSelector = (state: AppStoreWithQueue): QueueState => state[QUEUE_REDUCER_NAME] || INITIAL_STATE;

export const queueTasksSelector = createSelector(
  [queueSelector],
  (queueState): Array<TaskItem> => queueState.tasks
);

export const queueCreatedTasksSelector = createSelector(
  [queueTasksSelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'create')
);

export const queuePendingTasksSelector = createSelector(
  [queueTasksSelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'pending')
);

export const queueProgressTasksSelector = createSelector(
  [queueTasksSelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'progress')
);

export const queueDoneTasksSelector = createSelector(
  [queueTasksSelector],
  (tasks): Array<TaskItem> => tasks.filter(({ status }) => status === 'done')
);

export const queueErrorTasksSelector = createSelector(
  [queueTasksSelector],
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
  [queueTasksSelector, queueFilterValuesSelector],
  (tasks, filter): Array<TaskItem> =>
    filter.value === 'all'
      ? tasks
      : tasks.filter(({ status }) => status === filter.value)
);
