import React, { memo } from 'react';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { DurakGame } from './_components';
import styles from './durak-page.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Durak-page';

export const DurakPageComponent = () => {
  return (
    <Page headTitle="DURAK">
      <div className={cn(CLASS_NAME)}>
        <DurakGame/>
      </div>
    </Page>
  );
};

export default memo(DurakPageComponent);