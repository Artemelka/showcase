import { AppRouterProps } from '../../../types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { TodoPage } from './todo-page';

export const TODO_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: TodoPage,
  path: IMPLEMENTATION_CHILDREN_PATH.TODO,
  name: 'todo',
}