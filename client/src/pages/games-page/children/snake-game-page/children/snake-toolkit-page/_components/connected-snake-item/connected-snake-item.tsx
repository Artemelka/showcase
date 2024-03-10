import { connect } from 'react-redux';
import { SnakeItem } from '../../../../_components';
import { GameToolkitStore } from '../../../../types';
import { gameIsAppleItemSelector, gameIsSnakeItemSelector } from '../../redux';

type MapStateToProps = {
  isApple: boolean;
  isSnakeItem: boolean;
};

type Props = {
  x: number;
  y: number;
};

export const ConnectedSnakeItem = connect(
  (state: GameToolkitStore, ownProps: Props): MapStateToProps => ({
    isApple: gameIsAppleItemSelector(state, ownProps),
    isSnakeItem: gameIsSnakeItemSelector(state, ownProps),
  }),
)(SnakeItem);
