import React, { memo } from 'react';
import { Overlay, WindowLoader } from '@artemelka/react-components';
import { fastClassNames } from '../../utils';
import styles from './page-loader.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Page-loader';

export const PageLoader = memo(() => (
  <div className={cn(CLASS_NAME)}>
    <Overlay inContainer>
      <WindowLoader themeColor="primary"/>
    </Overlay>
  </div>
));