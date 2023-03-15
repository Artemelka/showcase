import React, { memo } from 'react';
import { fastClassNames } from '@/utils';
import { Suit } from '../../types';
import styles from './table-bank.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-bank';

const SUIT_MAP: Record<Suit, string> = {
  diamonds: '&#9830;',
  hearts: '&#9829;',
  clubs: '&#9827;',
  spades: '&#9824;',
};

type TableBankProps = {};

export const TableBankComponent = ({}: TableBankProps) => {
  const trump = 'clubs';
  const bankCounter = 24;

  return (
    <div className={cn(CLASS_NAME)}>
      <div
        className={cn(`${CLASS_NAME}__trump`, {
          [`${CLASS_NAME}__trump--${trump}`]: true
        })}
        dangerouslySetInnerHTML={{ __html: SUIT_MAP[trump] }}
      />
      Bank: {bankCounter}
    </div>
  );
};

export const TableBank = memo(TableBankComponent);