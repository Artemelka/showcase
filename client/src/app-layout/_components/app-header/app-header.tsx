import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { AppNavigation, ThemeToggle } from '../../../components';
import { APP_PAGES_ROUTE_CONFIG } from '../../../pages';
import style from './app-header.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'App-header';

export const AppHeader = memo(() => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__logo`)}>
        Artemelka
      </div>
      <div className={cn(`${CLASS_NAME}__navigation`)}>
        <AppNavigation items={APP_PAGES_ROUTE_CONFIG} />
      </div>
      <div className={cn(`${CLASS_NAME}__options`)}>
        <ThemeToggle/>
      </div>
    </div>
  );
});
