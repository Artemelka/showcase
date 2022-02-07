import { AppRouterProps } from '../app';

export type AppRouteConfig = AppRouterProps & {
  name: string;
  children?: Array<AppRouteConfig>;
};
