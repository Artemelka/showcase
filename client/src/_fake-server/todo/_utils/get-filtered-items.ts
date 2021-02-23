import { TodoItem, TodoItemStatus } from '../types';

export function getFilteredItems(
  items: Array<TodoItem>,
  statuses: Array<TodoItemStatus>
): Array<TodoItem> {
  return statuses.length
    ? items.filter((listItem) => statuses.includes(listItem.status))
    : items;
}