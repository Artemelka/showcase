import React, { memo } from 'react';
import { fastClassNames } from '@/utils';
import { TableRow } from './_components';
import style from './table.module.scss';
import {Text} from "@artemelka/react-components";

const cn = fastClassNames(style);
const CLASS_NAME = 'Table';

type TableItem = {
  id: string;
  title: string;
  category: string;
  status: string;
};
type TableProps = {
  items: Array<TableItem>;
  onRowClick?: (item: any) => void;
};

export const TableComponent = ({
  items,
  onRowClick,
}: TableProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__header`)}>
        <span className={cn(`${CLASS_NAME}__header-category`)}>
        <Text>category</Text>
      </span>
        <span className={cn(`${CLASS_NAME}__header-title`)}>
        <Text>title</Text>
      </span>
        <span className={cn(`${CLASS_NAME}__header-status`)}>
        <Text>status</Text>
      </span>
      </div>
      <div className={cn(`${CLASS_NAME}__content`)}>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {items.map((item, index) => (
            <li key={item.id} className={cn(`${CLASS_NAME}__item`)}>
              <TableRow index={index + 1} item={item} onClick={onRowClick}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Table = memo(TableComponent);