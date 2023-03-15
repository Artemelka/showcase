import React, { memo, useCallback } from 'react';
import { CardBank } from '../card-bank';
import { DECK } from '../../constants';

type PlayerBankProps = {};

export const PlayerBankComponent = ({}: PlayerBankProps) => {
  const handleCardClick = useCallback(() => {}, []);

  return (
    <CardBank
      cards={DECK.filter((_, i) => i < 6)}
      onClick={handleCardClick}
    />
  );
};

export const PlayerBank = memo(PlayerBankComponent);