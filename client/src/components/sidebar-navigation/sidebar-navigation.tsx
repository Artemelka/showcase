import React, { FC, memo, useCallback } from 'react';
import { Button, ButtonMouseEvent } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { AppRouteConfig } from '@/pages';
import style from './sidebar-navigation.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Sidebar-navigation';

type SidebarNavigationProps = {
  activePath: string;
  items: Array<AppRouteConfig>;
  onClick: (path: string) => void;
};

const SidebarNavigationComponent: FC<SidebarNavigationProps> = ({
  activePath,
  items,
  onClick,
}) => {
  const checkActiveChildren = useCallback(
    (children: Array<AppRouteConfig>) => {
      return Boolean(
        children.findIndex((child) => child.path === activePath) + 1,
      );
    },
    [activePath],
  );

  const checkActive = useCallback(
    ({ children = [], path }: AppRouteConfig): boolean => {
      return activePath === path || checkActiveChildren(children);
    },
    [activePath, checkActiveChildren],
  );

  const handleClick = useCallback(
    ({ id }: ButtonMouseEvent) => {
      onClick(`${id}`);
    },
    [onClick],
  );

  return (
    <nav className={cn(CLASS_NAME)}>
      <ul className={cn(`${CLASS_NAME}__list`)}>
        {items.map((item: AppRouteConfig) => (
          <li key={item.path} className={cn(`${CLASS_NAME}__item`)}>
            <Button
              alignText="left"
              id={item.path}
              isActive={checkActive(item)}
              isFullWidth
              onClick={handleClick}
              themeColor="primary"
              value={item.name.toLocaleUpperCase()}
              variant="only-text"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const SidebarNavigation = memo(SidebarNavigationComponent);
