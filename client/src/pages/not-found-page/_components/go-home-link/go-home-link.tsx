import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, Push } from 'connected-react-router';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';
import { PAGES_PATH } from '../../../constants';

type GoHomeLinkProps = {
  routerPush: Push;
};

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

export const GoHomeLink = connect(null, {
  routerPush: push
})(GoHomeLinkContainer);
