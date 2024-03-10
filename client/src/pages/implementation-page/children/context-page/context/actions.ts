export const SIGNUP_START = 'SIGNUP/START';
export const signUpStart = () =>
  ({
    type: SIGNUP_START,
  } as const);

export const SIGNUP_SUCCESS = 'SIGNUP/SUCCESS';
export const signUpSuccess = (name: string) =>
  ({
    type: SIGNUP_SUCCESS,
    payload: name,
  } as const);

export const SIGNUP_STOP = 'SIGNUP/STOP';
export const signUpStop = () =>
  ({
    type: SIGNUP_STOP,
  } as const);

export type Actions =
  | ReturnType<typeof signUpStart>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpStop>;
