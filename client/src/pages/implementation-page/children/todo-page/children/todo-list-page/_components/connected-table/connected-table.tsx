import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { push, Push } from 'connected-react-router';
import { DropdownItemParams, Overlay, WindowLoader } from '@artemelka/react-components';
import { Pagination, Table } from '../../../../../../../../components';
import {
  AppStoreWithTodo,
  todoIsLoadingSelector,
  TodoItem,
  todoListSelector,
  todoPaginationLimitSelector,
  todoPaginationOffsetSelector,
  todoPaginationTotalSelector,
  setPagination,
  BaseAction,
  Action,
  PaginationConfig,
  getListActionSaga,
} from '../../redux';
import { TODO_CHILDREN_PATH } from '../../../../constants';
import style from './connected-table.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Connected-table';

type MapStateToProps = {
  isLoading: boolean;
  limit: Array<DropdownItemParams>;
  list: Array<TodoItem>;
  total: number;
  offset: number;
}
type MapDispatchToProps = {
  push: Push;
  setPagination: (config: PaginationConfig) => BaseAction<PaginationConfig>;
  getList: () => Action<string>;
}

type ConnectedTableProps = MapStateToProps & MapDispatchToProps;

export class ConnectedTableComponent extends Component<ConnectedTableProps> {
  handlePaginationChange = (offset: number) => {
    const { getList, limit, setPagination, total } = this.props;

    setPagination({
      limit: Number(limit[0].value),
      offset,
      total,
    });

    getList();
  }

  handleRowClick = (item: TodoItem) => {
    this.props.push(`${TODO_CHILDREN_PATH.ITEM}?id=${item.id}`)
  }

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__content`)}>
          {this.props.isLoading
            ? (
              <Overlay inContainer>
                <WindowLoader />
              </Overlay>
            ) : (
              <Table
                items={this.props.list}
                onRowClick={this.handleRowClick}
              />
            )
          }
        </div>
        <div className={cn(`${CLASS_NAME}__footer`)}>
          <Pagination
            total={this.props.total}
            limit={Number(this.props.limit[0].value)}
            offset={this.props.offset}
            onChange={this.handlePaginationChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStoreWithTodo): MapStateToProps => ({
  isLoading: todoIsLoadingSelector(state),
  limit: todoPaginationLimitSelector(state),
  list: todoListSelector(state),
  total: todoPaginationTotalSelector(state),
  offset: todoPaginationOffsetSelector(state),
});
const mapDispatchToProps: MapDispatchToProps = {
  push,
  setPagination,
  getList: getListActionSaga,
};

export const ConnectedTable = connect(mapStateToProps, mapDispatchToProps)(ConnectedTableComponent);