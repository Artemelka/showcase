import { createSelector } from 'reselect';
import { DropdownItemParams } from '@artemelka/react-components';
import { GAME_TOOLKIT_REDUCER_NAME } from '../../../constants';
import { getInitialState } from '../../../utils';
import {
  GameToolkitStore,
  DirectionItem,
  GameState,
  SnakeBodyItem,
} from '../../../types';

const gameStateSelector = (state: GameToolkitStore): GameState =>
  state[GAME_TOOLKIT_REDUCER_NAME] || getInitialState();

export const gameAppleItemSelector = createSelector(
  [gameStateSelector],
  (state): SnakeBodyItem => state.appleItem,
);

export const gameCellsSelector = createSelector(
  [gameStateSelector],
  (state): Array<number> => state.cells,
);

export const gameScoreSelector = createSelector(
  [gameStateSelector],
  (state): string => `${state.score}`,
);

export const gameSnakeBodySelector = createSelector(
  [gameStateSelector],
  (state): Array<SnakeBodyItem> => state.snakeBody,
);

export const gameIsStartedSelector = createSelector(
  [gameStateSelector],
  (state): boolean => state.isStarted,
);

export const gameIsFailSelector = createSelector(
  [gameStateSelector],
  (state): boolean => state.isFail,
);

export const gameDirectionSelector = createSelector(
  [gameStateSelector],
  (state): DirectionItem => state.direction,
);

export const gameSpeedSelector = createSelector(
  [gameStateSelector],
  (state): Array<DropdownItemParams> => state.gameSpeed,
);

export const gameDelaySelector = createSelector(
  [gameSpeedSelector],
  (gameSpeed): number => gameSpeed[0].extraData.delay,
);

export const gameIsAppleItemSelector = (
  state: GameToolkitStore,
  { x, y }: SnakeBodyItem,
): boolean => {
  const appleItem = gameAppleItemSelector(state);

  return appleItem.x === x && appleItem.y === y;
};

export const gameIsSnakeItemSelector = (
  state: GameToolkitStore,
  { x, y }: SnakeBodyItem,
): boolean => {
  const snakeBody = gameSnakeBodySelector(state);

  return snakeBody.some((bodyItem) => x === bodyItem.x && y === bodyItem.y);
};
