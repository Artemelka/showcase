import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectChangeEvent } from '@artemelka/react-components';
import { FilterSelect } from '@/components';
import {
  getListActionSaga,
  setLimit,
  todoPaginationLimitSelector,
  TodoStore,
} from '../../redux';
import { ROWS_OPTIONS } from '../../../../constants';

const mapStateToProps = (state: TodoStore) => ({
  limit: todoPaginationLimitSelector(state),
});
const mapDispatchToProps = {
  getList: getListActionSaga,
  setLimit,
};

type ConnectedRowSelectProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

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

export const ConnectedRowSelect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedRowSelectContainer);
