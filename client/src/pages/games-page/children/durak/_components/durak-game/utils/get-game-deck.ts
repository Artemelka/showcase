import { CardParams, Rank, Suit } from '../types';

const SUITS: Array<Suit> = ['diamonds', 'hearts', 'clubs', 'spades'];

const RANKS: Array<Rank> = [6, 7, 8, 9, 10, 11, 12, 13, 14];

const DECK: Array<CardParams> = SUITS.map((suit, suitIndex) => {
  return RANKS.map((rank, rankIndex) => ({
    id: `${suitIndex}${rankIndex}`,
    img: `${suit}/${rank}`,
    rank,
    suit,
  }));
}).flat();

export function getGameDeck(): Array<CardParams> {
  return [...DECK];
}