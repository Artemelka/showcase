import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectChangeEvent } from '@artemelka/react-components';
import { AppStore } from '@/app';
import { TodoItemStatus } from '@/api';
import { FilterSelect } from '@/components';
import {
  changeFilter,
  getListActionSaga,
  todoFilterSelector,
} from '../../redux';
import { FILTER_OPTIONS } from '../../../../constants';

const mapStateToProps = (state: AppStore) => ({
  filter: todoFilterSelector(state),
});
const mapDispatchToProps = {
  changeFilter,
  getList: getListActionSaga,
};

type ConnectedFilterProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class ConnectedFilterContainer extends Component<ConnectedFilterProps> {
  handleFilterChange = ({ items }: SelectChangeEvent) => {
    const prepareItems = items.map(({ id, value }) => ({
      id: `${id}`,
      value: value as TodoItemStatus,
    }));

    this.props.changeFilter(prepareItems);
    this.props.getList();
  };

  render() {
    return (
      <FilterSelect
        id="todoStatusFilter"
        isMultiSelect
        label="Filter status"
        name="todo-status-filter"
        onChange={this.handleFilterChange}
        options={FILTER_OPTIONS}
        placeholder="Select value"
        values={this.props.filter}
      />
    );
  }
}

export const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedFilterContainer);
