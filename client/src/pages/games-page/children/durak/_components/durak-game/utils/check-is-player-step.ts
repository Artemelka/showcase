import { CardParams, Suit } from '../types';
import { findMinTrumpRank } from './find-min-trump-rank';

export function checkIsPlayerStep(
  enemyBank: Array<CardParams>,
  playerBank: Array<CardParams>,
  trumpSuit: Suit
): boolean {
  const playerMinTrumpCard = findMinTrumpRank(playerBank, trumpSuit);
  const enemyMinTrumpCard = findMinTrumpRank(enemyBank, trumpSuit);

  return playerMinTrumpCard < enemyMinTrumpCard;
}
