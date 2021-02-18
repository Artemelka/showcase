import { CashType } from '../types';

export const getAmountFromResult = (result: CashType): number =>
  result.reduce(
    (acc, [count, num]) => acc + (count * num),
    0
  );