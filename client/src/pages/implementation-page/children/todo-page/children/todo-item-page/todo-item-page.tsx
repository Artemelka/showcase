import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem
} from '@artemelka/redux-store-injector';
import { AppStore } from '@/app';
import {
  TODO_ITEM_REDUCER_INJECT_CONFIG,
  GET_TODO_ITEM_SAGA_CONFIG,
  getTodoItemActionSaga,
  todoItemSelector,
  todoItemIsLoadingSelector,
} from './redux';
import { TodoItemPageView } from './_components';

const asyncReducers: Array<AsyncReducerItem> = [TODO_ITEM_REDUCER_INJECT_CONFIG];
const asyncSagas: Array<AsyncSagaItem> = [GET_TODO_ITEM_SAGA_CONFIG];

const mapStateToProps = (state: AppStore) => ({
  item: todoItemSelector(state),
  isLoading: todoItemIsLoadingSelector(state),
});

const mapDispatchToProps = {
  goBack,
  getItem: getTodoItemActionSaga
};

type MapStateToProps = ReturnType<typeof mapStateToProps>;

type MapDispatchToProps = typeof mapDispatchToProps;

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
        />
      </StoreInjectorConsumer>
    );
  }
}

const mergeProps = (stateProps: MapStateToProps, dispatchProps: MapDispatchToProps) => ({
  ...stateProps,
  ...dispatchProps,
});

export const TodoItemPage = connect(mapStateToProps, mapDispatchToProps, mergeProps)(TodoItemPageContainer);
