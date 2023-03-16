import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isPlayerStepSelector } from '../../redux';
import { DurakGameStore } from '../../types';
import { Button } from '@artemelka/react-components';

type StateProps = {
  isPlayerStep: boolean;
};

export class TableActionsComponent extends Component<StateProps> {
  handleGetClick = () => {};

  render() {
    return (
      <Button
        onClick={this.handleGetClick}
        themeColor="error"
        value="GET"
        isFullWidth
        disabled={!this.props.isPlayerStep}
      />
    );
  }
}

const mapStateToProps = (state: DurakGameStore): StateProps => ({
  isPlayerStep: isPlayerStepSelector(state),
});

export const TableActions = connect(mapStateToProps)(TableActionsComponent);