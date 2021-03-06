import { DropdownItemParams } from '@artemelka/react-components';
import { IMPLEMENTATION_CHILDREN_PATH } from '../../constants';
import { DirectionCode, DirectionItem, SnakeBodyItem } from './types';

export const SNAKE_GAME_CHILDREN_PATH = {
  HOME: `${IMPLEMENTATION_CHILDREN_PATH.SNAKE_GAME}`,
  REACT: `${IMPLEMENTATION_CHILDREN_PATH.SNAKE_GAME}/pure-react`,
  REDUX: `${IMPLEMENTATION_CHILDREN_PATH.SNAKE_GAME}/pure-redux`,
  TOOLKIT: `${IMPLEMENTATION_CHILDREN_PATH.SNAKE_GAME}/redux-with-toolkit`,
  MOBX: `${IMPLEMENTATION_CHILDREN_PATH.SNAKE_GAME}/mobx`,
}

export const GAME_PURE_REDUX_REDUCER_NAME = 'snakeReduxGame';
export const GAME_TOOLKIT_REDUCER_NAME = 'snakeToolkitGame';

export const SELECT_ID = 'gameSpeedSelect';
export const INPUT_ID = 'cellsQuantity';

export const CELL_QUANTITY = 100;
export const DIRECTION_KEYS_CODE: Array<number> = [37, 38, 39, 40];

export const SELECT_OPTIONS: Array<DropdownItemParams> = [
  {
    extraData: { delay: 250 },
    id: 'easy',
    value: 'easy',
  }, {
    extraData: { delay: 200 },
    id: 'easy plus',
    value: 'easy plus',
  }, {
    extraData: { delay: 150 },
    id: 'middle',
    value: 'middle',
  }, {
    extraData: { delay: 100 },
    id: 'middle plus',
    value: 'middle plus',
  }, {
    extraData: { delay: 50 },
    id: 'hard',
    value: 'hard',
  },
];

export const DEFAULT_SNAKE_BODY: Array<SnakeBodyItem> = [
  { x: 5, y: 5 },
  { x: 5, y: 6 },
  { x: 5, y: 7 },
];

export const DIRECTION: Record<DirectionCode, DirectionItem> = {
  37: {
    mirror: 39,
    x: -1,
    y: 0
  },
  38: {
    mirror: 40,
    x: 0,
    y: -1
  },
  39: {
    mirror: 37,
    x: 1,
    y: 0
  },
  40: {
    mirror: 38,
    x: 0,
    y: 1
  },
};
