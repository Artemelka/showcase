import { TodoItem } from '../types';

export function getLimitedItems(items: Array<TodoItem>, limit: number, offset: number) {
  let count = 0;

  return items.reduce((res: Array<TodoItem>, item, index) => {
    if (count < limit && index >= offset) {
      res.push(item);
      count++;
    }

    return res;
  },[]);
}