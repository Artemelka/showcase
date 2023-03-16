import React, { FC } from 'react';
import { connect } from 'react-redux';
import { fastClassNames, NOOP } from '@/utils';
import { deckBankSelector, trumpCardSelector } from '../../redux';
import { DurakGameStore, CardParams } from '../../types';
import { Card } from '../card';
import styles from './table-bank.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-bank';

type StateProps = {
  deck: Array<CardParams>;
  trumpCard: CardParams;
};

export const TableBankComponent: FC<StateProps> = ({ deck, trumpCard }) => {
  const bankCounter = deck.length;

  return (
    <div className={cn(CLASS_NAME)}>
      <Card card={trumpCard} onClick={NOOP} disabled />
      <div className={cn(`${CLASS_NAME}__counter`)}>
        Bank: {bankCounter}
      </div>
    </div>
  );
};

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  deck: deckBankSelector(state),
  trumpCard: trumpCardSelector(state),
});

export const TableBank = connect(mapStateToProps)(TableBankComponent);