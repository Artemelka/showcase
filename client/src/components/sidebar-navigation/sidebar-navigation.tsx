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

export const SidebarNavigation = memo(({
  activePath,
  items,
  onClick,
}: SidebarNavigationProps) => {
  const handleClick = useCallback(({ id }: ButtonMouseEvent) => {
    onClick(`${id}`);
  }, [onClick]);

  return (
    <nav className={cn(CLASS_NAME)}>
      <ul className={cn(`${CLASS_NAME}__list`)}>
        {items.map(({ name, path }: AppRouterProps) => (
          <li className={cn(`${CLASS_NAME}__item`)} key={path}>
            <Button
              alignText="left"
              isActive={activePath === path}
              isFullWidth
              id={path}
              onClick={handleClick}
              themeColor="primary"
              value={name.toLocaleUpperCase()}
              variant="only-text"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
});