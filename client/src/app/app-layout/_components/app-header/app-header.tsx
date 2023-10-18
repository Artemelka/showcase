import React, { FC, memo } from 'react';
import { APP_PAGES_ROUTE_CONFIG } from '@/pages';
import { fastClassNames } from '@/utils';
import { ThemeToggle } from '@/components';
import { AppNavigation, AppUser } from './_components';
import style from './app-header.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'App-header';

export const AppHeaderComponent: FC = () => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__logo`)}>Artemelka</div>
      <div className={cn(`${CLASS_NAME}__navigation`)}>
        <AppNavigation items={APP_PAGES_ROUTE_CONFIG} />
      </div>
      <div className={cn(`${CLASS_NAME}__options`)}>
        <ThemeToggle />
      </div>
      <div className={cn(`${CLASS_NAME}__user`)}>
        <AppUser />
      </div>
    </div>
  );
};

export const AppHeader = memo(AppHeaderComponent);
