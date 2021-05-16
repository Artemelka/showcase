import React, { memo } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import {
  AsyncReducerItem,
  AsyncSagaItem,
  StoreInjectorConsumer,
} from '@artemelka/redux-store-injector';
import { Layout } from '@artemelka/react-components';
import { CHAT_PAGE_CHILDREN_PATH } from './constants';
import { ChatUsersList } from './_components';
import { CHAT_REDUCER_INJECT_CONFIG, CHAT_SEND_MESSAGE_INJECT_SAGA_CONFIG } from './redux';
import { CHAT_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

const asyncReducers: Array<AsyncReducerItem> = [CHAT_REDUCER_INJECT_CONFIG];
const asyncSagas: Array<AsyncSagaItem> = [CHAT_SEND_MESSAGE_INJECT_SAGA_CONFIG];

const ChatPage = memo(() => {
  return (
    <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas} withEjectReducers>
      <Layout
        asideElement={<ChatUsersList/>}
        disabledScroll
      >
        <Switch>
          {CHAT_CHILDREN_PAGE_ROUTE_CONFIG.map(props => (
            <Route key={props.path} {...props} />
          ))}
          <Redirect to={`${CHAT_PAGE_CHILDREN_PATH.LOGIN}`}/>
        </Switch>
      </Layout>
    </StoreInjectorConsumer>
  );
});

export default ChatPage;