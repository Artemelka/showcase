import { RowCells, SnakeBodyItem } from '../types';

export function getRowCells(cells: Array<number>, snake: Array<SnakeBodyItem>, y: number): Array<RowCells> {
  const checkSnakeItemsInRow = snake.filter(item => item.y === y);

  return cells.reduce((acc: Array<RowCells>, x: number) => {
    return [...acc, { x, isSnakeItem: checkSnakeItemsInRow.some(item => item.x === x) }]
  }, []);
}