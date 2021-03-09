import React, { memo } from 'react';
import { connect } from 'react-redux';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import {
  Button,
  DropdownItemParams,
  Label,
  Select,
  SelectChangeEvent,
} from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../../../utils';
import {
  gameIsStartedSelector,
  gameIsFailSelector,
  gameSpeedSelector,
} from '../../redux';
import { SELECT_ID, SELECT_OPTIONS } from '../../constants';
import { AppStoreWithGame } from '../../types';
import { ConnectedScoreScreen } from '../connected-score-screen';
import style from './game-actions.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game-actions';
const SELECT_ICON_CONFIG = {
  iconClose: <ArrowDropUp fontSize="inherit" />,
  iconOpen: <ArrowDropDown fontSize="inherit" />,
};

type MapStateToProps = {
  gameSpeed: Array<DropdownItemParams>;
  isFail: boolean;
  isStarted: boolean;
};

type GameActionsProps = MapStateToProps & {
  onGameSpeedChange: (selectEvent: SelectChangeEvent) => void;
  onRefresh: () => void;
  onStartClick: () => void;
};

export const GameActions = memo(({
  gameSpeed,
  isFail,
  isStarted,
  onGameSpeedChange,
  onRefresh,
  onStartClick,
}: GameActionsProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Label htmlFor={SELECT_ID} size="small" position="left">Level:</Label>
        <Select
          disabled={isStarted}
          iconConfig={SELECT_ICON_CONFIG}
          id={SELECT_ID}
          name={SELECT_ID}
          onChange={onGameSpeedChange}
          options={SELECT_OPTIONS}
          size="small"
          themeColor="primary"
          values={gameSpeed}
          variant="filled"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__actions`)}>
        <div className={cn(`${CLASS_NAME}__button`)}>
          <Button
            disabled={isFail}
            onClick={onStartClick}
            size="small"
            themeColor={isStarted ? 'error' : 'primary'}
            value={isStarted ? 'stop' : 'start'}
          />
        </div>
        <div className={cn(`${CLASS_NAME}__button`)}>
          <Button
            disabled={isStarted}
            onClick={onRefresh}
            size="small"
            themeColor="secondary"
            value="Refresh"
          />
        </div>
      </div>
      <div className={cn(`${CLASS_NAME}__score`)}>
        <ConnectedScoreScreen />
      </div>
    </div>
  );
});

const mapStateToProps = (state: AppStoreWithGame): MapStateToProps => ({
  gameSpeed: gameSpeedSelector(state),
  isStarted: gameIsStartedSelector(state),
  isFail: gameIsFailSelector(state),
});

export const ConnectedGameActions = connect(mapStateToProps)(GameActions);