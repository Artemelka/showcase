import React, { memo, useEffect } from 'react';
import {
  AsyncReducerItem,
  AsyncSagaItem,
  StoreInjectorConsumer,
} from '@artemelka/redux-store-injector';
import { Layout } from '@artemelka/react-components';
import { AppRoute, AppRouterSwitch } from '@/app/router';
import { wsService } from '@/services/socket';
import { CHAT_PAGE_CHILDREN_PATH } from './constants';
import { ChatUsersList } from './_components';
import {
  CHAT_REDUCER_INJECT_CONFIG,
  CHAT_SEND_MESSAGE_INJECT_SAGA_CONFIG,
} from './redux';
import { CHAT_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

const asyncReducers: Array<AsyncReducerItem> = [CHAT_REDUCER_INJECT_CONFIG];
const asyncSagas: Array<AsyncSagaItem> = [CHAT_SEND_MESSAGE_INJECT_SAGA_CONFIG];

const ChatPage = () => {
  useEffect(() => {
    wsService.connect();

    return () => {
      wsService.disconnect();
    };
  }, []);

  return (
    <StoreInjectorConsumer
      asyncReducers={asyncReducers}
      asyncSagas={asyncSagas}
      withEjectReducers
    >
      <Layout asideElement={<ChatUsersList />} disabledScroll>
        <AppRouterSwitch
          pathToRedirect={CHAT_PAGE_CHILDREN_PATH.LOGIN}
          withNotFoundPage
        >
          {CHAT_CHILDREN_PAGE_ROUTE_CONFIG.map((params) => (
            <AppRoute
              key={params.path}
              accessRedirectPath={params.accessRedirectPath}
              accessTypes={params.accessTypes}
              component={params.component}
              exact={params.exact}
              path={params.path}
            />
          ))}
        </AppRouterSwitch>
      </Layout>
    </StoreInjectorConsumer>
  );
};

export default memo(ChatPage);
