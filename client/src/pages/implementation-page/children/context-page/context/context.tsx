import React, {
  FC,
  createContext,
  useContext,
  useReducer,
  JSXElementConstructor,
  Reducer,
} from 'react';
import { reducer, initialState } from './reducer';
import type { State, Action, WithContextProps } from './types';

type ContextValue = [State, (a: any) => void];

export const Context = createContext<ContextValue>([initialState, () => false]);

export const ContextProvider: FC = ({ children }) => (
  <Context.Provider
    value={useReducer<Reducer<State, Action<string>>>(reducer, initialState)}
  >
    {children}
  </Context.Provider>
);

export const useContextState = () => useContext<ContextValue>(Context);

export function withContextState<P>(
  WrappedComponent: JSXElementConstructor<P & WithContextProps>,
): FC<P> {
  return function WithContextState(props: P) {
    const [state, dispatch] = useContextState();

    /* eslint-disable react/jsx-props-no-spreading */
    return <WrappedComponent {...props} dispatch={dispatch} state={state} />;
  };
}
