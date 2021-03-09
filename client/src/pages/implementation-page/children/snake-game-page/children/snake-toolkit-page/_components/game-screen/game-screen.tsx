import React, { memo } from 'react';
import { fastClassNames3 } from '../../../../../../../../utils';
import { ConnectedSnakeItem } from '../connected-snake-item';
import style from './game-screen.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game-screen';

type GameScreenProps = {
  cells: Array<number>;
}

export const GameScreen = memo(({ cells }: GameScreenProps) => (
  <table className={cn(CLASS_NAME)}>
    <tbody className={cn(`${CLASS_NAME}__body`)}>
    {cells.map(y => (
      <tr key={`row${y}`} className={cn(`${CLASS_NAME}__row`)}>
        {cells.map(x => (
          <td key={`cell${x}`} className={cn(`${CLASS_NAME}__cell`)}>
            <ConnectedSnakeItem x={x} y={y} />
          </td>
        ))}
      </tr>
    ))}
    </tbody>
  </table>
));