import type { AppRouteConfig } from '@/types';
import { ATM_PAGE_ROUTE_CONFIG } from './atm-page';
import { BAD_PRACTICES_PAGE_ROUTE_CONFIG } from './bad-practices';
import { BUTTONS_PAGE_ROUTE_CONFIG } from './buttons-page';
import { QUEUE_PAGE_ROUTE_CONFIG } from './queue-page';
import { TODO_PAGE_ROUTE_CONFIG } from './todo-page';
import { TOURNAMENT_PAGE_ROUTE_CONFIG } from './tournament-page';
import { TYRES_PAGE_ROUTE_CONFIG } from './tyres-page';
import { CONTEXT_PAGE_ROUTE_CONFIG } from './context-page';
import { FLAT_TO_NESTED_PAGE_ROUTE_CONFIG } from './flat-to-nested';

export const IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG: Array<AppRouteConfig> =
  [
    ATM_PAGE_ROUTE_CONFIG,
    BAD_PRACTICES_PAGE_ROUTE_CONFIG,
    BUTTONS_PAGE_ROUTE_CONFIG,
    QUEUE_PAGE_ROUTE_CONFIG,
    TODO_PAGE_ROUTE_CONFIG,
    TOURNAMENT_PAGE_ROUTE_CONFIG,
    TYRES_PAGE_ROUTE_CONFIG,
    CONTEXT_PAGE_ROUTE_CONFIG,
    FLAT_TO_NESTED_PAGE_ROUTE_CONFIG,
  ];
