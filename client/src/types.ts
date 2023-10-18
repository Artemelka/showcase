import { RouteProps } from 'react-router';
import { Action } from 'redux';
import { AuthStore } from '@/redux';
import { UserRole } from '@/api';
import { RouterStore } from '@/app/router';

export type AppStore = RouterStore & AuthStore;

export type BaseAction<P> = Action<string> & {
  payload: P;
};

export type AppRouterProps = Pick<RouteProps, 'component'> & {
  accessRedirectPath?: string;
  accessTypes?: Array<UserRole>;
  path: string;
  exact?: boolean;
};

export type AppRouteConfig = AppRouterProps & {
  name: string;
  children?: Array<AppRouteConfig>;
};
