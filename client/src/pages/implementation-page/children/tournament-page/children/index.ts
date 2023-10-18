import type { AppRouteConfig } from '@/types';
import { TOURNAMENT_REGISTRATION_ROUTE_CONFIG } from './tournament-registration-page';
import { TOURNAMENT_GRID_ROUTE_CONFIG } from './tournament-grid-page';
import { TOURNAMENT_LIST_ROUTE_CONFIG } from './tournament-list';
import { TOURNAMENT_SEMI_FINAL_ROUTE_CONFIG } from './tournament-semi-final-page';
import { TOURNAMENT_THIRD_PLACE_ROUTE_CONFIG } from './tournament-third-place-page';
import { TOURNAMENT_FINAL_ROUTE_CONFIG } from './tournament-final-page';

export const TOURNAMENT_CHILDREN_ROUTE_CONFIG: Array<AppRouteConfig> = [
  TOURNAMENT_REGISTRATION_ROUTE_CONFIG,
  TOURNAMENT_GRID_ROUTE_CONFIG,
  TOURNAMENT_LIST_ROUTE_CONFIG,
  TOURNAMENT_SEMI_FINAL_ROUTE_CONFIG,
  TOURNAMENT_THIRD_PLACE_ROUTE_CONFIG,
  TOURNAMENT_FINAL_ROUTE_CONFIG,
];
