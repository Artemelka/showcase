import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StoreInjectorConsumer,
  AsyncReducerItem,
  AsyncSagaItem
} from '@artemelka/redux-store-injector';
import { Label } from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../../../utils';
import {
  Action,
  getListActionSaga,
  TODO_REDUCER_INJECT_CONFIG,
  GET_LIST_SAGA_INJECT_CONFIG
} from './redux';
import { ConnectedFilter } from './_components/connected-filter';
import { ConnectedRowSelect } from './_components/connected-row-select';
import { ConnectedTable } from './_components/connected-table';
import { ConnectedTabs } from './_components/connected-tabs';
import style from './todo-list-page.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Todo-list-page';

const asyncReducers: Array<AsyncReducerItem> = [
  TODO_REDUCER_INJECT_CONFIG,
];
const asyncSagas: Array<AsyncSagaItem> = [
  GET_LIST_SAGA_INJECT_CONFIG,
];

type MapDispatchToProps = {
  getList: () => Action<string>;
}
type TodoListPageProps = MapDispatchToProps;

export class TodoListPageContainer extends Component<TodoListPageProps> {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <StoreInjectorConsumer asyncReducers={asyncReducers} asyncSagas={asyncSagas} withEjectReducers>
        <div className={cn(CLASS_NAME)}>
          <div className={cn(`${CLASS_NAME}__actions`)}>
            <div className={cn(`${CLASS_NAME}__tabs`)}>
              <div className={cn(`${CLASS_NAME}__tabs-label`)}>
                <Label size="small">Filter category</Label>
              </div>
              <ConnectedTabs/>
            </div>
            <div className={cn(`${CLASS_NAME}__rows-select`)}>
              <ConnectedRowSelect/>
            </div>
            <div className={cn(`${CLASS_NAME}__filter`)}>
              <ConnectedFilter/>
            </div>
          </div>
          <div className={cn(`${CLASS_NAME}__table`)}>
            <ConnectedTable />
          </div>
        </div>
      </StoreInjectorConsumer>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps = {
  getList: getListActionSaga,
};

export const TodoListPage = connect(null, mapDispatchToProps)(TodoListPageContainer);