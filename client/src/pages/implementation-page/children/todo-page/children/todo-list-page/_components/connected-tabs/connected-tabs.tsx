import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ButtonGroup,
  ButtonMouseEvent,
} from '@artemelka/react-components';
import {
  getListActionSaga,
  resetPagination,
  setCategory,
  todoActiveCategorySelector,
  Action,
  AppStoreWithTodo,
  BaseAction,
} from '../../redux';
import { BUTTONS } from '../../../../constants';

type MapStateToProps = {
  activeCategory: string;
}
type MapDispatchToProps = {
  getList: () => Action<string>;
  resetPagination: () => Action<string>;
  setCategory: (category: string) => BaseAction<string>;
}
type ConnectedTabsProps = MapStateToProps & MapDispatchToProps & {};

export class ConnectedTabsContainer extends Component<ConnectedTabsProps> {
  handleClick = ({ id }: ButtonMouseEvent) => {
    this.props.setCategory(`${id}`);
    this.props.resetPagination();
    this.props.getList();
  };

  render() {
    return (
      <ButtonGroup
        buttons={BUTTONS}
        onClick={this.handleClick}
        size="small"
        themeColor="primary"
        variant="only-text"
        activeId={this.props.activeCategory}
      />
    );
  }
}

const mapStateToProps = (state: AppStoreWithTodo): MapStateToProps => ({
  activeCategory: todoActiveCategorySelector(state),
});
const mapDispatchToProps: MapDispatchToProps = {
  getList: getListActionSaga,
  resetPagination,
  setCategory,
};

export const ConnectedTabs = connect(mapStateToProps, mapDispatchToProps)(ConnectedTabsContainer);