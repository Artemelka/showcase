import React, { memo } from 'react';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import styles from './drunkard-page.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Drunkard-page';

export const DrunkardPage = () => {
  return (
    <Page headTitle="Drunkard" title="Drunkard">
      Drunkard
    </Page>
  );
};

export default memo(DrunkardPage);