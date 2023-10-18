import { lazy } from 'react';
import type { AppRouteConfig } from '@/types';
import { CHAT_PAGE_PATH } from './constants';
import { CHAT_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

export const CHAT_PAGE_ROUTE_CONFIG: AppRouteConfig = {
  // accessRedirectPath: '/implementation',
  accessTypes: ['user'],
  children: CHAT_CHILDREN_PAGE_ROUTE_CONFIG,
  component: lazy(() => import('./chat-page')),
  name: 'chat',
  path: CHAT_PAGE_PATH,
};
