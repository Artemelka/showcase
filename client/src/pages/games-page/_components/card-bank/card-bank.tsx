import React, { FC, memo } from 'react';
import { fastClassNames, DEFAULT_HANDLER } from '@/utils';
import { CardParams } from '@/pages/games-page/types';
import { Card } from '@/pages/games-page/_components/card';
import styles from './card-bank.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Card-bank';

type CardBankProps = {
  cards: Array<CardParams>;
  onClick?: (id: string) => void;
  isDisabledCard?: boolean;
  isHiddenCard?: boolean;
};

export const CardBankComponent: FC<CardBankProps> = ({
  cards,
  onClick = DEFAULT_HANDLER,
  isDisabledCard,
  isHiddenCard,
}) => {
  return (
    <ul className={cn(CLASS_NAME)}>
      {cards.map((card) => (
        <li key={card.id} className={cn(`${CLASS_NAME}__item`)}>
          <Card
            card={card}
            disabled={isDisabledCard}
            isHidden={isHiddenCard}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
};

export const CardBank = memo(CardBankComponent);
