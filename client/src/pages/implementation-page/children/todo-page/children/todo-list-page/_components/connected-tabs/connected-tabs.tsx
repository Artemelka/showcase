import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, ButtonMouseEvent } from '@artemelka/react-components';
import { AppStore } from '@/app';
import {
  getListActionSaga,
  resetPagination,
  setCategory,
  todoActiveCategorySelector,
} from '../../redux';
import { BUTTONS } from '../../../../constants';

const mapStateToProps = (state: AppStore) => ({
  activeCategory: todoActiveCategorySelector(state),
});

const mapDispatchToProps = {
  getList: getListActionSaga,
  resetPagination,
  setCategory,
};

type ConnectedTabsProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class ConnectedTabsContainer extends Component<ConnectedTabsProps> {
  handleClick = ({ id }: ButtonMouseEvent) => {
    this.props.setCategory(`${id}`);
    this.props.resetPagination();
    this.props.getList();
  };

  render() {
    return (
      <ButtonGroup
        activeId={this.props.activeCategory}
        buttons={BUTTONS}
        onClick={this.handleClick}
        size="small"
        themeColor="primary"
        variant="only-text"
      />
    );
  }
}

export const ConnectedTabs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedTabsContainer);
