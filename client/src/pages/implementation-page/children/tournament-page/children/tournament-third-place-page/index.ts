import type { AppRouteConfig } from '@/types';
import { TOURNAMENT_CHILDREN_PATH } from '../../constants';
import { TournamentThirdPlacePage } from './tournament-third-place-page';

export const TOURNAMENT_THIRD_PLACE_ROUTE_CONFIG: AppRouteConfig = {
  component: TournamentThirdPlacePage,
  name: 'third place',
  exact: true,
  path: TOURNAMENT_CHILDREN_PATH.THIRD_PLACE,
};
