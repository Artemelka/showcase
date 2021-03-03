import { lazy } from 'react';
import { AppRouterProps } from '../../../types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';

export const BUTTONS_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./buttons-page')),
  path: IMPLEMENTATION_CHILDREN_PATH.BUTTONS,
  name: 'buttons'
}