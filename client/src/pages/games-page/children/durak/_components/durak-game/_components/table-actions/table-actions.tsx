import React, {memo, useCallback} from 'react';
import { Button } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import styles from './table-actions.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-actions';

type TableActionsProps = {};

export const TableActionsComponent = ({}: TableActionsProps) => {
  const handleGetClick = useCallback(() => {}, []);

  const handleEndClick = useCallback(() => {}, []);

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__button`)}>
        <Button onClick={handleGetClick} themeColor="error" value="GET"/>
      </div>
      <div className={cn(`${CLASS_NAME}__button`)}>
        <Button onClick={handleEndClick} themeColor="success" value="END"/>
      </div>
    </div>
  );
};

export const TableActions = memo(TableActionsComponent);