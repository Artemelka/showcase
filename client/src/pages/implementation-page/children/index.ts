import { AppRouteConfig } from '@/pages';
import { ATM_PAGE_ROUTE_CONFIG } from './atm-page';
import { BAD_PRACTICES_PAGE_ROUTE_CONFIG } from './bad-practices';
import { BUTTONS_PAGE_ROUTE_CONFIG } from './buttons-page';
import { QUEUE_PAGE_ROUTE_CONFIG } from './queue-page';
import { SNAKE_GAME_PAGE_ROUTE_CONFIG } from './snake-game-page';
import { TODO_PAGE_ROUTE_CONFIG } from './todo-page';

export const IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouteConfig> = [
  ATM_PAGE_ROUTE_CONFIG,
  BAD_PRACTICES_PAGE_ROUTE_CONFIG,
  BUTTONS_PAGE_ROUTE_CONFIG,
  QUEUE_PAGE_ROUTE_CONFIG,
  SNAKE_GAME_PAGE_ROUTE_CONFIG,
  TODO_PAGE_ROUTE_CONFIG,
];