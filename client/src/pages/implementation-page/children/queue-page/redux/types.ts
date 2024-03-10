import { DropdownItemParams } from '@artemelka/react-components';
import { BaseAction } from '@/types';
import { QUEUE_REDUCER_NAME } from './constants';

export type TaskItem = {
  id: string;
  index: number;
  result?: number;
  status: 'create' | 'pending' | 'progress' | 'sending' | 'done' | 'error';
};

export type Tasks = Record<string, TaskItem>;

export type QueueState = {
  createTaskQuantity: number;
  filterValues: DropdownItemParams;
  maxRequestCount: number;
  requestCount: number;
  tasks: Tasks;
};

export type QueueReducerCase = {
  addTasks: (state: QueueState, payload: BaseAction<Tasks>) => void;
  changeCreateTaskQuantity: (
    state: QueueState,
    payload: BaseAction<number>,
  ) => void;
  changeFilter: (
    state: QueueState,
    payload: BaseAction<DropdownItemParams>,
  ) => void;
  changeRequestCount: (state: QueueState, payload: BaseAction<number>) => void;
  decrementCounter: (state: QueueState) => void;
  incrementCounter: (state: QueueState) => void;
  replaceTasks: (state: QueueState, payload: BaseAction<Tasks>) => void;
  updateTasks: (
    state: QueueState,
    payload: BaseAction<Array<TaskItem>>,
  ) => void;
};

export type QueueStore = { [QUEUE_REDUCER_NAME]: QueueState };
