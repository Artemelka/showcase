import React, {memo, ReactNode} from 'react';
import { fastClassNames3 } from '../../../../../../utils';
import style from './game-box.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game';

type GameBoxProps = {
  actionsElement: ReactNode;
  tableRowsElement: ReactNode;
};

export const GameBox = memo(({ actionsElement, tableRowsElement }: GameBoxProps) => {
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
});