import React, { memo } from 'react';
import { fastClassNames } from '@/utils';
import { FlatItemData } from '../../types';
import style from './data-table.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'data-table';

type DataTableProps = {
  items: Array<FlatItemData>;
};

export const DataTableComponent = ({ items }: DataTableProps) => {
  return (
    <table className={cn(CLASS_NAME)}>
      <thead className={cn(`${CLASS_NAME}__header`)}>
        <tr className={cn(`${CLASS_NAME}__row`)}>
          <th className={cn(`${CLASS_NAME}__cell`)}>id</th>
          <th className={cn(`${CLASS_NAME}__cell`)}>name</th>
          <th className={cn(`${CLASS_NAME}__cell`)}>parent id</th>
        </tr>
      </thead>
      <tbody className={cn(`${CLASS_NAME}__body`)}>
        {items.map(({ id, name, parentId }) => (
          <tr key={id} className={cn(`${CLASS_NAME}__row`)}>
            <td className={cn(`${CLASS_NAME}__cell`)}>{id}</td>
            <td className={cn(`${CLASS_NAME}__cell`)}>{name}</td>
            <td className={cn(`${CLASS_NAME}__cell`)}>{parentId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const DataTable = memo(DataTableComponent);
