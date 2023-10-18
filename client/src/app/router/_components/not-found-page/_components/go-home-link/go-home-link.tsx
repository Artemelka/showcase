import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';

const mapDispatchToProps = {
  routerPush: push,
};

type GoHomeLinkProps = typeof mapDispatchToProps;

export class GoHomeLinkContainer extends Component<GoHomeLinkProps, never> {
  handleClick = ({ href }: AnchorMouseEvent): void => {
    this.props.routerPush(href);
  };

  render(): JSX.Element {
    return (
      <Anchor href="/" onClick={this.handleClick}>
        Вернуться на главную
      </Anchor>
    );
  }
}

export const GoHomeLink = connect(
  null,
  mapDispatchToProps,
)(GoHomeLinkContainer);
