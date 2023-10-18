import React, { memo, useCallback } from 'react';
import { fastClassNames } from '@/utils';
import { Card } from '@/pages/games-page/_components';
import { CardParams } from '@/pages/games-page/types';
import styles from './bank.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Bank';

type BankProps = {
  cards: Array<CardParams>;
  disabled: boolean;
  onClick?: () => void;
};

export const BankComponent = ({
  cards,
  disabled,
  onClick = () => false,
}: BankProps) => {
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <ul className={cn(CLASS_NAME)}>
      {cards.map((card, index) => (
        <li
          key={card.id}
          className={cn(`${CLASS_NAME}__item`, {
            [`${CLASS_NAME}__item--${index}`]: Boolean(index),
            [`${CLASS_NAME}__item--static`]: !index,
          })}
        >
          <Card
            card={card}
            disabled={disabled}
            isHidden
            onClick={handleClick}
          />
        </li>
      ))}
      <li className={cn(`${CLASS_NAME}__counter`)}>{cards.length}</li>
    </ul>
  );
};

export const Bank = memo(BankComponent);
