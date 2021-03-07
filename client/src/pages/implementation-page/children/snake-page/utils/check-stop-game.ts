import { CheckStopGameParams } from '../types';
import { checkEndLayout } from './check-end-layout';
import { checkIncludesBody } from './check-includes-body';

export function checkStopGame({ head, length, body }: CheckStopGameParams): boolean {
  const isEndLayout = checkEndLayout(head, length);
  const isIncludesBody = checkIncludesBody(head, body);

  return isEndLayout || isIncludesBody;
}