import React, { Component } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem
} from '@artemelka/redux-store-injector';
import { Layout } from '@artemelka/react-components';
import { AppRouteConfig } from '@/pages/types';
import { AsyncRoutes } from '@/app/router/_components';
import { PageLoader } from '@/components';
import { AppHeader } from './_components';
import {
  AUTH_REDUCER_INJECT_CONFIG,
  AUTH_INIT_INJECT_SAGA_CONFIG,
  AUTH_LOGIN_INJECT_SAGA_CONFIG,
  AUTH_LOGOUT_INJECT_SAGA_CONFIG,
  authInitActionSaga,
  authIsLoadingSelector,
  AppStoreWithAuth,
} from '../../redux';

const asyncReducers: Array<AsyncReducerItem> = [AUTH_REDUCER_INJECT_CONFIG];
const asyncSagas: Array<AsyncSagaItem> = [
  AUTH_INIT_INJECT_SAGA_CONFIG,
  AUTH_LOGIN_INJECT_SAGA_CONFIG,
  AUTH_LOGOUT_INJECT_SAGA_CONFIG,
];

type MapDispatchToProps = {
  authInit: () => Action;
};

type MapStateToProps = {
  isLoading: boolean;
}

type AppLayoutProps = MapStateToProps & MapDispatchToProps & {
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

const mapStateToProps = (state: AppStoreWithAuth): MapStateToProps => ({
  isLoading: authIsLoadingSelector(state)
});

const mapDispatchToProps: MapDispatchToProps = {
  authInit: authInitActionSaga
};

export const AppLayout = connect(mapStateToProps, mapDispatchToProps)(AppLayoutComponent);