import { v4 as getId } from 'uuid';
import { getRandomNumber } from '../../_utils';
import { TodoItem, TodoItemStatus } from '../types';

const STATUSES: Array<TodoItemStatus> = [
  'todo',
  'ready',
  'in-progress',
  'testing',
  'reopen',
  'done',
  'resolved',
];

function getRandomStatus() {
  return STATUSES[getRandomNumber(7)];
}

function generateItems(
  category: string,
  quantity: number,
  parentId?: string,
): Array<TodoItem> {
  return [...Array(quantity)].map(() => ({
    category,
    id: getId(),
    parentId: parentId || '',
    status: getRandomStatus(),
    title: '',
  }));
}

function generateChildrenCategory(
  parentList: Array<TodoItem>,
  category: string,
  quantity: number,
): Array<TodoItem> {
  return parentList.reduce(
    (acc: Array<TodoItem>, item) =>
      acc.concat(generateItems(category, quantity, item.id)),
    [],
  );
}

function rewriteItemTitle(items: Array<TodoItem>): Array<TodoItem> {
  return items.map((item, index) => ({
    ...item,
    title: `${item.category} title ${index}`,
  }));
}

export function createList(): Array<TodoItem> {
  const epicList = generateItems('Epic', 10);
  const userStoriesList = generateChildrenCategory(epicList, 'User story', 5);
  const taskList = generateChildrenCategory(userStoriesList, 'Task', 15);
  const subtaskList = generateChildrenCategory(taskList, 'Subtask', 30);

  const result = rewriteItemTitle([
    ...epicList,
    ...userStoriesList,
    ...taskList,
    ...subtaskList,
  ]);

  return result;
}
