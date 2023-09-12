import React, {memo, useCallback, useEffect, useState} from 'react';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { CellButton } from './_components';
import styles from './xo-page.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Xo-page';

const SYMBOLS = ['X', '0'];
const COLUMN_INDEX = [0, 1, 2];
const DIAG = [
  [0, 1, 2],
  [2, 1, 0],
];
const INITIAL_STATE = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
const INITIAL_SYMBOLS = { ai: '', user: '' };


function checkRows(rows: Array<Array<string>>, symbol: string): boolean {
  return rows.some(row => row.every(item => Boolean(item) && item === symbol))
}

function getDiagonals(state: Array<Array<string>>): Array<Array<string>> {
  return DIAG.map(diag =>
    diag.map((cellIndex, rowIndex) => state[rowIndex][cellIndex])
  );
}

function getColumn(state: Array<Array<string>>): Array<Array<string>> {
  return COLUMN_INDEX.map(columnIndex => state.map(row => row[columnIndex]));
}

function checkWinner(state: Array<Array<string>>, symbol: string): boolean {
  const columns = getColumn(state);
  const diagonals = getDiagonals(state);

  const inRow = checkRows(state, symbol);
  const inColumn = checkRows(columns, symbol);
  const inDiag = checkRows(diagonals, symbol);

  return inRow || inColumn || inDiag;
}

type UpdatedStateConfig = {symbol: string, rowIndex: number, cellIndex: number};

function getUpdatedState(
  prevState: Array<Array<string>>,
  { cellIndex, rowIndex, symbol }: UpdatedStateConfig
) {
  const tempState = prevState.map((row) => [...row]);

  tempState[rowIndex][cellIndex] = symbol;

  return tempState;
}

export const XoPageComponent = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [symbols, setSymbols] = useState(INITIAL_SYMBOLS);
  const [isUserStep, setIsUserStep] = useState(true);



  const clearGame = useCallback(() => {
    setState(INITIAL_STATE);
    setIsUserStep(true);
    setSymbols(INITIAL_SYMBOLS);
  }, []);

  useEffect(() => {
    if (checkWinner(state, symbols.user)) {
      alert(`WINNER: ${symbols.user}`);
      clearGame();
      return;
    }

    if (checkWinner(state, symbols.ai)) {
      alert(`WINNER: ${symbols.ai}`);
      clearGame();
      return;
    }

    if (!isUserStep) {
      const config = {
        rowIndex: Number(prompt('enter row')),
        cellIndex: Number(prompt('enter cell')),
        symbol: symbols.ai,
      }

      setState((prevState) => getUpdatedState(prevState, config));
      setIsUserStep(true);
    }
  }, [clearGame, isUserStep, state, symbols]);

  const handleClick = useCallback((rowIndex: number, cellIndex: number) => {
    const config = {
      rowIndex,
      cellIndex,
      symbol: symbols.user,
    }

    setState((prevState) => getUpdatedState(prevState, config));
    setIsUserStep(false);
  }, [symbols]);

  const handleSymbolClick = useCallback((_ri, _ci, symbol: string) => {
    setSymbols({
      ai: SYMBOLS.filter(item => item !== symbol)[0],
      user: symbol
    });
  }, []);

  return (
    <Page headTitle="XO" title="xo game">
      <div className={cn(CLASS_NAME)}>
        <ul className={cn(`${CLASS_NAME}__container`)}>
          {state.map((row, rowIndex) => (
            row.map((value, cellIndex) => (
              <li className={cn(`${CLASS_NAME}__cell`)} key={`${rowIndex}${cellIndex}`}>
                <CellButton
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  onClick={handleClick}
                  value={value}
                  disabled={Boolean(value) || !Boolean(symbols.user)}
                />
              </li>
            ))
          ))}
        </ul>
        {!Boolean(symbols.user) && (
          <div className={cn(`${CLASS_NAME}__actions`)}>
            {SYMBOLS.map((symbol, index) => (
              <li className={cn(`${CLASS_NAME}__cell`)} key={`${index}`}>
                <CellButton
                  rowIndex={index}
                  cellIndex={index}
                  onClick={handleSymbolClick}
                  value={symbol}
                  disabled={Boolean(symbols.user)}
                />
              </li>
            ))}
          </div>
        )}
      </div>
    </Page>
  );
};

export default memo(XoPageComponent);