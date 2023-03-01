import React, { FC, memo, useMemo } from 'react';
import { SnakeItem } from '../index';
import { SnakeBodyItem } from '../../types';
import { getRowCells } from '../../utils';

type ScreenRowProps = {
  appleItem: SnakeBodyItem;
  cells: Array<number>;
  snakeBody: Array<SnakeBodyItem>;
  y: number;
};

export const ScreenRowComponent: FC<ScreenRowProps> = ({
  appleItem,
  cells,
  snakeBody,
  y,
}) => {
  const rowCells = useMemo(() => getRowCells(cells, snakeBody, y), [cells, snakeBody, y]);
  const isAppleInRow = useMemo(() => appleItem.y === y, [appleItem, y]);

  return (
    <tr>
      {rowCells.map(({ x, isSnakeItem }) => (
        <SnakeItem
          key={`cell${x}`}
          isApple={isAppleInRow && appleItem.x === x}
          isSnakeItem={isSnakeItem}
        />
      ))}
    </tr>
  );
};

export const ScreenRow = memo(ScreenRowComponent);