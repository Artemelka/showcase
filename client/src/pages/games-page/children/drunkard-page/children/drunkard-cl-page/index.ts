import { AppRouteConfig } from '@/types';
import { DRUNKARD_CHILDREN_PATH } from '../../constants';
import { DrunkardClPage } from './drunkard-cl-page';

export const DRUNKARD_CL_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: DrunkardClPage,
  exact: false,
  name: 'Drunkard CL',
  path: DRUNKARD_CHILDREN_PATH.CL,
};
