export type UpdatedStateConfig = {
  cellIndex: number;
  symbol: string;
};

export type Move = {
  cellIndex: number;
  score: number;
};

export type Symbols = {
  user: string;
  ai: string;
};