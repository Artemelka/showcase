import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_STOP, Actions } from './actions';
import { State } from './types';

export const initialState: State = {
  isLoading: false,
  userName: 'Guest',
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        userName: action.payload,
        isLoading: false,
      };

    case SIGNUP_STOP:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
