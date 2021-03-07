export type State = {
  appleItem: SnakeBodyItem;
  cells: Array<number>;
  direction: DirectionItem;
  snakeBody: Array<SnakeBodyItem>;
}

export type SnakeBodyItem = {
  x: number;
  y: number;
  isHead?: boolean;
};

export type DirectionItem = {
  x: number;
  y: number;
}

export type DirectionCode = 37 | 38 | 39 | 40;

export type CheckStopGameParams = {
  body: Array<SnakeBodyItem>;
  head: SnakeBodyItem;
  length: number,
}