import { CheckStopGameParams } from '../types';

export function checkFail({ head, length, body }: CheckStopGameParams): boolean {
  const isEndLayout = head.x < 0 || head.x === length || head.y < 0 || head.y === length;
  const isIncludesBody = body.some(bodyItem => bodyItem.x === head.x && bodyItem.y === head.y);

  return isEndLayout || isIncludesBody;
}