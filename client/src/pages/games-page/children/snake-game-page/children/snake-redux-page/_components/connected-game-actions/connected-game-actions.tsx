import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  InputChangeEvent,
  SelectChangeEvent,
} from '@artemelka/react-components';
import { AppStore } from '@/types';
import { GameActions } from '../../../../_components';
import {
  gameCellsSelector,
  gameIsStartedSelector,
  gameIsFailSelector,
  gameScoreSelector,
  gameSpeedSelector,
} from '../../redux';

const mapStateToProps = (state: AppStore) => ({
  cells: gameCellsSelector(state),
  gameSpeed: gameSpeedSelector(state),
  isStarted: gameIsStartedSelector(state),
  isFail: gameIsFailSelector(state),
  score: gameScoreSelector(state),
});

type GameActionsProps = ReturnType<typeof mapStateToProps> & {
  onCellsChange: (inputEvent: InputChangeEvent) => void;
  onGameSpeedChange: (selectEvent: SelectChangeEvent) => void;
  onRefresh: () => void;
  onStartClick: () => void;
};

export const GameActionsWrapper: FC<GameActionsProps> = ({
  cells,
  gameSpeed,
  isFail,
  isStarted,
  onCellsChange,
  onGameSpeedChange,
  onRefresh,
  onStartClick,
  score,
}) => {
  return (
    <GameActions
      cells={`${cells.length}`}
      gameSpeed={gameSpeed}
      isFail={isFail}
      isStarted={isStarted}
      onCellsChange={onCellsChange}
      onGameSpeedChange={onGameSpeedChange}
      onRefresh={onRefresh}
      onStartClick={onStartClick}
      score={score}
    />
  );
};

export const ConnectedGameActions =
  connect(mapStateToProps)(GameActionsWrapper);
