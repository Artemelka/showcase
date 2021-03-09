import React, { memo, useMemo } from 'react';
import { SnakeItem } from '../snake-item';
import { SnakeBodyItem } from '../../types';
import { getRowCells } from '../../utils';

type ScreenRowProps = {
  appleItem: SnakeBodyItem;
  cells: Array<number>;
  snakeBody: Array<SnakeBodyItem>;
  y: number;
};

export const ScreenRow = memo(({
  appleItem,
  cells,
  snakeBody,
  y,
}: ScreenRowProps) => {
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
});