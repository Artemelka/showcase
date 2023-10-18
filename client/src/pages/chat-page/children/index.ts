import type { AppRouteConfig } from '@/types';
import { CHAT_CONTENT_PAGE_CONFIG } from './chat-content-page';
import { CHAT_LOGIN_PAGE_CONFIG } from './chat-login-page';

export const CHAT_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouteConfig> = [
  CHAT_CONTENT_PAGE_CONFIG,
  CHAT_LOGIN_PAGE_CONFIG,
];
