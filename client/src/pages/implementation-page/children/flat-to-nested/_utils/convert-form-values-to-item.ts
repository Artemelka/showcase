import {
  INITIAL_VALUES,
  FLAT_ITEM_ID,
  FLAT_ITEM_NAME,
  FLAT_ITEM_PARENT,
} from '../constants';
import { FlatItemData } from '../types';

export function convertFormValuesToItem(values: typeof INITIAL_VALUES): FlatItemData {
  const parentId = values[FLAT_ITEM_PARENT]
    ? { parentId: Number(values[FLAT_ITEM_PARENT]) }
    : {};

  return {
    id: +values[FLAT_ITEM_ID],
    name: values[FLAT_ITEM_NAME],
    ...parentId,
  };
}