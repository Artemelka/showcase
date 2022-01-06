import React, { memo, useCallback } from 'react';
import classNames from 'classnames/bind';
import { Button, ButtonMouseEvent } from '@artemelka/react-components';
import { AppRouterProps } from '../../pages/types';
import style from './sidebar-navigation.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Sidebar-navigation';

type SidebarNavigationProps = {
  activePath: string;
  items: Array<AppRouterProps>;
  onClick: (path: string) => void;
};

export const SidebarNavigation = memo<SidebarNavigationProps>(function SidebarNavigation({
  activePath,
  items,
  onClick,
}) {
  const checkActiveChildren = useCallback((children: Array<AppRouterProps>) => {
    return Boolean(children.findIndex(child => child.path === activePath) + 1)
  }, [activePath]);

  const checkActive = useCallback(({ children = [], path }: AppRouterProps): boolean => {
    return activePath === path || checkActiveChildren(children);
  }, [activePath, checkActiveChildren]);

  const handleClick = useCallback(({ id }: ButtonMouseEvent) => {
    onClick(`${id}`);
  }, [onClick]);

  return (
    <nav className={cn(CLASS_NAME)}>
      <ul className={cn(`${CLASS_NAME}__list`)}>
        {items.map((item: AppRouterProps) => (
          <li className={cn(`${CLASS_NAME}__item`)} key={item.path}>
            <Button
              alignText="left"
              isActive={checkActive(item)}
              isFullWidth
              id={item.path}
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
});