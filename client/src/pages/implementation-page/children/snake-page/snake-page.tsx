import React, {memo} from 'react';
import { Page } from '../../../../components';
import { GameBox } from './_components';

const SnakePage = memo(() => {
  return (
    <Page title="Snake">
      <GameBox/>
    </Page>
  );
});

export default SnakePage;