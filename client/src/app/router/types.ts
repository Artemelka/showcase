import { RouteProps } from 'react-router';
import { UserRole } from '@/api';


export type AppRouterProps = Pick<RouteProps, 'component' | 'exact'> & {
  accessRedirectPath?: string;
  accessTypes?: Array<UserRole>;
  path: string;
};