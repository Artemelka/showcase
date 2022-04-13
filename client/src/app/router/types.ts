import { RouteProps } from 'react-router';
import { RouterState } from "connected-react-router";
import { UserRole } from '@/api';

export type RouterStore = { router: RouterState };

export type AppRouterProps = Pick<RouteProps, 'component' | 'exact'> & {
  accessRedirectPath?: string;
  accessTypes?: Array<UserRole>;
  path: string;
};