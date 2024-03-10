import { DropdownItemParams } from '@artemelka/react-components';
import { BaseAction } from '@/types';
import {
  GAME_PURE_REDUX_REDUCER_NAME,
  GAME_TOOLKIT_REDUCER_NAME,
} from './constants';

export type GameState = {
  appleItem: SnakeBodyItem;
  cells: Array<number>;
  direction: DirectionItem;
  gameSpeed: Array<DropdownItemParams>;
  isFail: boolean;
  isStarted: boolean;
  score: number;
  snakeBody: Array<SnakeBodyItem>;
};

export type RefreshGameAction = BaseAction<number>;
export type SetAppleItemAction = BaseAction<SnakeBodyItem>;
export type UpdateSnakeBodyAction = BaseAction<Array<SnakeBodyItem>>;
export type SetDirectionAction = BaseAction<DirectionItem>;
export type SetIsStartedAction = BaseAction<boolean>;
export type SetGameSpeedAction = BaseAction<Array<DropdownItemParams>>;

export type GameReducerCase = {
  refreshGame: (state: GameState, action: BaseAction<number>) => void;
  setAppleItem: (state: GameState, action: SetAppleItemAction) => void;
  setDirection: (state: GameState, action: SetDirectionAction) => void;
  setGameSpeed: (state: GameState, action: SetGameSpeedAction) => void;
  setIsFail: (state: GameState) => void;
  setStartGame: (state: GameState) => void;
  setStopGame: (state: GameState) => void;
  updateScore: (state: GameState) => void;
  updateSnakeBody: (state: GameState, action: UpdateSnakeBodyAction) => void;
};

export type GameReduxStore = { [GAME_PURE_REDUX_REDUCER_NAME]: GameState };
export type GameToolkitStore = { [GAME_TOOLKIT_REDUCER_NAME]: GameState };

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
};

export type CheckStopGameParams = {
  body: Array<SnakeBodyItem>;
  head: SnakeBodyItem;
  length: number;
};

export type RowCells = {
  x: number;
  isSnakeItem: boolean;
};
