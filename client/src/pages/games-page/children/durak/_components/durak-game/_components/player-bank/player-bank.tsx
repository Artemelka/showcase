import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseAction } from '@/app';
import {
  playerBankSelector,
  setPlayerBank,
  addPlayerPlace,
  isPlayerStepSelector,
  toggleStep,
  isPlayerAttackSelector,
  enemyPlaceSelector,
  playerPlaceSelector,
  trumpCardSelector,
} from '../../redux';
import { prepareCardsForStep } from '../../utils';
import { DurakGameStore, CardParams } from '../../types';
import { CardBank } from '../card-bank';

type Actions = {
  addPlayerPlace: (card: CardParams) => BaseAction<CardParams>;
  setPlayerBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  toggleStep: () => void;
};

type StateProps =  {
  cards: Array<CardParams>;
  enemyPlace: Array<CardParams>;
  isPlayerAttack: boolean;
  isPlayerStep: boolean;
  playerPlace: Array<CardParams>;
  trumpCard: CardParams;
};

type Props = Actions & StateProps;

export class PlayerBankComponent extends Component<Props> {
  makeStep = (currentCard: CardParams, nextCards: Array<CardParams>) => {
    this.props.setPlayerBank(nextCards)
    this.props.addPlayerPlace(currentCard);
    this.props.toggleStep();
  }

  getAvailableCards = () => {
    const { cards, enemyPlace, trumpCard } = this.props;
    const attackCard = enemyPlace[enemyPlace.length - 1];

    if (!attackCard) {
      return cards;
    }

    return cards.filter(card => {
      const isBiggestCard = card.suit === attackCard.suit && card.rank > attackCard.rank;
      const isTrumpCard = card.suit === trumpCard.suit && trumpCard.suit !== attackCard.suit;

      return isBiggestCard || isTrumpCard;
    });
  }

  handleCardClick = (id: string) => {
    const { cards, isPlayerAttack } = this.props;
    const { nextPlayerCards, currentCard } = prepareCardsForStep(cards, id);

    if (isPlayerAttack) {
      this.makeStep(currentCard, nextPlayerCards);
      return;
    }

    const availableCards = this.getAvailableCards();
    const isValidCard = availableCards.filter(card => card.id === id).length;

    if (isValidCard) {
      this.makeStep(currentCard, nextPlayerCards);
      return;
    }

    console.log('=== invalid step ===');
  };

  render() {
    return (
      <CardBank
        cards={this.props.cards}
        isDisabledCard={!this.props.isPlayerStep}
        onClick={this.handleCardClick}
      />
    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  cards: playerBankSelector(state),
  enemyPlace: enemyPlaceSelector(state),
  isPlayerAttack: isPlayerAttackSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerPlace: playerPlaceSelector(state),
  trumpCard: trumpCardSelector(state),
});

const mapDispatchToProps: Actions = {
  addPlayerPlace,
  setPlayerBank,
  toggleStep,
};

export const PlayerBank = connect(mapStateToProps, mapDispatchToProps)(PlayerBankComponent);