export type Suit = 'diamonds' | 'hearts' | 'clubs' | 'spades';

export type Rank = '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14';

export type CardParams = {
  id: string;
  img: string;
  rank: Rank;
  suit: Suit;
};