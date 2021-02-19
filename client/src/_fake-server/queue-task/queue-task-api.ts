import { TaskItem } from '../../pages/implementation-page/children/queue-page/redux';

const getRandomTimeout = (): number => {
  const mathRandom = Math.random();
  const random = `${mathRandom}`.charAt(2);

  return Number(`${random}000`);
};

const getResponse = (item: TaskItem): TaskItem => {
  return ({
    ...item,
    result: item.index * item.index,
    status: Math.random() < 0.8 ? 'done' : 'error',
  });
}

const setSendingStatus = (item: TaskItem): TaskItem => {
  return ({
    ...item,
    status: 'sending',
  });
}

type State = {
  progressTask: Array<TaskItem>,
}

export class QueueTaskApi {
  state: State = {
    progressTask: []
  }

  setTask = (task: TaskItem) => {
    this.state.progressTask = [...this.state.progressTask, task];
  }

  removeTask = (task: TaskItem) => {
    this.state.progressTask = this.state.progressTask.filter(item => item.id !== task.id);
  }

  checkTask = (task: TaskItem) => {
    const randomTimeout = getRandomTimeout();
    const item = getResponse(task);

    setTimeout(() => {
      this.setTask(item);
    }, randomTimeout);
  }

  postTask = (item: TaskItem) => {
    console.log('Calling server API with...' + item.index);
    return new Promise((resolve) => {
      const response = setSendingStatus(item);

      this.checkTask(response);

      setTimeout(() => resolve(response), getRandomTimeout())
      ;
    });
  }

  getResolvedTask = (tasks: Array<TaskItem>) => {
    console.log('Called API getResolvedTask with...', tasks);

    const result = tasks.reduce((acc: Array<TaskItem>, task) => {
      const resolvedTasks = this.state.progressTask.filter(item => item.id === task.id);

      if (resolvedTasks.length) {
        acc.push(resolvedTasks[0]);
        this.removeTask(resolvedTasks[0]);
      }

      return acc;
    }, []);



    return new Promise((resolve) => {
        //
        resolve(result);
        console.log('=== resolve ===', result);
    });
  }
}