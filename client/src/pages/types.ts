import { AppRouterProps } from '@/app/router';

export type AppRouteConfig = AppRouterProps & {
  name: string;
  children?: Array<AppRouteConfig>;
};
