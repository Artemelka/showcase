import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';
import { PAGES_PATH } from '../../../constants';

const mapDispatchToProps = {
  routerPush: push
};

type GoHomeLinkProps = typeof mapDispatchToProps;

export class GoHomeLinkContainer extends Component<GoHomeLinkProps> {
  handleClick = ({ href }: AnchorMouseEvent) => {
    this.props.routerPush(href);
  };

  render() {
    return (
      <Anchor
        href={PAGES_PATH.HOME}
        onClick={this.handleClick}
      >
        Вернуться на главную
      </Anchor>
    );
  }
}

export const GoHomeLink = connect(null, mapDispatchToProps)(GoHomeLinkContainer);
