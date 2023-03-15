import React, { memo } from 'react';
import { CardBank } from '../card-bank';
import { DECK } from '../../constants';

type EnemyBankProps = {};

export const EnemyBankComponent = ({}: EnemyBankProps) => {
  return (
    <CardBank
      cards={DECK.filter((_, i) => i > 5 && i < 12)}
      isDisabledCard
      isHiddenCard
    />
  );
};

export const EnemyBank = memo(EnemyBankComponent);