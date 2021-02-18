import { DropdownItemParams } from '@artemelka/react-components';
import { AppStore, BaseAction } from '../../../../../app';
import { QUEUE_REDUCER_NAME } from './constants';

export type TaskItem = {
  id: string;
  index: number;
  status: 'create'| 'pending' | 'progress' | 'done' | 'error';
  result?: number;
}

export type QueueState = {
  createTaskQuantity: number,
  filterValues: DropdownItemParams;
  maxRequestCount: number,
  requestCount: number,
  tasks: Array<TaskItem>,
};

export type QueueReducerCase = {
  addTasks: (state: QueueState, payload: BaseAction<Array<TaskItem>>) => void;
  changeCreateTaskQuantity: (state: QueueState, payload: BaseAction<number>) => void;
  changeFilter: (state: QueueState, payload: BaseAction<DropdownItemParams>) => void;
  changeRequestCount: (state: QueueState, payload: BaseAction<number>) => void;
  decrementCounter: (state: QueueState) => void;
  incrementCounter: (state: QueueState) => void;
  replaceTasks: (state: QueueState, payload: BaseAction<Array<TaskItem>>) => void;
  updateTask: (state: QueueState, payload: BaseAction<TaskItem>) => void;
};

export type AppStoreWithQueue = AppStore & { [QUEUE_REDUCER_NAME]: QueueState };
