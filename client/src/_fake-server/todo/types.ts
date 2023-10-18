export type TodoItemStatus =
  | 'todo'
  | 'ready'
  | 'in-progress'
  | 'testing'
  | 'reopen'
  | 'done'
  | 'resolved';

export type TodoItem = {
  category: string;
  id: string;
  parentId: string;
  status: TodoItemStatus;
  title: string;
};

export type GetListParams = {
  limit?: number;
  offset?: number;
  statuses: Array<TodoItemStatus>;
};

export type GetChildrenParams = GetListParams & {
  parentId: string;
};

export type GetCategoryParams = GetListParams & {
  category?: string;
};

export type Response = {
  items: Array<TodoItem>;
  total: number;
  limit: number;
  offset: number;
};
