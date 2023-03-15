import React, { FC, memo } from 'react';
import { fastClassNames, DEFAULT_HANDLER } from '@/utils';
import { CardParams } from '../../types';
import { Card } from '../card';
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
      {cards.map(card => (
        <li className={cn(`${CLASS_NAME}__item`)} key={card.id}>
          <Card
            card={card}
            onClick={onClick}
            disabled={isDisabledCard}
            isHidden={isHiddenCard}
          />
        </li>
      ))}
    </ul>
  );
};

export const CardBank = memo(CardBankComponent);