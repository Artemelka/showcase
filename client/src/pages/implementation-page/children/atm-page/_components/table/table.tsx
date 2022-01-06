import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { CashType } from '../../types';
import style from './table.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Table';

type TablePropsType = {
  amount: string;
  items: CashType;
}

export const TableComponent = ({ amount, items }: TablePropsType) => {
  return (
    <table className={cn(CLASS_NAME)}>
      <thead className={cn(`${CLASS_NAME}__head`)}>
      <tr className={cn(`${CLASS_NAME}__row`, `${CLASS_NAME}__row--header`)}>
        <th className={cn(`${CLASS_NAME}__cell`)}>denomination</th>
        <th className={cn(`${CLASS_NAME}__cell`)}>quantity</th>
      </tr>
      </thead>
      <tbody className={cn(`${CLASS_NAME}__body`)}>
      {items.map(([nominal, count]) => (
        <tr className={cn(`${CLASS_NAME}__row`, `${CLASS_NAME}__row--body`)} key={nominal + count}>
          <td className={cn(`${CLASS_NAME}__cell`)}>{`${count} RUR`}</td>
          <td className={cn(`${CLASS_NAME}__cell`)}>{`${nominal} pcs`}</td>
        </tr>
      ))}
      </tbody>
      <tfoot>
      <tr className={cn(`${CLASS_NAME}__row`, `${CLASS_NAME}__row--footer`)}>
        <td className={cn(`${CLASS_NAME}__cell`)}>Amount:</td>
        <td className={cn(`${CLASS_NAME}__cell`)}>{amount}</td>
      </tr>
      </tfoot>
    </table>
  );
};

export const Table = memo(TableComponent);