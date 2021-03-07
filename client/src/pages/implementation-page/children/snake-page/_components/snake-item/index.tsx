import React, { memo, useMemo } from 'react';
import { SnakeBodyItem } from '../../types';
import { SnakeItem as Item } from './snake-item';

type SnakeItemProps = {
  appleItem: SnakeBodyItem;
  snakeBody: Array<SnakeBodyItem>;
  x: number;
  y: number;
};

export const SnakeItem = memo(({
  appleItem,
  snakeBody,
  x,
  y,
}: SnakeItemProps) => {
  const isSnakeItem = useMemo(() => {
    return snakeBody.some(bodyItem => x === bodyItem.x && y === bodyItem.y);
  }, [snakeBody, x, y]);

  const isApple = useMemo(() => {
    return appleItem.x === x && appleItem.y === y;
  }, [appleItem, x, y])

  return <Item isApple={isApple} isSnakeItem={isSnakeItem}/>
});



