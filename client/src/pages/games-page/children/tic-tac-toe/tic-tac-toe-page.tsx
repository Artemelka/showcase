import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  DropdownItemParams,
  SelectChangeEvent,
} from '@artemelka/react-components';
import { Page, FilterSelect } from '@/components';
import { fastClassNames } from '@/utils';
import { CellButton, ActionsButtons } from './_components';
import {
  GAME_LEVEL_OPTIONS,
  INITIAL_LEVEL,
  INITIAL_STATE,
  INITIAL_SYMBOLS,
  INITIAL_WINNER,
} from './constant';
import {
  getEndGameMessage,
  getIsUserStep,
  getSymbols,
  getUpdatedState,
  getWinnerCells,
  getNextIndex,
} from './_utils';
import styles from './tic-tac-toe-page.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Tic-tac-toe-page';

type Winner = {
  message: string;
  winnerCells: Array<number>;
};

export const TicTacToePageComponent = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [symbols, setSymbols] = useState(INITIAL_SYMBOLS);
  const [level, setLevel] = useState<Array<DropdownItemParams>>(INITIAL_LEVEL);
  const [isUserStep, setIsUserStep] = useState(false);
  const [{ message, winnerCells }, setWinner] =
    useState<Winner>(INITIAL_WINNER);

  const aiStep = useCallback(() => {
    const cellIndex = getNextIndex({
      level: level[0].value,
      state,
      symbols,
      targetSymbol: symbols.ai,
    });

    if (Number.isNaN(cellIndex)) {
      throw Error('cellIndex is undefined');
    }

    const config = {
      cellIndex,
      symbol: symbols.ai,
    };

    setState((prevState) => getUpdatedState(prevState, config));
    setIsUserStep(true);
  }, [level, state, symbols]);

  useEffect(() => {
    if (!symbols.user) {
      return;
    }

    const endGameMessage = getEndGameMessage(state, symbols);

    if (endGameMessage) {
      const winnerSymbol = isUserStep ? symbols.ai : symbols.user;
      const cells = getWinnerCells(state, winnerSymbol);

      setWinner({ message: endGameMessage, winnerCells: cells });

      return;
    }

    if (!isUserStep) {
      aiStep();
    }
  }, [aiStep, isUserStep, setWinner, state, symbols]);

  const clearGame = useCallback(() => {
    setState(INITIAL_STATE);
    setSymbols(INITIAL_SYMBOLS);
    setWinner(INITIAL_WINNER);
    setLevel(INITIAL_LEVEL);
  }, []);

  const handleClick = useCallback(
    (cellIndex: number) => {
      const config = {
        cellIndex,
        symbol: symbols.user,
      };

      setState((prevState) => getUpdatedState(prevState, config));
      setIsUserStep(false);
    },
    [symbols],
  );

  const handleSymbolClick = useCallback((_e, symbol: string) => {
    const nextSymbols = getSymbols(symbol);

    setSymbols(nextSymbols);
    setIsUserStep(getIsUserStep());
  }, []);

  const handleLevel = useCallback((selectEvent: SelectChangeEvent) => {
    setLevel(selectEvent.items);
  }, []);

  return (
    <Page headTitle="Tic tac toe" title="Tic tac toe game">
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__message`)}>{message}</div>

        {symbols.user ? (
          <ul className={cn(`${CLASS_NAME}__container`)}>
            {state.map((value, cellIndex) => (
              <li
                key={`${value + cellIndex}`}
                className={cn(`${CLASS_NAME}__cell`)}
              >
                <CellButton
                  cellIndex={cellIndex}
                  disabled={
                    Boolean(value) ||
                    !symbols.user ||
                    !isUserStep ||
                    Boolean(message)
                  }
                  isWinner={winnerCells.includes(cellIndex)}
                  onClick={handleClick}
                  value={value}
                />
              </li>
            ))}
          </ul>
        ) : (
          <FilterSelect
            id="level"
            label="Choose level"
            name="level"
            onChange={handleLevel}
            options={GAME_LEVEL_OPTIONS}
            size="big"
            values={level}
          />
        )}

        {Boolean(level.length) && (
          <ActionsButtons
            disabled={Boolean(symbols.user)}
            isNewGameButton={
              Boolean(winnerCells.length) || message === 'No winners!'
            }
            onClear={clearGame}
            onSymbolClick={handleSymbolClick}
            userSymbol={symbols.user}
          />
        )}
      </div>
    </Page>
  );
};

export default memo(TicTacToePageComponent);
