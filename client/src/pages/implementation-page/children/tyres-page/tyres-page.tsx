import React, { memo, useCallback, useState } from 'react';
import { Button } from '@artemelka/react-components';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { TyresCalculator } from './_components';
import styles from './tyres-page.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Tyres-page';

export const TyresPage = () => {
  const [count, setCount] = useState(1);
  const [keyIndex, setKeyIndex] = useState(0);

  const handleAddClick = useCallback(() => {
    setCount((prevState) => ++prevState);
  }, []);

  const handleRemoveClick = useCallback(() => {
    setCount((prevState) => --prevState);
  }, []);

  const handleRemoveAllClick = useCallback(() => {
    setKeyIndex(prevState => ++prevState);
    setCount(1);
  }, []);

  return (
    <Page headTitle="Tyres" title="Tyres calculator">
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__actions`)}>
          <Button disabled={count === 9} onClick={handleAddClick} value="Add" themeColor="success" />
          <Button disabled={count === 1} onClick={handleRemoveClick} value="Remove" themeColor="error" />
          <Button disabled={count === 1} onClick={handleRemoveAllClick} value="Remove all" themeColor="error" variant="filled" />
        </div>
        {[...new Array(count)].map((_, index) => (
          <div className={cn(`${CLASS_NAME}__item`)} key={`${keyIndex}_${index}`}>
            <TyresCalculator index={index} />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default  memo(TyresPage);