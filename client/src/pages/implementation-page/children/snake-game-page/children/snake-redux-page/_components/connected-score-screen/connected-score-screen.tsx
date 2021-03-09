import React, {memo} from 'react';
import { connect } from 'react-redux';
import { Text } from '@artemelka/react-components';
import { gameScoreSelector } from '../../redux';
import { AppStoreWithGameRedux } from '../../../../types';

type MapStateToProps = {
  score: string;
}
type ConnectedScoreScreenProps = MapStateToProps & {};

export const ScoreScreen = memo(({ score }: ConnectedScoreScreenProps) => {
  return (
    <Text>Score: {score}</Text>
  );
});

export const ConnectedScoreScreen = connect(
  (state: AppStoreWithGameRedux): MapStateToProps => ({
    score: gameScoreSelector(state),
  })
)(ScoreScreen);