import React, { memo } from 'react';
import { fastClassNames } from '@/utils';
import {
  EnemyBank,
  PlayerBank,
  TableBank,
  TableActions,
  TableField,
} from './_components';
import styles from './durak-game.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Durak-game';

type DurakGameProps = {};

export const DurakGameComponent = ({}: DurakGameProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <EnemyBank/>

      <div className={cn(`${CLASS_NAME}__table`)}>
        <div className={cn(`${CLASS_NAME}__table-left`)}>
          <div className={cn(`${CLASS_NAME}__table-field`)}>
            <TableField/>
          </div>
        </div>
        <div className={cn(`${CLASS_NAME}__table-right`)}>
          <div className={cn(`${CLASS_NAME}__table-bank`)}>
            <TableBank/>
          </div>
          <div className={cn(`${CLASS_NAME}__table-actions`)}>
            <TableActions/>
          </div>
        </div>
      </div>

      <PlayerBank/>
    </div>
  );
};

export const DurakGame = memo(DurakGameComponent);