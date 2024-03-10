import { AppRouteConfig } from '@/types';
import { DRUNKARD_CHILDREN_PATH } from '../../constants';
import { DrunkardFcPage } from './drunkard-fc-page';

export const DRUNKARD_FC_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: DrunkardFcPage,
  exact: false,
  name: 'Drunkard FC',
  path: DRUNKARD_CHILDREN_PATH.FC,
};
