import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { push, Push } from 'connected-react-router';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';
import { locationPathNameSelector, AppStore } from '../../app';
import { AppRouterProps } from '../../pages/types';
import style from './app-navigation.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'App-navigation';

type MapStateToProps = {
  pathname: string;
}
type MapDispatchToProps = {
  push: Push;
};
type AppNavigationProps = MapStateToProps & MapDispatchToProps & {
  items: Array<AppRouterProps>;
};

export class AppNavigationContainer extends Component<AppNavigationProps> {
  checkActiveChildren = (children: Array<AppRouterProps>): boolean => {
    return Boolean(children.findIndex(child => {
      if (child.children) {
        return this.checkActiveChildren(child.children);
      }

      return child.path === this.props.pathname
    }) + 1)
  };

  checkActive = ({ children = [], path }: AppRouterProps): boolean => {
    return this.props.pathname === path || this.checkActiveChildren(children);
  };

  handleClick = ({ href }: AnchorMouseEvent) => {
    this.props.push(href);
  };

  render() {
    return (
      <nav className={cn(CLASS_NAME)}>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {this.props.items.map((item) => (
            <li className={cn(`${CLASS_NAME}__item`)} key={item.path}>
              <Anchor
                active={this.checkActive(item)}
                href={item.path}
                onClick={this.handleClick}
              >
                {item.name}
              </Anchor>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state: AppStore): MapStateToProps => ({
  pathname: locationPathNameSelector(state)
});
const mapDispatchToProps = {
  push
};

export const AppNavigation = connect(mapStateToProps, mapDispatchToProps)(AppNavigationContainer);