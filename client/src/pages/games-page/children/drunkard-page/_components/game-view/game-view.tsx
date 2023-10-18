import React, { memo } from 'react';
import { fastClassNames } from '@/utils';
import { Card } from '@/pages/games-page/_components';
import { CardParams } from '@/pages/games-page/types';
import { Bank } from '../bank';
import styles from './game-view.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Game-view';

type Cards = Array<CardParams>;
type GameViewProps = {
  enemyBank: Cards;
  enemyField: Cards;
  isPlayerBankDisabled: boolean;
  onPlayerClick: () => void;
  playerBank: Cards;
  playerField: Cards;
};

export const GameViewComponent = ({
  enemyBank,
  enemyField,
  isPlayerBankDisabled,
  onPlayerClick,
  playerBank,
  playerField,
}: GameViewProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__table`)}>
        <div className={cn(`${CLASS_NAME}__row`)}>
          <Bank cards={enemyBank} disabled />
        </div>
        <div className={cn(`${CLASS_NAME}__row`)}>
          {enemyField.map((card) => (
            <div className={cn(`${CLASS_NAME}__card`)}>
              <Card key={card.id} card={card} disabled onClick={() => false} />
            </div>
          ))}
        </div>
        <div className={cn(`${CLASS_NAME}__row`)}>
          {playerField.map((card) => (
            <div className={cn(`${CLASS_NAME}__card`)}>
              <Card key={card.id} card={card} disabled onClick={() => false} />
            </div>
          ))}
        </div>
        <div className={cn(`${CLASS_NAME}__row`)}>
          <Bank
            cards={playerBank}
            disabled={isPlayerBankDisabled}
            onClick={onPlayerClick}
          />
        </div>
      </div>
    </div>
  );
};

export const GameView = memo(GameViewComponent);
