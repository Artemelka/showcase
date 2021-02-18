import { Action } from 'redux';
import { RouterState } from 'connected-react-router';

export type AppStore = {
  router: RouterState;
};

export type BaseAction<P> = Action<string> & {
  payload: P;
};