import { CardParams } from '../types';

export function getGameTrumpCard(deck: Array<CardParams>): CardParams {
  return deck[deck.length - 1];
}