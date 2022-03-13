import { createSelector } from 'reselect';
import { RouterState } from 'connected-react-router';
import { Location } from 'history';
import { APP_STORE_KEYS } from '../constants';
import { AppStore } from '@/app';

const routerSelector = (state: AppStore): RouterState => state[APP_STORE_KEYS.ROUTER];

export const routerLocationSelector = createSelector(
  routerSelector,
  (router): Location => router.location
);
export const locationPathNameSelector = createSelector(
  routerLocationSelector,
  (location): string => location.pathname
);