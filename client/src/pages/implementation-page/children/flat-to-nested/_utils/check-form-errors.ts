import {
  FLAT_ITEM_ID,
  FLAT_ITEM_NAME,
  FLAT_ITEM_PARENT,
  DEFAULT_ERROR,
  INITIAL_ERRORS,
  INITIAL_VALUES,
} from '../constants';
import { FlatItemData } from '../types';

type Errors = Partial<typeof INITIAL_ERRORS>;

function checkIsEmptyValue(value: string): boolean {
  return !value;
}

function getIdErrorMessage(value: string, items: Array<FlatItemData>): string {
  if (checkIsEmptyValue(value)) {
    return DEFAULT_ERROR;
  }

  if (items.some((item) => item.id === +value)) {
    return '"id" should be uniq';
  }

  return '';
}

function getIdFieldError(value: string, items: Array<FlatItemData>): Errors {
  const errorMessage = getIdErrorMessage(value, items);

  if (errorMessage) {
    return { [FLAT_ITEM_ID]: errorMessage };
  }

  return {};
}

function getNameFieldError(value: string): Errors {
  if (checkIsEmptyValue(value)) {
    return { [FLAT_ITEM_NAME]: DEFAULT_ERROR };
  }

  return {};
}

function getParentIdFieldError(
  value: string,
  items: Array<FlatItemData>,
): Errors {
  const hasRootParent = items.some((item) => !item.parentId);

  if (checkIsEmptyValue(value) && hasRootParent) {
    return { [FLAT_ITEM_PARENT]: 'Root parent is already' };
  }

  return {};
}

type Keys =
  | typeof FLAT_ITEM_ID
  | typeof FLAT_ITEM_NAME
  | typeof FLAT_ITEM_PARENT;
type Validation = (value: string, items: Array<FlatItemData>) => Errors;

const VALIDATIONS_MAP: Record<Keys, Validation> = {
  [FLAT_ITEM_ID]: getIdFieldError,
  [FLAT_ITEM_NAME]: getNameFieldError,
  [FLAT_ITEM_PARENT]: getParentIdFieldError,
};

export function checkFormErrors(
  values: typeof INITIAL_VALUES,
  flatItems: Array<FlatItemData>,
): Errors {
  const keyValueCollection = Object.entries(values) as Array<[Keys, string]>;

  return keyValueCollection.reduce((acc: Errors, [key, value]) => {
    const validation: Validation = VALIDATIONS_MAP[key as Keys];
    const fieldError = validation(value, flatItems);

    return {
      ...acc,
      ...fieldError,
    };
  }, {});
}
