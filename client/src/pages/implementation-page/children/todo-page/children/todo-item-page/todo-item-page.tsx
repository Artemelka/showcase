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

  handleTitleChange = (title: string) => {
    console.log('=== new title ===', title);
  }

  render() {
    return (
      <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas} withEjectReducers>
        <TodoItemPageView
          onGoBackClick={this.handleGoBackClick}
          onTitleChange={this.handleTitleChange}
          title={this.props.item.title}
          isLoading={this.props.isLoading}
          status={this.props.item.status}
          id={this.props.item.id}
          category={this.props.item.category}
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

const mergeProps = (stateProps: MapStateToProps, dispatchProps: MapDispatchToProps) => ({
  ...stateProps,
  ...dispatchProps,
});

export const TodoItemPage = connect(mapStateToProps, mapDispatchToProps, mergeProps)(TodoItemPageContainer);
