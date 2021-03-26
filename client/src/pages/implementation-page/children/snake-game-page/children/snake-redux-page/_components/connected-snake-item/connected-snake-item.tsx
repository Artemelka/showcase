import { connect } from 'react-redux';
import { SnakeItem } from '../../../../_components';
import { gameIsAppleItemSelector, gameIsSnakeItemSelector } from '../../redux';
import { AppStoreWithGameRedux } from '../../../../types';

type MapStateToProps = {
  isApple: boolean;
  isSnakeItem: boolean;
}
type Props = {
  x: number;
  y: number;
}

export const ConnectedSnakeItem = connect(
  (state: AppStoreWithGameRedux, ownProps: Props): MapStateToProps => ({
    isApple: gameIsAppleItemSelector(state, ownProps),
    isSnakeItem: gameIsSnakeItemSelector(state, ownProps),
  })
)(SnakeItem);