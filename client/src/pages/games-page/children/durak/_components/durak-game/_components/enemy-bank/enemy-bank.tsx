import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseAction } from "@/app";
import {
  addEnemyPlace,
  clearPlaces,
  enemyBankSelector,
  enemyPlaceSelector,
  isEnemyAttackSelector,
  isPlayerStepSelector,
  playerPlaceSelector,
  setEnemyBank,
  toggleStep,
  trumpCardSelector,
} from '../../redux';
import { findCurrentCard, findMinRankCard } from '../../utils';
import { DurakGameStore, CardParams } from '../../types';
import { CardBank } from '../card-bank';

type Actions = {
  addEnemyPlace: (card: CardParams) => BaseAction<CardParams>;
  clearPlaces: () => void;
  setEnemyBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  toggleStep: () => void;
};

type StateProps = {
  cards: Array<CardParams>;
  enemyPlace: Array<CardParams>;
  isEnemyAttack: boolean;
  isPlayerStep: boolean;
  playerPlace: Array<CardParams>;
  trumpCard: CardParams;
};

type Props = StateProps & Actions;

export class EnemyBankComponent extends Component<Props> {
  componentDidUpdate() {
    const { isEnemyAttack, isPlayerStep } = this.props;

    if (isPlayerStep) {
      return;
    }

    if (isEnemyAttack) {
      this.attackStep();
      return;
    }

    this.protectionStep();
  }

  attackStep = () => {
    const { cards, trumpCard } = this.props;

    const cardsWithoutTrumps = cards.filter(card => card.suit !== trumpCard.suit);
    const currentCard = findMinRankCard(cardsWithoutTrumps);
    const nextCards = cards.filter(card => card.id !== currentCard.id);

    this.makeStep(currentCard, nextCards);
  }

  pickUpCards = () => {
    const { cards, enemyPlace, playerPlace } = this.props;
    const nextCards = [...cards, ...enemyPlace, ...playerPlace];

    this.props.setEnemyBank(nextCards);
    this.props.clearPlaces();
    this.props.toggleStep();
  }

  protectionStep = () => {
    const { cards, playerPlace, trumpCard } = this.props;
    const { currentCard, nextCards } = findCurrentCard(cards, playerPlace[playerPlace.length - 1], trumpCard);

    if (currentCard) {
      this.makeStep(currentCard, nextCards);
      return;
    }

    this.pickUpCards();
  }

  makeStep = (currentCard: CardParams, nextCards: Array<CardParams>) => {
    this.props.setEnemyBank(nextCards);
    this.props.addEnemyPlace(currentCard);
    this.props.toggleStep();
  }

  render() {
    return (
      <CardBank
        cards={this.props.cards}
        isDisabledCard
        isHiddenCard
      />
    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  cards: enemyBankSelector(state),
  enemyPlace: enemyPlaceSelector(state),
  isEnemyAttack: isEnemyAttackSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerPlace: playerPlaceSelector(state),
  trumpCard: trumpCardSelector(state),
});

const mapDispatchToProps: Actions = {
  addEnemyPlace,
  clearPlaces,
  setEnemyBank,
  toggleStep,
}

export const EnemyBank = connect(mapStateToProps, mapDispatchToProps)(EnemyBankComponent);