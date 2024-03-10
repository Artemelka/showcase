import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';
import { locationPathNameSelector } from '@/app/router';
import type { AppStore, AppRouteConfig } from '@/types';
import { authUserRoleSelector } from '@/redux';
import { fastClassNames } from '@/utils';
import { findActiveRoute, getRoutes } from './utils';
import style from './app-navigation.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'App-navigation';

const mapDispatchToProps = {
  push,
};

const mapStateToProps = (state: AppStore) => ({
  pathname: locationPathNameSelector(state),
  userRole: authUserRoleSelector(state),
});

type AppNavigationProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    items: Array<AppRouteConfig>;
  };

type State = {
  activeRoute: string;
  routes: Array<AppRouteConfig>;
};

export class AppNavigationContainer extends Component<
  AppNavigationProps,
  State
> {
  static getDerivedStateFromProps(
    nextProps: AppNavigationProps,
    prevState: State,
  ) {
    const nextRoute = findActiveRoute(nextProps.pathname, nextProps.items);
    const routes = getRoutes(nextProps.items, nextProps.userRole);

    if (nextRoute !== prevState.activeRoute) {
      return {
        activeRoute: nextRoute,
        routes,
      };
    }

    return { routes };
  }

  constructor(props: AppNavigationProps) {
    super(props);

    this.state = {
      activeRoute: '',
      routes: [],
    };
  }

  handleClick = ({ href }: AnchorMouseEvent) => {
    this.props.push(href);
  };

  render() {
    return (
      <nav className={cn(CLASS_NAME)}>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {this.state.routes.map((item) => (
            <li key={item.path} className={cn(`${CLASS_NAME}__item`)}>
              <Anchor
                active={this.state.activeRoute === item.path}
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

export const AppNavigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavigationContainer);
