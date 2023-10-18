import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const BUTTONS_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./buttons-page')),
  path: IMPLEMENTATION_CHILDREN_PATH.BUTTONS,
  name: 'buttons',
};
