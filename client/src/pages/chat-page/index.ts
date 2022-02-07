import { lazy } from 'react';
import { AppRouteConfig } from '../types';
import { CHAT_PAGE_PATH } from './constants';
import { CHAT_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

export { CHAT_PAGE_PATH } from './constants';

export const CHAT_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  accessTypes: ['user'],
  children: CHAT_CHILDREN_PAGE_ROUTE_CONFIG,
  component: lazy(() => import('./chat-page')),
  path: CHAT_PAGE_PATH,
  name: 'chat',
};