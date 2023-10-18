import { TaskItem, Tasks } from '../types';

export function prepareTasks(
  allTasks: Tasks,
  resolvedTasks: Array<TaskItem>,
): Tasks {
  return resolvedTasks.reduce((acc, task) => {
    return {
      ...acc,
      [task.id]: task,
    };
  }, allTasks);
}
