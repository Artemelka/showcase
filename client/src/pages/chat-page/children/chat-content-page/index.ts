import { lazy } from 'react';
import { AppRouteConfig } from '../../../types';
import { CHAT_PAGE_CHILDREN_PATH } from '../../constants';

export const CHAT_CONTENT_PAGE_CONFIG: AppRouteConfig = {
  component: lazy(() => import('./chat-content-page')),
  exact: true,
  path: `${CHAT_PAGE_CHILDREN_PATH.CONTENT}`,
  name: 'chat message'
};