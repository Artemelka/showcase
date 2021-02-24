import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectChangeEvent } from '@artemelka/react-components';
import { FilterSelect } from '../../../../../../../../components';
import {
  changeFilter,
  getListActionSaga,
  todoFilterSelector,
  Action,
  AppStoreWithTodo,
  FilterState,
  ChangeFilterAction,
  TodoItemStatus,
} from '../../../../redux';
import { FILTER_OPTIONS } from '../../../../constants';

type MapStateToProps = {
  filter: Array<FilterState>;
}
type MapDispatchToProps = {
  changeFilter: (item: Array<FilterState>) => ChangeFilterAction;
  getList: () => Action<string>;
}
type ConnectedFilterProps = MapStateToProps & MapDispatchToProps & {};

export class ConnectedFilterContainer extends Component<ConnectedFilterProps> {
  handleFilterChange = ({ items }: SelectChangeEvent) => {
    const prepareItems= items.map(({ id, value }) => ({
      id: `${id}`,
      value: (value as TodoItemStatus)
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

const mapStateToProps = (state: AppStoreWithTodo): MapStateToProps => ({
  filter: todoFilterSelector(state),
});
const mapDispatchToProps: MapDispatchToProps = {
  changeFilter,
  getList: getListActionSaga,
};

export const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(ConnectedFilterContainer);