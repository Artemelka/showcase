import React, {memo, useCallback, useState} from 'react';
import { Button } from '@artemelka/react-components';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { SemkiGame } from './_components';
import styles from './semki-page.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Semki-page';

export const SemkiPage = () => {
  const [key, setKey] = useState(0);

  const handleRestart = useCallback(() => {
    setKey(num => num + 1);
  }, []);

  return (
    <Page headTitle="SEMKI" title="semki game">
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__container`)}>
          <SemkiGame key={key}/>
        </div>
      </div>
      <div className={cn(`${CLASS_NAME}__actions`)}>
        <Button onClick={handleRestart} value="restart" />
      </div>
    </Page>
  );
};

export default  memo(SemkiPage);