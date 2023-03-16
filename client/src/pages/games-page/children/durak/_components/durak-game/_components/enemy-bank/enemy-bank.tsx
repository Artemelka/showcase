import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enemyBankSelector, isPlayerStepSelector } from '../../redux';
import { DurakGameStore, CardParams } from '../../types';
import { CardBank } from '../card-bank';

type StateProps = {
  cards: Array<CardParams>;
  isPlayerStep: boolean;
};

export class EnemyBankComponent extends Component<StateProps, any> {
  componentDidUpdate() {
    if (!this.props.isPlayerStep) {
      console.log('=== step ===');
    }
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
};

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  cards: enemyBankSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
});

export const EnemyBank = connect(mapStateToProps)(EnemyBankComponent);