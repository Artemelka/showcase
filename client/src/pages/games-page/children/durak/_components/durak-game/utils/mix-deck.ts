import { CardParams } from '../types';

export function mixDeck(deck: Array<CardParams>): Array<CardParams> {
  return [...deck].sort(() => Math.random() - 0.5);
}