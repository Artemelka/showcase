import { HomePage } from './home-page';
import { HOME_PAGE_PATH } from './constants';
import { AppRouterProps } from '../types';

export { HOME_PAGE_PATH } from './constants';

export const HOME_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: HomePage,
  exact: true,
  name: 'home',
  path: HOME_PAGE_PATH,
};
