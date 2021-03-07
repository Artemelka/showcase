import { DropdownItemParams } from '@artemelka/react-components';
import { DirectionCode, DirectionItem, SnakeBodyItem } from './types';

export const SELECT_ID = 'gameSpeedSelect';
export const INPUT_ID = 'gameCellsInput';
export const CELL_QUANTITY = '40';
export const DIRECTION_KEYS_CODE: Array<number> = [37, 38, 39, 40];

export const SELECT_OPTIONS: Array<DropdownItemParams> = [
  {
    extraData: { delay: 500 },
    id: 'easy',
    value: 'easy',
  }, {
    extraData: { delay: 300 },
    id: 'middle',
    value: 'middle',
  }, {
    extraData: { delay: 150 },
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
  37: { x: -1, y: 0 },
  38: { x: 0, y: -1 },
  39: { x: 1, y: 0 },
  40: { x: 0, y: 1 }
};
