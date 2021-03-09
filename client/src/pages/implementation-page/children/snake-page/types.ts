import { DropdownItemParams } from '@artemelka/react-components';

export type State = {
  appleItem: SnakeBodyItem;
  direction: DirectionItem;
  gameSpeed: Array<DropdownItemParams>;
  isFail: boolean;
  isStarted: boolean;
  score: number;
  snakeBody: Array<SnakeBodyItem>;
}

export type SnakeBodyItem = {
  x: number;
  y: number;
  isHead?: boolean;
};

export type DirectionCode = 37 | 38 | 39 | 40;

export type DirectionItem = {
  mirror: DirectionCode;
  x: number;
  y: number;
}

export type CheckStopGameParams = {
  body: Array<SnakeBodyItem>;
  head: SnakeBodyItem;
  length: number,
}

export type RowCells = {
  x: number;
  isSnakeItem: boolean;
}