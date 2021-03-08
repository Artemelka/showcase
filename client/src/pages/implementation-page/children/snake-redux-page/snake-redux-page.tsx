import React, {memo} from 'react';
import { Page } from '../../../../components';
import { Game } from './_components';

const SnakePage = memo(() => {
  return (
    <Page title="Snake">
      <Game/>
    </Page>
  );
});

export default SnakePage;