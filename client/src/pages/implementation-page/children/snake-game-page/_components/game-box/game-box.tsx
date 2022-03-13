import React, { FC, memo, ReactNode } from 'react';
import { fastClassNames } from '@/utils';
import style from './game-box.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Game';

type GameBoxProps = {
  actionsElement: ReactNode;
  tableRowsElement: ReactNode;
};

export const GameBoxComponent: FC<GameBoxProps> = ({ actionsElement, tableRowsElement }) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__container`)}>
        {actionsElement}
        <table className={cn(`${CLASS_NAME}__table`)}>
          <tbody>
            {tableRowsElement}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const GameBox = memo(GameBoxComponent);