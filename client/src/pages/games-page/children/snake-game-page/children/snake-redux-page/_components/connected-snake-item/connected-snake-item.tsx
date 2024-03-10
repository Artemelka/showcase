import { connect } from 'react-redux';
import { AppStore } from '@/types';
import { SnakeItem } from '../../../../_components';
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
  (state: AppStore, ownProps: Props): MapStateToProps => ({
    isApple: gameIsAppleItemSelector(state, ownProps),
    isSnakeItem: gameIsSnakeItemSelector(state, ownProps),
  }),
)(SnakeItem);
