import { lazy } from 'react';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { AppRouterProps } from '../../../types';

export const BAD_PRACTICES_PAGE_ROUTE_CONFIG: AppRouterProps = {
    component: lazy(() => import('./bad-practices-page')),
    exact: true,
    name: 'bad practices',
    path: IMPLEMENTATION_CHILDREN_PATH.BAD_PRACTICES,
};