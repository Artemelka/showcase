import { ATM_PAGE_ROUTE_CONFIG } from './atm-page';
import { QUEUE_PAGE_ROUTE_CONFIG } from './queue-page';
import { AppRouterProps } from '../../types';

export const IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouterProps> = [
  ATM_PAGE_ROUTE_CONFIG,
  QUEUE_PAGE_ROUTE_CONFIG,
];