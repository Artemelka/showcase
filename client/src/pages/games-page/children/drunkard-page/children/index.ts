import { AppRouteConfig } from '@/app/router';
import { DRUNKARD_HOME_PAGE_ROUTE_CONFIG } from './drunkard-home-page';
import { DRUNKARD_FC_PAGE_ROUTE_CONFIG } from './drunkard-fc-page';
import { DRUNKARD_CL_PAGE_ROUTE_CONFIG } from './drunkard-cl-page';

export const DRUNKARD_CHILDREN_ROUTES: Array<AppRouteConfig> = [
  DRUNKARD_HOME_PAGE_ROUTE_CONFIG,
  DRUNKARD_FC_PAGE_ROUTE_CONFIG,
  DRUNKARD_CL_PAGE_ROUTE_CONFIG,
];
