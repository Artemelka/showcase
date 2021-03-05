import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Overlay, WindowLoader } from '@artemelka/react-components';
import styles from './page-loader.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Page-loader';

export const PageLoader = memo(() => (
  <div className={cn(CLASS_NAME)}>
    <Overlay inContainer>
      <WindowLoader themeColor="primary"/>
    </Overlay>
  </div>
));