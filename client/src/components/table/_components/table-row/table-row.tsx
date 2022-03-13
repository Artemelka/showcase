import React, { memo, useCallback } from 'react';
import { Text } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import style from './table-row.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Table-row';

type TableItem = {
  id: string;
  title: string;
  category: string;
  status: string;
};
type TableRowProps = {
  index: number;
  item: TableItem;
  onClick?: (item: any) => void;
};

export const TableRowComponent = ({
  item,
  onClick = () => false,
}: TableRowProps) => {
  const handleRowClick = useCallback(() => {
    onClick(item)
  }, [item, onClick]);

  return (
    <button className={cn(CLASS_NAME)} onClick={handleRowClick}>
      <span className={cn(`${CLASS_NAME}__category`)}>
        <Text>{item.category}</Text>
      </span>
      <span className={cn(`${CLASS_NAME}__title`)}>
        <Text>{item.title}</Text>
      </span>
      <span className={cn(`${CLASS_NAME}__status`)}>
        <Text>{item.status}</Text>
      </span>
    </button>
  );
};

export const TableRow = memo(TableRowComponent);