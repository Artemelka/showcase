import { SYMBOLS } from '../constant';
import { Symbols } from '../types';

export function getSymbols(symbol: string): Symbols {
  return {
    ai: SYMBOLS.filter(item => item !== symbol)[0],
    user: symbol
  }
}