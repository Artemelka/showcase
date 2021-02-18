import { configureStore, Middleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger'; // tslint:disable-line:no-implicit-dependencies
import { createInjectorEnhancer, AppStore } from '@artemelka/redux-store-injector';
import { appHistory } from './app-history';
import { createReducer } from './app-reducer';

const sagaMiddleware = createSagaMiddleware();
const runSaga = sagaMiddleware.run;

const middlewares: Array<Middleware> = [
  routerMiddleware(appHistory),
  sagaMiddleware
];

// if (process.env && process.env.MODE === 'development') {
//   middlewares.push(logger);
// }

const enhancers = [createInjectorEnhancer({ createReducer, runSaga })];

// @ts-ignore
export const appStore: AppStore = configureStore({
  reducer: createReducer(),
  enhancers,
  middleware: middlewares
});