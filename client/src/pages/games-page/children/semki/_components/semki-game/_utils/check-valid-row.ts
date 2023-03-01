import { ClickParams } from '../_components'
import { Item } from '../types';

export function checkValidRow(item: Item, params: ClickParams, columnsLength: number): boolean {
  const isSameRow = item.rowNumber === params.rowIndex;
  const isSameColumn = item.columnNumber === params.columnIndex;

  const isNextRow = item.rowNumber + 1 === params.rowIndex;
  const isSibling = item.columnNumber === columnsLength - 1 && params.columnIndex === 0;
  const isNextRowSibling = isNextRow && isSibling;

  return isSameRow || isSameColumn || isNextRowSibling;
}