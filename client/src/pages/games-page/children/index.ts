import { AppRouteConfig } from '@/pages';
import { DURAK_PAGE_ROUTE_CONFIG } from './durak';
import { SEMKI_PAGE_ROUTE_CONFIG } from './semki';
import { SNAKE_GAME_PAGE_ROUTE_CONFIG } from './snake-game-page';
import { XO_PAGE_ROUTE_CONFIG } from './xo';

export const GAMES_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouteConfig> = [
  SEMKI_PAGE_ROUTE_CONFIG,
  SNAKE_GAME_PAGE_ROUTE_CONFIG,
  DURAK_PAGE_ROUTE_CONFIG,
  XO_PAGE_ROUTE_CONFIG,
];