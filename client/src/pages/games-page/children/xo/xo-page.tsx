import React, { memo, useCallback, useEffect, useState } from 'react';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { CellButton, ActionsButtons } from './_components';
import { INITIAL_STATE, INITIAL_SYMBOLS, SYMBOLS } from './constant';
import { getEndGameMessage, getIsUserStep, getUpdatedState, minimax } from './_utils';
import styles from './xo-page.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Xo-page';

export const XoPageComponent = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [symbols, setSymbols] = useState(INITIAL_SYMBOLS);
  const [isUserStep, setIsUserStep] = useState(false);
  const [message, setMessage] = useState('');
  const [isGameInit, setIsGameInit] = useState(false);

  const setWinner = useCallback((message: string) => {
    setMessage(message);
  }, []);

  const aiStep = useCallback(() => {
    const { cellIndex } = minimax(state, symbols, symbols.ai);

    if (isNaN(cellIndex)) {
      throw Error('cellIndex is undefined');
    }

    const config = {
      cellIndex,
      symbol: symbols.ai,
    }

    setState((prevState) => getUpdatedState(prevState, config));
    setIsUserStep(true);
  }, [state, symbols]);

  useEffect(() => {
    if (!isGameInit) {
      return;
    }

    const message = getEndGameMessage(state, symbols);

    if (message) {
        setWinner(message);
        return;
    }

    if (!isUserStep) {
      aiStep();
    }
  }, [aiStep, isGameInit, isUserStep, setWinner, state, symbols]);

  const clearGame = useCallback(() => {
    setIsGameInit(false);
    setState(INITIAL_STATE);
    setSymbols(INITIAL_SYMBOLS);
    setMessage('');
  }, []);

  const handleClick = useCallback((cellIndex: number) => {
    const config = {
      cellIndex,
      symbol: symbols.user,
    }

    setState((prevState) => getUpdatedState(prevState, config));
    setIsUserStep(false);
  }, [symbols]);

  const handleSymbolClick = useCallback((_, symbol: string) => {
    setSymbols({
      ai: SYMBOLS.filter(item => item !== symbol)[0],
      user: symbol
    });
    setIsUserStep(getIsUserStep());
    setIsGameInit(true);
  }, []);

  return (
    <Page headTitle="Tic tac toe" title="Tic tac toe game">
      <div className={cn(CLASS_NAME)}>
        {Boolean(message) && (
          <div
            className={cn(`${CLASS_NAME}__container`, {
              [`${CLASS_NAME}__container--winner`]: true,
            })}
          >
            <h2>{message}</h2>
          </div>
        )}
        {!Boolean(message) && Boolean(symbols.user) ? (
          <ul className={cn(`${CLASS_NAME}__container`)}>
            {state.map((value, cellIndex) => (
              <li className={cn(`${CLASS_NAME}__cell`)} key={`${cellIndex}`}>
                <CellButton
                  cellIndex={cellIndex}
                  onClick={handleClick}
                  value={value}
                  disabled={Boolean(value) || !Boolean(symbols.user) || !isUserStep}
                />
              </li>
            ))}
          </ul>
        ) : (
          <ActionsButtons
            message={message}
            onClear={clearGame}
            onSymbolClick={handleSymbolClick}
            disabled={Boolean(symbols.user)}
          />
        )}
      </div>
    </Page>
  );
};

export default memo(XoPageComponent);