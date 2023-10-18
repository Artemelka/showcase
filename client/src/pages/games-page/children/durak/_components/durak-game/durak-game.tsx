import React, { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fastClassNames } from '@/utils';
import {
  EnemyBank,
  PlayerBank,
  TableBank,
  TableActions,
  TableField,
} from './_components';
import { startGame } from './redux';
import { getStartGameData } from './utils';
import styles from './durak-game.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Durak-game';

export const DurakGameComponent: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGame(getStartGameData()));
  }, [dispatch]);

  return (
    <div className={cn(CLASS_NAME)}>
      <EnemyBank />
      <div className={cn(`${CLASS_NAME}__table`)}>
        <div className={cn(`${CLASS_NAME}__table-left`)}>
          <TableField />
        </div>
        <div className={cn(`${CLASS_NAME}__table-right`)}>
          <TableBank />
          <TableActions />
        </div>
      </div>
      <PlayerBank />
    </div>
  );
};

export const DurakGame = memo(DurakGameComponent);
