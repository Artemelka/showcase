import React, { memo, useCallback, useState } from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import {
  Button,
  Input,
  InputChangeEvent,
  Label,
  Select,
  SelectChangeEvent,
  Text,
} from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../../../utils';
import {
  INPUT_ID,
  SELECT_ID,
  SELECT_OPTIONS,
  CELL_QUANTITY,
} from '../../constants';
import { Game } from '../game';
import style from './game-box.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game-box';
const SELECT_ICON_CONFIG = {
  iconClose: <ArrowDropUp fontSize="inherit" />,
  iconOpen: <ArrowDropDown fontSize="inherit" />,
};

export const GameBox = memo(() => {
  const [score, setScore] = useState(0);
  const [gameSpeed, setGameSpeed] = useState([SELECT_OPTIONS[1]]);
  const [isStarted, setIsStarted] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [cellQuantity, setCellQuantity] = useState(CELL_QUANTITY);

  const handleCellsChange = useCallback(({ value }: InputChangeEvent) => {
    setCellQuantity(value)
  }, []);

  const handleGameSpeedChange = useCallback(({ items }: SelectChangeEvent) => {
    setGameSpeed(items);
  }, []);

  const handleUpdateScore = useCallback(() => {
    setScore(score + 1);
  }, [score]);

  const handleStartClick = useCallback(() => {
    setIsStarted(!isStarted);
  }, [isStarted]);

  const handleStopGame = useCallback(() => {
    setIsStarted(false);
    setIsFail(true);
  }, []);

  const handleRefresh = useCallback(() => {
    setIsRefresh(!isRefresh);
    setScore(0);
    setIsFail(false);
  }, [isRefresh]);

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__container`)}>
        <div className={cn(`${CLASS_NAME}__info`)}>
          <div className={cn(`${CLASS_NAME}__input`)}>
            <Label htmlFor={SELECT_ID} size="small" position="left">Level:</Label>
            <Select
              disabled={isStarted}
              iconConfig={SELECT_ICON_CONFIG}
              id={SELECT_ID}
              name={SELECT_ID}
              onChange={handleGameSpeedChange}
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
              onChange={handleCellsChange}
              size="small"
              themeColor="primary"
              type="number"
              value={cellQuantity}
              variant="filled"
            />
          </div>
          <div className={cn(`${CLASS_NAME}__actions`)}>
            <div className={cn(`${CLASS_NAME}__button`)}>
              <Button
                disabled={isFail}
                onClick={handleStartClick}
                size="small"
                themeColor="primary"
                value={isStarted ? 'stop' : 'start'}
              />
            </div>
            <div className={cn(`${CLASS_NAME}__button`)}>
              <Button
                disabled={isStarted}
                onClick={handleRefresh}
                size="small"
                themeColor="primary"
                value="Refresh"
              />
            </div>
          </div>
          <div className={cn(`${CLASS_NAME}__score`)}>
            <Text>Score: {`${score}`}</Text>
          </div>
        </div>
        <div className={cn(`${CLASS_NAME}__screen`)}>
          <Game
            cellQuantity={Number(cellQuantity)}
            gameSpeed={gameSpeed[0].extraData.delay}
            isRefresh={isRefresh}
            isStarted={isStarted}
            onStopGame={handleStopGame}
            onUpdateScore={handleUpdateScore}
          />
        </div>
      </div>
    </div>
  );
});