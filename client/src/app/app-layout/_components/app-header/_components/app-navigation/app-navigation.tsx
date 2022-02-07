import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { push, Push } from 'connected-react-router';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';
import { locationPathNameSelector, AppStore } from '../../../../../../app';
import { AppRouteConfig } from '../../../../../../pages/types';
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
  items: Array<AppRouteConfig>;
};
type State = {
  activeIndex: number;
}

const checkActiveChildren = (children: Array<AppRouteConfig>, pathname: string): boolean => {
  return Boolean(children.findIndex(child => {
    if (child.children) {
      return checkActiveChildren(child.children, pathname);
    }

    return child.path === pathname
  }) + 1)
};

const findActiveIndex = (pathname: string, items: Array<AppRouteConfig>): number => {
  return items.reduce((res, item, index) => {
    if (pathname === item.path) {
      return index;
    }

    if (item.children && checkActiveChildren(item.children, pathname)) {
      return index;

    }

    return res;
  }, 0);
}

export class AppNavigationContainer extends Component<AppNavigationProps, State> {
  static getDerivedStateFromProps(nextProps: AppNavigationProps, prevState: State) {
    const nextIndex = findActiveIndex(nextProps.pathname, nextProps.items);

    if (nextIndex !== prevState.activeIndex) {
      return { activeIndex: nextIndex };
    }

    return null;
  }

  constructor(props: AppNavigationProps) {
    super(props);

    this.state = {
      activeIndex: findActiveIndex(props.pathname, props.items),
    }
  }

  handleClick = ({ href }: AnchorMouseEvent) => {
    this.props.push(href);
  };

  render() {
    return (
      <nav className={cn(CLASS_NAME)}>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {this.props.items.map((item, index) => (
            <li className={cn(`${CLASS_NAME}__item`)} key={item.path}>
              <Anchor
                active={this.state.activeIndex === index}
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