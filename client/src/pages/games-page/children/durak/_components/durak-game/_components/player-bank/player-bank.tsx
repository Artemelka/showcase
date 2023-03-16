import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseAction } from '@/app';
import {
  playerBankSelector,
  setPlayerBank,
  addPlayerPlace,
  isPlayerStepSelector,
  toggleStep,
} from '../../redux';
import { DurakGameStore, CardParams } from '../../types';
import { CardBank } from '../card-bank';

type Actions = {
  setPlayerBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  addPlayerPlace: (card: CardParams) => BaseAction<CardParams>;
  toggleStep: () => void;
};

type StateProps =  {
  cards: Array<CardParams>;
  isPlayerStep: boolean;
};

type Props = Actions & StateProps;

export class PlayerBankComponent extends Component<Props> {
  handleCardClick = (id: string) => {
    const nextPlayerCards = this.props.cards.filter(card => card.id !== id);
    const currentCard = this.props.cards.find(card => card.id === id);

    this.props.setPlayerBank(nextPlayerCards)
    this.props.addPlayerPlace(currentCard!);
    this.props.toggleStep();
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
  isPlayerStep: isPlayerStepSelector(state),
});

const mapDispatchToProps: Actions = {
  setPlayerBank,
  addPlayerPlace,
  toggleStep,
};

export const PlayerBank = connect(mapStateToProps, mapDispatchToProps)(PlayerBankComponent);