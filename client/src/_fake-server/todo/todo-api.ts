import { createList, getListResponse } from './_utils';
import {
  GetCategoryParams,
  GetChildrenParams,
  TodoItem,
  Response,
} from './types';

type State = {
  todoList: Array<TodoItem>;
};

export class TodoApi {
  getTodoItem: (params: string) => Promise<Array<TodoItem>>;

  getChildren: (params: GetChildrenParams) => Promise<Response>;

  getCategory: (params: GetCategoryParams) => Promise<Response>;

  constructor() {
    const state: State = {
      todoList: createList(),
    };

    this.getTodoItem = (itemId: string) => {
      const res = state.todoList.filter((item) => item.id === itemId);

      return new Promise((resolve) => {
        setTimeout(() => resolve(res), 300);
      });
    };

    this.getChildren = ({
      parentId,
      limit,
      offset,
      statuses,
    }: GetChildrenParams) => {
      const childrenList = state.todoList.filter(
        (item) => item.parentId === parentId,
      );
      const response = getListResponse({
        items: childrenList,
        limit,
        offset,
        statuses,
      });

      return new Promise((resolve) => {
        setTimeout(() => resolve(response), 400);
      });
    };

    this.getCategory = ({
      category,
      limit,
      offset,
      statuses,
    }: GetCategoryParams) => {
      const categoryList = category
        ? state.todoList.filter((item) => item.category === category)
        : state.todoList;

      const response = getListResponse({
        items: categoryList,
        limit,
        offset,
        statuses,
      });

      return new Promise((resolve) => {
        setTimeout(() => resolve(response), 500);
      });
    };
  }
}
