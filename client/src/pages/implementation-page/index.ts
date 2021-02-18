import { ImplementationPage } from './implementation-page';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';
import { IMPLEMENTATION_PAGE_PATH, IMPLEMENTATION_CHILDREN_PATH } from './constants';
import { AppRouterProps } from '../types';

export { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';
export { IMPLEMENTATION_PAGE_PATH, IMPLEMENTATION_CHILDREN_PATH };

export const IMPLEMENTATION_PAGE_ROUTE_CONFIG: AppRouterProps = {
  children: IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG,
  component: ImplementationPage,
  name: 'implementation',
  path: IMPLEMENTATION_PAGE_PATH,
};
