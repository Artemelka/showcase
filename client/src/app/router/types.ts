import { RouteProps } from 'react-router';
import { UserRole } from '../../api';


export type AppRouterProps = Pick<RouteProps, 'component' | 'exact'> & {
  path: string;
  accessTypes?: Array<UserRole>;
};