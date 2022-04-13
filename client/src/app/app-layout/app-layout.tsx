import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem
} from '@artemelka/redux-store-injector';
import { Layout } from '@artemelka/react-components';
import { AppStore } from '@/app';
import { AsyncRoutes } from '@/app/router';
import { PageLoader } from '@/components';
import { AppRouteConfig } from '@/pages/types';
import {
  AUTH_REDUCER_INJECT_CONFIG,
  AUTH_INIT_INJECT_SAGA_CONFIG,
  AUTH_LOGIN_INJECT_SAGA_CONFIG,
  AUTH_LOGOUT_INJECT_SAGA_CONFIG,
  authInitActionSaga,
  authIsLoadingSelector,
} from '@/redux';
import { AppHeader } from './_components';

const asyncReducers: Array<AsyncReducerItem> = [AUTH_REDUCER_INJECT_CONFIG];
const asyncSagas: Array<AsyncSagaItem> = [
  AUTH_INIT_INJECT_SAGA_CONFIG,
  AUTH_LOGIN_INJECT_SAGA_CONFIG,
  AUTH_LOGOUT_INJECT_SAGA_CONFIG,
];

const mapDispatchToProps = {
  authInit: authInitActionSaga
};

const mapStateToProps = (state: AppStore) => ({
  isLoading: authIsLoadingSelector(state)
});

type AppLayoutProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
  routesConfig: Array<AppRouteConfig>;
};

export class AppLayoutComponent extends Component<AppLayoutProps> {
  componentDidMount() {
    this.props.authInit();
  }

  render() {
    return (
      <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas}>
        {this.props.isLoading
          ? ( <PageLoader/> )
          : (
            <Layout
              disabledScroll
              headerElement={<AppHeader/>}
            >
              <AsyncRoutes routesConfig={this.props.routesConfig}/>
            </Layout>
          )
        }
      </StoreInjectorConsumer>
    );
  }
}

export const AppLayout = connect(mapStateToProps, mapDispatchToProps)(AppLayoutComponent);