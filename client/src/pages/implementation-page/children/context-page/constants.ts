import { FormItem, InputsState } from './types';

export const FORM_ITEMS: Array<FormItem> = [
  {
    id: 'userName',
    name: 'userName',
    placeholder: 'User name',
  },
  {
    id: 'password',
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
  {
    id: 'repeatPassword',
    name: 'repeatPassword',
    placeholder: 'Repeat password',
    type: 'password',
  },
];

export const INITIAL_INPUTS_STATE: InputsState = FORM_ITEMS.reduce(
  (res, { name }) => {
    return { ...res, [name]: '' };
  },
  {} as InputsState,
);

export const INITIAL_ERRORS_STATE = {};
