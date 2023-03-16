import React, { memo, useCallback } from 'react';
import { fastClassNames } from '@/utils';
import { CARD_IMG_MAP, CARD_IMG_SKIN } from '../../constants';
import { CardParams } from '../../types';
import styles from './card.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Card';

const DEFAULT_ALT = 'enemy card';

type CardProps = {
  card: CardParams;
  onClick: (id: string) => void;
  disabled?: boolean;
  isHidden?: boolean;
};

export const CardComponent = ({ card, disabled = false, isHidden = false, onClick }: CardProps) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick(card.id)
    }
  }, [card, disabled, onClick]);

  const imgPath = isHidden ? CARD_IMG_SKIN : CARD_IMG_MAP[card.suit][card.rank];
  const cardAlt = isHidden ? DEFAULT_ALT : `${card.suit}-${card.rank}`;

  return (
    <button
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--disable`]: disabled,
      })}
      onClick={handleClick}
      type="button"
    >
      <img alt={cardAlt} className={cn(`${CLASS_NAME}__img`)} src={imgPath} />
    </button>
  );
};

export const Card = memo(CardComponent);