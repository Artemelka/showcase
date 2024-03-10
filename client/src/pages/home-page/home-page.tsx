import React, { memo } from 'react';
import { Anchor, Text } from '@artemelka/react-components';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { ReactComponent as Logo } from '@/logo.svg';
import style from './home-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Home-page';

const HomePage = () => {
  return (
    <Page title="Home">
      <div className={cn(CLASS_NAME)}>
        <Logo className={cn(`${CLASS_NAME}__logo`)} />
        <Text tagName="p">
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
        <div className={cn(`${CLASS_NAME}__link`)}>
          <Anchor href="https://reactjs.org" themeColor="primary">
            Learn React
          </Anchor>
        </div>
      </div>
    </Page>
  );
};

export default memo(HomePage);
