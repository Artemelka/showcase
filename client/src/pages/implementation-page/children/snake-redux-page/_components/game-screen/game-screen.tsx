import React, { memo } from 'react';
import { fastClassNames3 } from '../../../../../../utils';
import { CELL_QUANTITY } from '../../constants';
import { ConnectedSnakeItem } from '../connected-snake-item';
import style from './game-screen.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game-screen';
const CELLS = [...Array(CELL_QUANTITY)].map((_, index) => index);

export const GameScreen = memo(() => {

  return (
    <table className={cn(CLASS_NAME)}>
      <tbody className={cn(`${CLASS_NAME}__body`)}>
      {CELLS.map(y => (
        <tr key={`row${y}`} className={cn(`${CLASS_NAME}__row`)}>
          {CELLS.map(x => (
            <td key={`cell${x}`} className={cn(`${CLASS_NAME}__cell`)}>
              <ConnectedSnakeItem x={x} y={y} />
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
});