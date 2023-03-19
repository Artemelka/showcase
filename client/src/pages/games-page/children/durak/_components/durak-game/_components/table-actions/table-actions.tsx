import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@artemelka/react-components';
import { BaseAction } from "@/app";
import {
  clearPlaces,
  enemyPlaceSelector,
  isPlayerStepSelector,
  playerBankSelector,
  playerPlaceSelector,
  setPlayerBank,
  toggleStep,
} from '../../redux';
import { CardParams, DurakGameStore } from '../../types';

type Actions = {
  clearPlaces: () => void;
  setPlayerBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
  toggleStep: () => void;
};

type StateProps = {
  cards: Array<CardParams>;
  enemyPlace: Array<CardParams>;
  isPlayerStep: boolean;
  playerPlace: Array<CardParams>;
};

type Props = StateProps & Actions;

export class TableActionsComponent extends Component<Props> {
  handleGetClick = () => {
    const { cards, enemyPlace, playerPlace } = this.props;
    const nextCards = [...cards, ...enemyPlace, ...playerPlace];

    this.props.setPlayerBank(nextCards);
    this.props.clearPlaces();
    this.props.toggleStep();
  };

  render() {
    return (
      <Button
        onClick={this.handleGetClick}
        themeColor="error"
        value="GET"
        isFullWidth
        disabled={!this.props.isPlayerStep}
      />
    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  isPlayerStep: isPlayerStepSelector(state),
  enemyPlace: enemyPlaceSelector(state),
  cards: playerBankSelector(state),
  playerPlace: playerPlaceSelector(state),
});

const mapDispatchToProps: Actions = {
  clearPlaces,
  setPlayerBank,
  toggleStep,
};

export const TableActions = connect(mapStateToProps, mapDispatchToProps)(TableActionsComponent);