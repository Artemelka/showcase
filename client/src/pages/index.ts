import { HOME_PAGE_ROUTE_CONFIG } from './home-page';
import { IMPLEMENTATION_PAGE_ROUTE_CONFIG } from './implementation-page';
import { AppRouterProps } from './types';

export { NotFoundPage } from './not-found-page';

export const APP_PAGES_ROUTE_CONFIG: Array<AppRouterProps> = [
  HOME_PAGE_ROUTE_CONFIG,
  IMPLEMENTATION_PAGE_ROUTE_CONFIG,
];