import { lazy } from 'react';
import { AppRouteConfig } from '../../../types';
import { CHAT_PAGE_CHILDREN_PATH } from '../../constants';

export const CHAT_LOGIN_PAGE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./chat-login-page')),
  path: CHAT_PAGE_CHILDREN_PATH.LOGIN,
  name: 'chat login'
};