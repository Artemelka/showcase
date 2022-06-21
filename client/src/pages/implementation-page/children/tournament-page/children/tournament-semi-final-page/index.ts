import { AppRouteConfig } from '@/pages';
import { TOURNAMENT_CHILDREN_PATH } from '../../constants';
import { TournamentSemiFinalPage } from './tournament-semi-final-page';

export const TOURNAMENT_SEMI_FINAL_ROUTE_CONFIG: AppRouteConfig = {
  component: TournamentSemiFinalPage,
  name: 'semi-final',
  exact: true,
  path: TOURNAMENT_CHILDREN_PATH.SEMI_FINAL,
};
