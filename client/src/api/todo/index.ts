import { TodoApi } from '../../_fake-server';
export type {
  GetCategoryParams,
  Response,
  TodoItem,
  TodoItemStatus,
} from '../../_fake-server';

const todo = new TodoApi();

export const TODO = {
  getTodoItem: todo.getTodoItem,
  getCategory: todo.getCategory,
  getChildren: todo.getChildren,
};