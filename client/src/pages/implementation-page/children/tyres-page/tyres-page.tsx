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
    setCount((prevState) => prevState + 1);
  }, []);

  const handleRemoveClick = useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, []);

  const handleRemoveAllClick = useCallback(() => {
    setKeyIndex((prevState) => prevState + 1);
    setCount(1);
  }, []);

  return (
    <Page headTitle="Tyres" title="Tyres calculator">
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__actions`)}>
          <Button
            disabled={count === 9}
            onClick={handleAddClick}
            themeColor="success"
            value="Add"
          />
          <Button
            disabled={count === 1}
            onClick={handleRemoveClick}
            themeColor="error"
            value="Remove"
          />
          <Button
            disabled={count === 1}
            onClick={handleRemoveAllClick}
            themeColor="error"
            value="Remove all"
            variant="filled"
          />
        </div>
        {[...new Array(count)].map((_num, index) => (
          <div
            key={`${keyIndex}_${index}`}
            className={cn(`${CLASS_NAME}__item`)}
          >
            <TyresCalculator index={index} />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default memo(TyresPage);
