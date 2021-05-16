import { lazy } from 'react';
import { AppRouterProps } from '../../../types';
import { CHAT_PAGE_CHILDREN_PATH } from '../../constants';

export const CHAT_CONTENT_PAGE_CONFIG: AppRouterProps = {
  component: lazy(() => import('./chat-content-page')),
  exact: true,
  path: `${CHAT_PAGE_CHILDREN_PATH.CONTENT}`,
  name: 'chat message'
};