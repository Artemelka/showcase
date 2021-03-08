import { AppRouterProps } from '../../types';
import { ATM_PAGE_ROUTE_CONFIG } from './atm-page';
import { BUTTONS_PAGE_ROUTE_CONFIG } from './buttons-page';
import { QUEUE_PAGE_ROUTE_CONFIG } from './queue-page';
import { SNAKE_PAGE_ROUTE_CONFIG } from './snake-page';
import { SNAKE_REDUX_PAGE_ROUTE_CONFIG } from './snake-redux-page';
import { SNAKE_TOOLKIT_PAGE_ROUTE_CONFIG } from './snake-toolkit-page';
import { TODO_PAGE_ROUTE_CONFIG } from './todo-page';

export const IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouterProps> = [
  ATM_PAGE_ROUTE_CONFIG,
  BUTTONS_PAGE_ROUTE_CONFIG,
  QUEUE_PAGE_ROUTE_CONFIG,
  SNAKE_PAGE_ROUTE_CONFIG,
  SNAKE_REDUX_PAGE_ROUTE_CONFIG,
  SNAKE_TOOLKIT_PAGE_ROUTE_CONFIG,
  TODO_PAGE_ROUTE_CONFIG,
];