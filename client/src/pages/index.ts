import { HOME_PAGE_ROUTE_CONFIG } from './home-page';
import { IMPLEMENTATION_PAGE_ROUTE_CONFIG } from './implementation-page';
import { CHAT_PAGE_ROUTE_CONFIG } from './chat-page';
import { GAMES_PAGE_ROUTE_CONFIG } from './games-page';
// import { WORLD_TIME_PAGE_CONFIG } from './world-time-page';
import { AppRouteConfig } from './types';

export { NotFoundPage } from './not-found-page';
export type { AppRouteConfig } from './types';

export const APP_PAGES_ROUTE_CONFIG: Array<AppRouteConfig> = [
  HOME_PAGE_ROUTE_CONFIG,
  IMPLEMENTATION_PAGE_ROUTE_CONFIG,
  GAMES_PAGE_ROUTE_CONFIG,
  CHAT_PAGE_ROUTE_CONFIG,
  // WORLD_TIME_PAGE_CONFIG,
];