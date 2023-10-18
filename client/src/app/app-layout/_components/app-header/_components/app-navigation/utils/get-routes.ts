import { UserRole } from '@/api';
import { AppRouteConfig } from '@/app/router';

export const getRoutes = (items: Array<AppRouteConfig>, userRole: UserRole) => {
  return items.filter((route) => {
    return !route.accessTypes || route.accessTypes.includes(userRole);
  });
};
