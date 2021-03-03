import React, { Component } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { goBack, GoBack } from 'connected-react-router';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem
} from '@artemelka/redux-store-injector';
import {
  AppStoreWithTodoItem,
  TODO_ITEM_REDUCER_INJECT_CONFIG,
  GET_TODO_ITEM_SAGA_CONFIG,
  getTodoItemActionSaga,
  todoItemSelector,
  todoItemIsLoadingSelector,
  TodoItem,
} from './redux';
import { TodoItemPageView } from './_components';

const asyncReducers: Array<AsyncReducerItem> = [TODO_ITEM_REDUCER_INJECT_CONFIG];
const asyncSagas: Array<AsyncSagaItem> = [GET_TODO_ITEM_SAGA_CONFIG];

type MapStateToProps = {
  item: TodoItem;
  isLoading: boolean
}
type MapDispatchToProps = {
  getItem: () => Action<string>;
  goBack: GoBack,
}

type TodoItemPageProps = MapStateToProps & MapDispatchToProps;

export class TodoItemPageContainer extends Component<TodoItemPageProps> {
  componentDidMount() {
    this.props.getItem();
  }

  handleGoBackClick = () => {
    this.props.goBack();
  }

  render() {
    return (
      <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas} withEjectReducers>
        <TodoItemPageView
          onGoBackClick={this.handleGoBackClick}
          title={this.props.item.title}
          isLoading={this.props.isLoading}
          status={this.props.item.status}
          id={this.props.item.id}
        />
      </StoreInjectorConsumer>
    );
  }
}

const mapStateToProps = (state: AppStoreWithTodoItem): MapStateToProps => ({
  item: todoItemSelector(state),
  isLoading: todoItemIsLoadingSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  goBack,
  getItem: getTodoItemActionSaga
};

export const TodoItemPage = connect(mapStateToProps, mapDispatchToProps)(TodoItemPageContainer);