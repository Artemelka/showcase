import { CardParams } from '@/pages/games-page/types';
import { CARD_DECK } from '@/pages/games-page/_constants/cards';

export function getGameDeck(): Array<CardParams> {
  return [...CARD_DECK];
}