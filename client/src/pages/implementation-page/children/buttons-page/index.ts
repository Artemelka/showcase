import { AppRouterProps } from '../../../types';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { ButtonsPage } from './buttons-page';

export const BUTTONS_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: ButtonsPage,
  path: IMPLEMENTATION_CHILDREN_PATH.BUTTONS,
  name: 'buttons'
}