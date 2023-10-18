import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem,
} from '@artemelka/redux-store-injector';
import {
  TODO_ITEM_REDUCER_INJECT_CONFIG,
  GET_TODO_ITEM_SAGA_CONFIG,
  getTodoItemActionSaga,
  todoItemSelector,
  todoItemIsLoadingSelector,
  TodoItemStore,
} from './redux';
import { TodoItemPageView } from './_components';

const asyncReducers: Array<AsyncReducerItem> = [
  TODO_ITEM_REDUCER_INJECT_CONFIG,
];
const asyncSagas: Array<AsyncSagaItem> = [GET_TODO_ITEM_SAGA_CONFIG];

const mapStateToProps = (state: TodoItemStore) => ({
  item: todoItemSelector(state),
  isLoading: todoItemIsLoadingSelector(state),
});

const mapDispatchToProps = {
  goBack,
  getItem: getTodoItemActionSaga,
};

type MapStateToProps = ReturnType<typeof mapStateToProps>;

type MapDispatchToProps = typeof mapDispatchToProps;

type TodoItemPageProps = MapStateToProps & MapDispatchToProps;

export class TodoItemPageContainer extends Component<TodoItemPageProps, never> {
  componentDidMount() {
    this.props.getItem();
  }

  handleGoBackClick = () => {
    this.props.goBack();
  };

  handleTitleChange = () => {
    // console.log('=== new title ===', title);
  };

  render() {
    return (
      <StoreInjectorConsumer
        asyncReducers={asyncReducers}
        asyncSagas={asyncSagas}
        withEjectReducers
      >
        <TodoItemPageView
          id={this.props.item.id}
          isLoading={this.props.isLoading}
          onGoBackClick={this.handleGoBackClick}
          onTitleChange={this.handleTitleChange}
          status={this.props.item.status}
          title={this.props.item.title}
        />
      </StoreInjectorConsumer>
    );
  }
}

const mergeProps = (
  stateProps: MapStateToProps,
  dispatchProps: MapDispatchToProps,
) => ({
  ...stateProps,
  ...dispatchProps,
});

export const TodoItemPage = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(TodoItemPageContainer);
