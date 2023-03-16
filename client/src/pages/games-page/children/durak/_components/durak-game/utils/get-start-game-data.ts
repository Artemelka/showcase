import { DurakState } from '../types';
import { getPlayersCards } from './get-players-cards';
import { mixDeck } from './mix-deck';
import { getGameTrumpCard } from './get-game-trump-card';
import { getGameDeck } from './get-game-deck';
import { checkIsPlayerStep } from './check-is-player-step';

export function getStartGameData(): DurakState {
  const mixedGameDeck = mixDeck(getGameDeck());
  const { enemyCards, playerCards, deck } = getPlayersCards(mixedGameDeck);
  const trumpCard = getGameTrumpCard(deck);
  const isPlayerStep = checkIsPlayerStep(enemyCards, playerCards, trumpCard.suit);

  return {
    enemyBank: enemyCards,
    playerBank: playerCards,
    deck,
    trumpCard,
    isPlayerStep,
    tablePlayerPlace: [],
    tableEnemyPlace: [],
  }
}