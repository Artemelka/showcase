import { TODO } from './todo';
import { QUEUE_TASK } from './queue-task';
import { AUTH } from './auth';
import { SIGN_UP } from './sign-up';

export type {
  GetCategoryParams,
  Response,
  TodoItem,
  TodoItemStatus,
} from './todo';

export type { Auth, User, UserRole } from './auth';
export type { SignUpResponse } from './sign-up';

export const API = {
  TODO,
  QUEUE_TASK,
  AUTH,
  SIGN_UP,
};
