import { FormEvent } from 'react';
import { FLAT_ITEM_ID, FLAT_ITEM_NAME, FLAT_ITEM_PARENT, INITIAL_VALUES } from '../constants'

export function getFormValuesFromEvent(event: FormEvent<HTMLFormElement>): typeof INITIAL_VALUES {
  const formData = new FormData(event.currentTarget as HTMLFormElement);
  // @ts-ignore
  const [id, name, parentId] = [...formData.values()];

  return {
    [FLAT_ITEM_ID]: id,
    [FLAT_ITEM_NAME]: name,
    [FLAT_ITEM_PARENT]: parentId
  };
}