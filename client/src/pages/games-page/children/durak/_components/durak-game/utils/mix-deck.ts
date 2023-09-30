import { CardParams } from '@/pages/games-page/types';

export function mixDeck(deck: Array<CardParams>): Array<CardParams> {
  return [...deck].sort(() => Math.random() - 0.5);
}