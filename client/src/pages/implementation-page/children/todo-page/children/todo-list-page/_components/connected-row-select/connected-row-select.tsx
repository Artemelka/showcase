import React, {Component} from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { DropdownItemParams, SelectChangeEvent } from '@artemelka/react-components';
import { BaseAction } from '@/app';
import { FilterSelect } from '@/components';
import {
  getListActionSaga,
  setLimit,
  todoPaginationLimitSelector,
  AppStoreWithTodo,
} from '../../redux';
import { ROWS_OPTIONS } from '../../../../constants';

type MapStateToProps = {
  limit: Array<DropdownItemParams>;
}
type MapDispatchToProps = {
  getList: () => Action<string>;
  setLimit: (limit: number) => BaseAction<number>;
}
type ConnectedRowSelectProps = MapStateToProps & MapDispatchToProps & {};

export class ConnectedRowSelectContainer extends Component<ConnectedRowSelectProps> {
  handleRowCountChange = ({ items }: SelectChangeEvent) => {
    this.props.setLimit(Number(items[0].value));
    this.props.getList();
  };

  render() {
    return (
      <FilterSelect
        id="todoRowsSelect"
        label="Rows on page"
        name="todo-rows-select"
        onChange={this.handleRowCountChange}
        options={ROWS_OPTIONS}
        placeholder="Select value"
        values={this.props.limit}
      />
    );
  }
}

const mapStateToProps = (state: AppStoreWithTodo): MapStateToProps => ({
  limit: todoPaginationLimitSelector(state),
});
const mapDispatchToProps: MapDispatchToProps = {
  getList: getListActionSaga,
  setLimit,
};

export const ConnectedRowSelect = connect(mapStateToProps, mapDispatchToProps)(ConnectedRowSelectContainer);