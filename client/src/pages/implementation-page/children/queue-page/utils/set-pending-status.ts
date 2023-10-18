import { TaskItem } from '../redux';

export function setPendingStatus(tasks: Array<TaskItem>): Array<TaskItem> {
  return tasks.map((item) => ({ ...item, status: 'pending' }));
}
