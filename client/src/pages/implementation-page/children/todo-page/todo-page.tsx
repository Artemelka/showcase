import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem
} from '@artemelka/redux-store-injector';
import { Page } from '../../../../components';
import { NotFoundPage } from '../../../not-found-page';
import {
  TODO_REDUCER_INJECT_CONFIG,
  GET_LIST_SAGA_INJECT_CONFIG,
  getListActionSaga,
  Action,
} from './redux';
import { TODO_CHILDREN_ROUTE_CONFIG } from './children';

const asyncReducers: Array<AsyncReducerItem> = [
  TODO_REDUCER_INJECT_CONFIG,
];
const asyncSagas: Array<AsyncSagaItem> = [
  GET_LIST_SAGA_INJECT_CONFIG,
];

type MapDispatchToProps = {
  getList: () => Action<string>;
}
type TodoPageProps = MapDispatchToProps;

export class TodoPageContainer extends Component<TodoPageProps>{
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas} withEjectReducers>
        <Page title="Todo">
          <Switch>
            {TODO_CHILDREN_ROUTE_CONFIG.map(({ component, exact, path }) => (
              <Route component={component} path={path} key={path} exact={exact}/>
            ))}
            <Route component={NotFoundPage}/>
          </Switch>
        </Page>
      </StoreInjectorConsumer>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps = {
  getList: getListActionSaga,
};

export const TodoPage = connect(null, mapDispatchToProps)(TodoPageContainer);