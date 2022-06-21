import { AppRouteConfig } from '@/pages';
import { TOURNAMENT_CHILDREN_PATH } from '../../constants';
import { TournamentGridPage } from './tournament-grid-page';

export const TOURNAMENT_GRID_ROUTE_CONFIG: AppRouteConfig = {
  component: TournamentGridPage,
  name: 'grid',
  exact: true,
  path: TOURNAMENT_CHILDREN_PATH.GRID,
};