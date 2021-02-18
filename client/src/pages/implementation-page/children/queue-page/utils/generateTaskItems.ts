import { v4 as getId } from 'uuid';
import { TaskItem } from '../redux';

export const generateTaskItems = (quantity: number, startIndex: number): Array<TaskItem> =>
  [...Array(quantity)].map((_, index): TaskItem => ({
    id: getId(),
    index: startIndex + (index + 1),
    status: 'create',
  }));