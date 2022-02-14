import { UserRole } from '../../../../../../../api';
import { AppRouteConfig } from '../../../../../../../pages/types';

export const getRoutes = (items: Array<AppRouteConfig>, userRole: UserRole) => {
  return items.filter(route => {
    return !route.accessTypes || route.accessTypes.includes(userRole);
  });
}