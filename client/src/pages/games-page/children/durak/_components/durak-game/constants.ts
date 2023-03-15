import ClubsSix from '../../../../../../assets/durak/cards/clubs/6.png';
import ClubsSeven from '../../../../../../assets/durak/cards/clubs/7.png';
import ClubsEight from '../../../../../../assets/durak/cards/clubs/8.png';
import ClubsNine from '../../../../../../assets/durak/cards/clubs/9.png';
import ClubsTen from '../../../../../../assets/durak/cards/clubs/10.png';
import ClubsJack from '../../../../../../assets/durak/cards/clubs/11.png';
import ClubsQueen from '../../../../../../assets/durak/cards/clubs/12.png';
import ClubsKing from '../../../../../../assets/durak/cards/clubs/13.png';
import ClubsAce from '../../../../../../assets/durak/cards/clubs/14.png';

import DiamondsSix from '../../../../../../assets/durak/cards/diamonds/6.png';
import DiamondsSeven from '../../../../../../assets/durak/cards/diamonds/7.png';
import DiamondsEight from '../../../../../../assets/durak/cards/diamonds/8.png';
import DiamondsNine from '../../../../../../assets/durak/cards/diamonds/9.png';
import DiamondsTen from '../../../../../../assets/durak/cards/diamonds/10.png';
import DiamondsJack from '../../../../../../assets/durak/cards/diamonds/11.png';
import DiamondsQueen from '../../../../../../assets/durak/cards/diamonds/12.png';
import DiamondsKing from '../../../../../../assets/durak/cards/diamonds/13.png';
import DiamondsAce from '../../../../../../assets/durak/cards/diamonds/14.png';

import HeartsSix from '../../../../../../assets/durak/cards/hearts/6.png';
import HeartsSeven from '../../../../../../assets/durak/cards/hearts/7.png';
import HeartsEight from '../../../../../../assets/durak/cards/hearts/8.png';
import HeartsNine from '../../../../../../assets/durak/cards/hearts/9.png';
import HeartsTen from '../../../../../../assets/durak/cards/hearts/10.png';
import HeartsJack from '../../../../../../assets/durak/cards/hearts/11.png';
import HeartsQueen from '../../../../../../assets/durak/cards/hearts/12.png';
import HeartsKing from '../../../../../../assets/durak/cards/hearts/13.png';
import HeartsAce from '../../../../../../assets/durak/cards/hearts/14.png';

import SpadesSix from '../../../../../../assets/durak/cards/spades/6.png';
import SpadesSeven from '../../../../../../assets/durak/cards/spades/7.png';
import SpadesEight from '../../../../../../assets/durak/cards/spades/8.png';
import SpadesNine from '../../../../../../assets/durak/cards/spades/9.png';
import SpadesTen from '../../../../../../assets/durak/cards/spades/10.png';
import SpadesJack from '../../../../../../assets/durak/cards/spades/11.png';
import SpadesQueen from '../../../../../../assets/durak/cards/spades/12.png';
import SpadesKing from '../../../../../../assets/durak/cards/spades/13.png';
import SpadesAce from '../../../../../../assets/durak/cards/spades/14.png';

import Skin from '../../../../../../assets/durak/cards/skin.png';

import { Suit, Rank, CardParams } from './types';

export const CARD_IMG_MAP: Record<Suit, Record<Rank, any>> = {
  clubs: {
    6: ClubsSix,
    7: ClubsSeven,
    8: ClubsEight,
    9: ClubsNine,
    10: ClubsTen,
    11: ClubsJack,
    12: ClubsQueen,
    13: ClubsKing,
    14: ClubsAce,
  },
  diamonds: {
    6: DiamondsSix,
    7: DiamondsSeven,
    8: DiamondsEight,
    9: DiamondsNine,
    10: DiamondsTen,
    11: DiamondsJack,
    12: DiamondsQueen,
    13: DiamondsKing,
    14: DiamondsAce,
  },
  hearts: {
    6: HeartsSix,
    7: HeartsSeven,
    8: HeartsEight,
    9: HeartsNine,
    10: HeartsTen,
    11: HeartsJack,
    12: HeartsQueen,
    13: HeartsKing,
    14: HeartsAce,
  },
  spades: {
    6: SpadesSix,
    7: SpadesSeven,
    8: SpadesEight,
    9: SpadesNine,
    10: SpadesTen,
    11: SpadesJack,
    12: SpadesQueen,
    13: SpadesKing,
    14: SpadesAce,
  },
};

export const CARD_IMG_SKIN = Skin;

const SUITS: Array<Suit> = ['diamonds', 'hearts', 'clubs', 'spades'];

const RANKS: Array<Rank> = ['6', '7', '8', '9', '10', '11', '12', '13', '14'];

export const DECK: Array<CardParams> = SUITS.map((suit, suitIndex) => {
  return RANKS.map((rank, rankIndex) => ({
    id: `${suitIndex}${rankIndex}`,
    img: `${suit}/${rank}`,
    rank,
    suit,
  }));
}).flat();
