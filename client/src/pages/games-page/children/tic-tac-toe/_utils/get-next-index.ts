import { GAME_LEVEL_OPTIONS } from '../constant';
import { Symbols } from '../types';
import { easyBot } from './easy-bot';
import { minimax } from './minimax';

type Params = {
  state: Array<string>;
  symbols: Symbols;
  targetSymbol: string;
  level: string;
}

export function getNextIndex({ level, state, symbols, targetSymbol }: Params): number {
  if (level === GAME_LEVEL_OPTIONS[0].value) {
    return easyBot(state, symbols);
  }

  const { cellIndex } = minimax({ state, symbols, targetSymbol });

  return cellIndex;
}