import { Response, TodoItem, TodoItemStatus } from '../types';
import { getLimitedItems } from './get-limited-items';
import { getFilteredItems } from './get-filtered-items';

type GetListResponseParams = {
  items: Array<TodoItem>;
  limit?: number;
  offset?: number;
  statuses: Array<TodoItemStatus>;
};

export function getListResponse({
  items,
  limit = 50,
  offset = 0,
  statuses,
}: GetListResponseParams): Response {
  const filteredList = getFilteredItems(items, statuses);
  const part = getLimitedItems(filteredList, limit, offset);

  return {
    items: part,
    total: filteredList.length,
    limit,
    offset,
  };
}
