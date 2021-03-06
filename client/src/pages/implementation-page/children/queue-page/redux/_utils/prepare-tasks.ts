import { TaskItem, Tasks } from '../types';

export function prepareTasks(allTasks: Array<TaskItem>, resolvedTasks: Array<TaskItem>): Tasks {
  const taskObj = allTasks.reduce((acc: { [key: string]: TaskItem}, task) => {
    acc[task.id] = task;

    return acc;
  }, {});

  resolvedTasks.forEach(item => {
    taskObj[item.id] = item;
  });

  return taskObj;
}