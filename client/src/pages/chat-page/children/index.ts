import { AppRouterProps } from '../../types';
import { CHAT_CONTENT_PAGE_CONFIG } from './chat-content-page';
import { CHAT_LOGIN_PAGE_CONFIG } from './chat-login-page';

export const CHAT_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouterProps> = [
  CHAT_CONTENT_PAGE_CONFIG,
  CHAT_LOGIN_PAGE_CONFIG,
];