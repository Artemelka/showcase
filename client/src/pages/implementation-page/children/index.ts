import { AppRouteConfig } from '@/pages';
import { ATM_PAGE_ROUTE_CONFIG } from './atm-page';
import { BAD_PRACTICES_PAGE_ROUTE_CONFIG } from './bad-practices';
import { BUTTONS_PAGE_ROUTE_CONFIG } from './buttons-page';
import { QUEUE_PAGE_ROUTE_CONFIG } from './queue-page';
import { SNAKE_GAME_PAGE_ROUTE_CONFIG } from './snake-game-page';
import { TODO_PAGE_ROUTE_CONFIG } from './todo-page';
import { TOURNAMENT_PAGE_ROUTE_CONFIG } from './tournament-page';
import { TYRES_PAGE_ROUTE_CONFIG } from './tyres-page';
import { SEMKI_PAGE_ROUTE_CONFIG } from './semki';

export type { QueueStore } from './queue-page';
export type { GameReduxStore, GameToolkitStore } from './snake-game-page';
export type { TodoItemStore, TodoStore } from './todo-page';

export const IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouteConfig> = [
  ATM_PAGE_ROUTE_CONFIG,
  BAD_PRACTICES_PAGE_ROUTE_CONFIG,
  BUTTONS_PAGE_ROUTE_CONFIG,
  QUEUE_PAGE_ROUTE_CONFIG,
  SNAKE_GAME_PAGE_ROUTE_CONFIG,
  TODO_PAGE_ROUTE_CONFIG,
  TOURNAMENT_PAGE_ROUTE_CONFIG,
  TYRES_PAGE_ROUTE_CONFIG,
  SEMKI_PAGE_ROUTE_CONFIG,
];