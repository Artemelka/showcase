import { AppRouteConfig } from '@/pages';
import { TOURNAMENT_CHILDREN_PATH } from '../../constants';
import { TournamentFinalPage } from './tournament-final-page';

export const TOURNAMENT_FINAL_ROUTE_CONFIG: AppRouteConfig = {
  component: TournamentFinalPage,
  name: 'final',
  exact: true,
  path: TOURNAMENT_CHILDREN_PATH.FINAL,
};
