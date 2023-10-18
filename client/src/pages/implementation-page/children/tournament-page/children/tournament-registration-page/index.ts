import type { AppRouteConfig } from '@/types';
import { TOURNAMENT_CHILDREN_PATH } from '../../constants';
import { TournamentRegistrationPage } from './tournament-registration-page';

export const TOURNAMENT_REGISTRATION_ROUTE_CONFIG: AppRouteConfig = {
  component: TournamentRegistrationPage,
  name: 'registration',
  exact: true,
  path: TOURNAMENT_CHILDREN_PATH.REGISTRATION,
};
