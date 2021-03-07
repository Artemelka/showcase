import React, { memo } from 'react';
import { fastClassNames3 } from '../../../../../../utils';
import { SnakeItem } from '../snake-item';
import style from './game-screen.module.scss';
import {SnakeBodyItem} from "../../types";

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game-screen';

type GameScreenProps = {
  appleItem: SnakeBodyItem;
  cells: Array<number>;
  snakeBody: Array<SnakeBodyItem>;
};

export const GameScreen = memo(({
  appleItem,
  cells,
  snakeBody,
}: GameScreenProps) => {
  return (
    <table className={cn(CLASS_NAME)}>
      <tbody className={cn(`${CLASS_NAME}__body`)}>
      {cells.map(y => (
        <tr key={`row${y}`} className={cn(`${CLASS_NAME}__row`)}>
          {cells.map(x => (
            <td key={`cell${x}`} className={cn(`${CLASS_NAME}__cell`)}>
              <SnakeItem
                appleItem={appleItem}
                snakeBody={snakeBody}
                x={x}
                y={y}
              />
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
});