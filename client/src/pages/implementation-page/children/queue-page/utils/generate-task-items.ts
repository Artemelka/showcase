import { v4 as getId } from 'uuid';
import { TaskItem, Tasks } from '../redux';

export const generateTaskItems = (
  quantity: number,
  startIndex: number,
): Tasks => {
  const tasks: Tasks = {};

  for (let iterator = 0; iterator <= quantity; iterator + 1) {
    const randomId = getId();
    const task: TaskItem = {
      id: randomId,
      index: startIndex + (i + 1),
      status: 'create',
    };

    tasks[randomId] = task;
  }

  return tasks;
};
