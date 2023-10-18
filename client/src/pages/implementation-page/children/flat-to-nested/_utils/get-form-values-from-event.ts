import { FormEvent } from 'react';
import {
  FLAT_ITEM_ID,
  FLAT_ITEM_NAME,
  FLAT_ITEM_PARENT,
  INITIAL_VALUES,
} from '../constants';

export function getFormValuesFromEvent(
  event: FormEvent<HTMLFormElement>,
): typeof INITIAL_VALUES {
  const formData = new FormData(event.currentTarget as HTMLFormElement);

  return {
    [FLAT_ITEM_ID]: formData.get('id') as string,
    [FLAT_ITEM_NAME]: formData.get('name') as string,
    [FLAT_ITEM_PARENT]: formData.get('parentId') as string,
  };
}
