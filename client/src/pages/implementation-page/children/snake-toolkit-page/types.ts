import { DropdownItemParams } from '@artemelka/react-components';
import { AppStore, BaseAction } from '../../../../app';
import { GAME_REDUCER_NAME } from './constants';

export type GameState = {
  appleItem: SnakeBodyItem;
  direction: DirectionItem;
  gameSpeed: Array<DropdownItemParams>;
  isFail: boolean;
  isStarted: boolean;
  score: number;
  snakeBody: Array<SnakeBodyItem>;
}

export type SetAppleItemAction = BaseAction<SnakeBodyItem>;
export type SetDirectionAction = BaseAction<DirectionItem>;
export type SetGameSpeedAction = BaseAction<Array<DropdownItemParams>>;
export type SetIsStartedAction = BaseAction<boolean>;
export type UpdateSnakeBodyAction = BaseAction<Array<SnakeBodyItem>>;

export type GameReducerCase = {
  refreshGame: (state: GameState) => void;
  setAppleItem: (state: GameState, action: SetAppleItemAction) => void;
  setDirection: (state: GameState, action: SetDirectionAction) => void;
  setGameSpeed: (state: GameState, action: SetGameSpeedAction) => void;
  setIsFail: (state: GameState) => void;
  setStartGame: (state: GameState) => void;
  setStopGame: (state: GameState) => void;
  updateScore: (state: GameState) => void;
  updateSnakeBody: (state: GameState, action: UpdateSnakeBodyAction) => void;
}

export type AppStoreWithGame = AppStore & { [GAME_REDUCER_NAME]: GameState };

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
}