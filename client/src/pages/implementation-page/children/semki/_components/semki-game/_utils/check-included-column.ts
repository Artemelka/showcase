import { Collection, Item } from '../types';

export function checkIncludedColumn(collection: Collection, { columnNumber, rowNumber}: Item): boolean {
  return Boolean(collection.find(({ column, row }) => column === columnNumber && row === rowNumber));
}