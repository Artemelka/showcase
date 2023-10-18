import { AppRouteConfig } from '@/app/router';
import { DRUNKARD_CHILDREN_PATH } from '../../constants';
import { DrunkardHomePage } from './drunkard-home-page';

export const DRUNKARD_HOME_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: DrunkardHomePage,
  exact: true,
  name: 'Drunkard home page',
  path: DRUNKARD_CHILDREN_PATH.HOME,
};
