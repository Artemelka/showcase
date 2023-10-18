import type { AppRouteConfig } from '@/types';
import { DURAK_PAGE_ROUTE_CONFIG } from './durak';
import { SEMKI_PAGE_ROUTE_CONFIG } from './semki';
import { SNAKE_GAME_PAGE_ROUTE_CONFIG } from './snake-game-page';
import { TIC_TAC_TOE_PAGE_ROUTE_CONFIG } from './tic-tac-toe';
import { DRUNKARD_PAGE_ROUTE_CONFIG } from './drunkard-page';

export const GAMES_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouteConfig> = [
  SEMKI_PAGE_ROUTE_CONFIG,
  SNAKE_GAME_PAGE_ROUTE_CONFIG,
  DURAK_PAGE_ROUTE_CONFIG,
  TIC_TAC_TOE_PAGE_ROUTE_CONFIG,
  DRUNKARD_PAGE_ROUTE_CONFIG,
];
