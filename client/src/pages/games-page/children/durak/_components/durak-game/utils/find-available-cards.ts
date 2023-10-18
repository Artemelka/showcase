import { CardParams } from '@/pages/games-page/types';

export function findAvailableCards(
  cards: Array<CardParams>,
  currentCard: CardParams,
): Array<CardParams> {
  const minRank = currentCard.rank;

  return cards.filter((card) => {
    const cardRank = card.rank;

    return card.suit === currentCard.suit && cardRank >= minRank;
  });
}
