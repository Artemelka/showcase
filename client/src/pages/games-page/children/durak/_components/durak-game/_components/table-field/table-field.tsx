import React, { FC } from 'react';
import { connect } from 'react-redux';
import { fastClassNames } from '@/utils';
import { CardBank } from '@/pages/games-page/_components';
import { CardParams } from '@/pages/games-page/types';
import {
  enemyPlaceSelector,
  playerPlaceSelector,
  isPlayerStepSelector,
} from '../../redux';
import { DurakGameStore } from '../../types';
import styles from './table-field.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-field';

type StateProps = {
  enemyCards: Array<CardParams>;
  isPlayerStep: boolean;
  playerCards: Array<CardParams>;
};

export const TableFieldComponent: FC<StateProps> = ({
  enemyCards,
  isPlayerStep,
  playerCards,
}) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div
        className={cn(`${CLASS_NAME}__bank`, {
          [`${CLASS_NAME}__bank--enemy`]: true,
          [`${CLASS_NAME}__bank--active`]: isPlayerStep,
        })}
      >
        <CardBank cards={enemyCards} isDisabledCard />
      </div>
      <div
        className={cn(`${CLASS_NAME}__bank`, {
          [`${CLASS_NAME}__bank--player`]: true,
          [`${CLASS_NAME}__bank--active`]: !isPlayerStep,
        })}
      >
        <CardBank cards={playerCards} isDisabledCard />
      </div>
    </div>
  );
};

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  enemyCards: enemyPlaceSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerCards: playerPlaceSelector(state),
});

export const TableField = connect(mapStateToProps)(TableFieldComponent);
