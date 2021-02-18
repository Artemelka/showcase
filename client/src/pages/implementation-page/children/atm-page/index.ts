import { AtmPage } from './atm-page';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { AppRouterProps } from '../../../types';

export const ATM_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: AtmPage,
  exact: true,
  name: 'ATM',
  path: IMPLEMENTATION_CHILDREN_PATH.ATM,
};