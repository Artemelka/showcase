import { AppRouteConfig } from '@/pages/types';

const checkActiveChildren = (children: Array<AppRouteConfig>, pathname: string): boolean => {
  return Boolean(children.findIndex(child => {
    if (child.children) {
      return checkActiveChildren(child.children, pathname);
    }

    return child.path === pathname
  }) + 1)
};

export const findActiveRoute = (pathname: string, items: Array<AppRouteConfig>): string => {
  return items.reduce((res, item, index) => {
    if (pathname === item.path) {
      return item.path;
    }

    if (item.children && checkActiveChildren(item.children, pathname)) {
      return item.path;

    }

    return res;
  }, '');
}