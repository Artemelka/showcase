import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Overlay, WindowLoader } from '@artemelka/react-components';
import { TodoItem } from '@/api';
import { Pagination, Table } from '@/components';
import { fastClassNames } from '@/utils';
import {
  todoIsLoadingSelector,
  todoListSelector,
  todoPaginationLimitSelector,
  todoPaginationOffsetSelector,
  todoPaginationTotalSelector,
  setPagination,
  getListActionSaga,
  TodoStore,
} from '../../redux';
import { TODO_CHILDREN_PATH } from '../../../../constants';
import style from './connected-table.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Connected-table';

const mapStateToProps = (state: TodoStore) => ({
  isLoading: todoIsLoadingSelector(state),
  limit: todoPaginationLimitSelector(state),
  list: todoListSelector(state),
  total: todoPaginationTotalSelector(state),
  offset: todoPaginationOffsetSelector(state),
});

const mapDispatchToProps = {
  push,
  setPagination,
  getList: getListActionSaga,
};

type ConnectedTableProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class ConnectedTableComponent extends Component<
  ConnectedTableProps,
  never
> {
  handlePaginationChange = (offset: number) => {
    const { getList, limit, total } = this.props;

    this.props.setPagination({
      limit: Number(limit[0].value),
      offset,
      total,
    });

    getList();
  };

  handleRowClick = (item: TodoItem) => {
    this.props.push(`${TODO_CHILDREN_PATH.ITEM}?id=${item.id}`);
  };

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__content`)}>
          {this.props.isLoading ? (
            <Overlay inContainer>
              <WindowLoader />
            </Overlay>
          ) : (
            <Table items={this.props.list} onRowClick={this.handleRowClick} />
          )}
        </div>
        <div className={cn(`${CLASS_NAME}__footer`)}>
          <Pagination
            limit={Number(this.props.limit[0].value)}
            offset={this.props.offset}
            onChange={this.handlePaginationChange}
            total={this.props.total}
          />
        </div>
      </div>
    );
  }
}

export const ConnectedTable = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedTableComponent);
