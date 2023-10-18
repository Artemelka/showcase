import { TaskItem } from '@/pages/implementation-page/children/queue-page/redux';
import { getRandomNumber } from '../_utils';

const getRandomTimeout = (): number => {
  return Number(`${getRandomNumber()}000`);
};

const getResponse = (item: TaskItem): TaskItem => {
  return {
    ...item,
    result: item.index * item.index,
    status: Math.random() < 0.8 ? 'done' : 'error',
  };
};

const setSendingStatus = (item: TaskItem): TaskItem => {
  return {
    ...item,
    status: 'sending',
  };
};

type State = {
  progressTask: Array<TaskItem>;
};

export class QueueTaskApi {
  state: State = {
    progressTask: [],
  };

  setTask = (task: TaskItem) => {
    this.state.progressTask = [...this.state.progressTask, task];
  };

  removeTask = (task: TaskItem) => {
    this.state.progressTask = this.state.progressTask.filter(
      (item) => item.id !== task.id,
    );
  };

  checkTask = (task: TaskItem) => {
    const randomTimeout = getRandomTimeout();
    const item = getResponse(task);

    setTimeout(() => {
      this.setTask(item);
    }, randomTimeout);
  };

  postTask = (item: TaskItem) => {
    return new Promise((resolve) => {
      const response = setSendingStatus(item);

      this.checkTask(response);

      setTimeout(() => resolve(response), getRandomTimeout());
    });
  };

  getResolvedTask = (tasks: Array<TaskItem>) => {
    const result = tasks.reduce((acc: Array<TaskItem>, task) => {
      const resolvedTasks = this.state.progressTask.filter(
        (item) => item.id === task.id,
      );

      if (resolvedTasks.length) {
        acc.push(resolvedTasks[0]);
        this.removeTask(resolvedTasks[0]);
      }

      return acc;
    }, []);

    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500);
    });
  };
}
