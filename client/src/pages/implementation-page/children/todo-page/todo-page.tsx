import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem
} from '@artemelka/redux-store-injector';
import { Page } from '../../../../components';
import {
  TODO_REDUCER_INJECT_CONFIG,
  GET_LIST_SAGA_INJECT_CONFIG,
  getListActionSaga,
  Action,
} from './redux';
import { TodoListPage } from './_components';

const asyncReducers: Array<AsyncReducerItem> = [
  TODO_REDUCER_INJECT_CONFIG,
];
const asyncSagas: Array<AsyncSagaItem> = [
  GET_LIST_SAGA_INJECT_CONFIG,
];

type MapDispatchToProps = {
  getList: () => Action<string>;
}
type TodoPageProps = MapDispatchToProps & {};

export class TodoPageContainer extends Component<TodoPageProps>{
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas} withEjectReducers>
        <Page title="Todo">
          <TodoListPage/>
        </Page>
      </StoreInjectorConsumer>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps = {
  getList: getListActionSaga,
};

export const TodoPage = connect(null, mapDispatchToProps)(TodoPageContainer);