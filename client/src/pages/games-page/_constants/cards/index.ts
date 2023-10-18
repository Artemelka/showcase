import { Suit, Rank, CardParams } from '@/pages/games-page/types';
import { CLUBS_IMG_MAP } from './clubs';
import { DIAMONDS_IMG_MAP } from './diamonds';
import { HEARTS_IMG_MAP } from './hearts';
import { SPADES_IMG_MAP } from './spades';

export { CARD_IMG_SKIN } from './skin';

const CLUBS_NAME = 'clubs';
const DIAMONDS_NAME = 'diamonds';
const HEARTS_NAME = 'hearts';
const SPADES_NAME = 'spades';

const CARD_IMG_MAP: Record<Suit, Record<Rank, any>> = {
  [CLUBS_NAME]: CLUBS_IMG_MAP,
  [DIAMONDS_NAME]: DIAMONDS_IMG_MAP,
  [HEARTS_NAME]: HEARTS_IMG_MAP,
  [SPADES_NAME]: SPADES_IMG_MAP,
};

const SUITS: Array<Suit> = [
  CLUBS_NAME,
  DIAMONDS_NAME,
  HEARTS_NAME,
  SPADES_NAME,
];
const RANKS: Array<Rank> = [6, 7, 8, 9, 10, 11, 12, 13, 14];

export const CARD_DECK = SUITS.reduce(
  (deck: Array<CardParams>, suit, suitIndex) => {
    const suitDeck = RANKS.map((rank, rankIndex) => ({
      id: `${suitIndex}${rankIndex}`,
      img: CARD_IMG_MAP[suit][rank],
      rank,
      suit,
    }));

    return [...deck, ...suitDeck];
  },
  [],
);
