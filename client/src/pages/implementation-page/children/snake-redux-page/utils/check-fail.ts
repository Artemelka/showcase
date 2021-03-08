import { CheckStopGameParams } from '../types';
import { CELL_QUANTITY } from '../constants';

export function checkFail({ head, body }: CheckStopGameParams): boolean {
  const isEndLayout = head.x < 0 || head.x === CELL_QUANTITY || head.y < 0 || head.y === CELL_QUANTITY;
  const isIncludesBody = body.some(bodyItem => bodyItem.x === head.x && bodyItem.y === head.y);

  return isEndLayout || isIncludesBody;
}