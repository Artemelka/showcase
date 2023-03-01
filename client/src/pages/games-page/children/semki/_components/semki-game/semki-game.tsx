import React, { Component, memo } from 'react';

import { fastClassNames } from '@/utils';
import { ColumnButton, ClickParams } from './_components';
import { checkIsValidDigit, checkIncludedColumn, checkValidRow } from './_utils';
import { Collection } from './types';
import styles from "./semki-game.module.scss";

const cn = fastClassNames(styles);
const CLASS_NAME = 'Semki-game';

const ROWS = [...new Array(10)].map((_, index) => index);
const COLUMNS = [...new Array(10)].map((_, index) => index);
const EMPTY_DIGIT_VALUE = NaN;

type State = {
  row: number;
  column: number;
  digit: number;
  hideCollection: Collection;
};

export class SemkiGameComponent extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      row: EMPTY_DIGIT_VALUE,
      column: EMPTY_DIGIT_VALUE,
      digit: EMPTY_DIGIT_VALUE,
      hideCollection: [],
    }
  }

  private setDigitParams = ({ columnIndex, digit, rowIndex }: ClickParams) => {
    this.setState({
      row: rowIndex,
      column: columnIndex,
      digit,
    })
  }

  private clearDigitParams = () => {
    this.setState({
      row: EMPTY_DIGIT_VALUE,
      column: EMPTY_DIGIT_VALUE,
      digit: EMPTY_DIGIT_VALUE,
    })
  }

  private hideColumns = ({ columnIndex, rowIndex }: ClickParams) => {
    const secondItem = { row: rowIndex, column: columnIndex };

    this.setState(({ column, hideCollection, row }) => ({
      hideCollection: [...hideCollection, { row, column }, secondItem]
    }));
  }

  private handleColumnClick = (params: ClickParams) => {
    const { column, digit, row } = this.state;

    if (!digit) {
      this.setDigitParams(params);
      return;
    }

    const isValidSecondDigit = checkIsValidDigit(digit, params.digit);
    const isValidPosition = checkValidRow(
      { rowNumber: row, columnNumber: column},
      params,
      COLUMNS.length
    );

    if (isValidSecondDigit && isValidPosition) {
      this.hideColumns(params);
      this.clearDigitParams();
      return;
    }

    this.clearDigitParams();
  }

  public render() {
    const { column, hideCollection, row } = this.state;

    return (
      <div className={cn(CLASS_NAME)}>
        {ROWS.map((rowNumber) => (
          <div className={cn(`${CLASS_NAME}__row`)} key={`${rowNumber}`}>
            {COLUMNS.map((columnNumber) => (
              <div className={cn(`${CLASS_NAME}__col`)} key={`${columnNumber}`}>
                <ColumnButton
                  columnIndex={columnNumber}
                  rowIndex={rowNumber}
                  onClick={this.handleColumnClick}
                  isHideContent={checkIncludedColumn(hideCollection, { columnNumber, rowNumber })}
                  disabled={column === columnNumber && row === rowNumber}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export const SemkiGame = memo(SemkiGameComponent);