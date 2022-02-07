import { RouteProps } from 'react-router';
import { UserRole } from '../types';


export type AppRouterProps = Pick<RouteProps, 'component' | 'exact'> & {
  path: string;
  accessTypes?: Array<UserRole>;
};