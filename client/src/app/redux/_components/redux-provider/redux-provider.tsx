import React, { memo, PropsWithChildren } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { StoreInjectorProvider, AppStore, createInjectorEnhancer } from '@artemelka/redux-store-injector';
// import logger from 'redux-logger'; // tslint:disable-line:no-implicit-dependencies
import { appRouterMiddleware } from '@/app/router';
import { createReducer } from '../../create-reducer';

const sagaMiddleware = createSagaMiddleware();

const appStore = configureStore({
  reducer: createReducer(),
  enhancers: [createInjectorEnhancer({
    createReducer,
    runSaga: sagaMiddleware.run,
  })],
  middleware: [
    appRouterMiddleware,
    sagaMiddleware,
    // process.env && process.env.MODE === 'development' && logger : undefined,
  ],
});

type ReduxProviderProps = PropsWithChildren<{}>;

export const ReduxProviderComponent = ({ children }: ReduxProviderProps) => {
  return (
    <Provider store={appStore}>
      <StoreInjectorProvider store={appStore as AppStore}>
        {children}
      </StoreInjectorProvider>
    </Provider>
  );
};

export const ReduxProvider = memo(ReduxProviderComponent);