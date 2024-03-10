import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { BaseAction } from '@/types';
import { CardParams } from '@/pages/games-page/types';
import {
  enemyPlaceSelector,
  isPlayerAttackSelector,
  isPlayerStepSelector,
  playerBankSelector,
  playerPlaceSelector,
  setIsNeedUpdateCards,
  setPlayerBank,
} from '../../redux';
import { DurakGameStore } from '../../types';
import styles from './table-actions.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Table-actions';

type Actions = {
  setIsNeedUpdateCards: () => void;
  setPlayerBank: (cards: Array<CardParams>) => BaseAction<Array<CardParams>>;
};

type StateProps = {
  cards: Array<CardParams>;
  enemyPlace: Array<CardParams>;
  isPlayerStep: boolean;
  isPlayerAttack: boolean;
  playerPlace: Array<CardParams>;
};

type Props = StateProps & Actions;

export class TableActionsComponent extends Component<Props, never> {
  handlePickUpClick = () => {
    const { cards, enemyPlace, playerPlace } = this.props;
    const nextCards = [...cards, ...enemyPlace, ...playerPlace];

    this.props.setPlayerBank(nextCards);
    this.props.setIsNeedUpdateCards();
  };

  handleEndClick = () => {
    this.props.setIsNeedUpdateCards();
  };

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <Button
            disabled={!this.props.isPlayerAttack}
            onClick={this.handleEndClick}
            themeColor="secondary"
            value="end"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <Button
            disabled={!this.props.isPlayerStep}
            onClick={this.handlePickUpClick}
            themeColor="error"
            value="pick Up"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  cards: playerBankSelector(state),
  enemyPlace: enemyPlaceSelector(state),
  isPlayerAttack: isPlayerAttackSelector(state),
  isPlayerStep: isPlayerStepSelector(state),
  playerPlace: playerPlaceSelector(state),
});

const mapDispatchToProps: Actions = {
  setIsNeedUpdateCards,
  setPlayerBank,
};

export const TableActions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableActionsComponent);
