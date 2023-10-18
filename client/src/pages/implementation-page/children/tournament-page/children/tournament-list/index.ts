import type { AppRouteConfig } from '@/types';
import { TOURNAMENT_CHILDREN_PATH } from '../../constants';
import { TournamentList } from './tournament-list';

export const TOURNAMENT_LIST_ROUTE_CONFIG: AppRouteConfig = {
  component: TournamentList,
  name: 'list',
  exact: true,
  path: TOURNAMENT_CHILDREN_PATH.LIST,
};
