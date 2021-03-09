import React, { memo } from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import {
  Button,
  Input,
  InputChangeEvent,
  DropdownItemParams,
  Label,
  Select,
  SelectChangeEvent,
  Text,
} from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../../../../../utils';
import { INPUT_ID, SELECT_ID, SELECT_OPTIONS } from '../../../../constants';
import style from './game-actions.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game-actions';
const SELECT_ICON_CONFIG = {
  iconClose: <ArrowDropUp fontSize="inherit" />,
  iconOpen: <ArrowDropDown fontSize="inherit" />,
};

type GameActionsProps = {
  cells: string;
  gameSpeed: Array<DropdownItemParams>;
  isFail: boolean;
  isStarted: boolean;
  onCellsChange: (inputEvent: InputChangeEvent) => void;
  onGameSpeedChange: (selectEvent: SelectChangeEvent) => void;
  onRefresh: () => void;
  onStartClick: () => void;
  score: string;
};

export const GameActions = memo(({
  cells,
  gameSpeed,
  isFail,
  isStarted,
  onCellsChange,
  onGameSpeedChange,
  onRefresh,
  onStartClick,
  score
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
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Label htmlFor={INPUT_ID} size="small" position="left">Cells:</Label>
        <Input
          disabled={isStarted}
          id={INPUT_ID}
          name={INPUT_ID}
          onChange={onCellsChange}
          size="small"
          themeColor="primary"
          type="number"
          value={cells}
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
        <Text>Score: {score}</Text>
      </div>
    </div>
  );
});