import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Anchor, AnchorMouseEvent } from '@artemelka/react-components';
import { AppStore } from '@/app';
import { locationPathNameSelector } from '@/app/router';
import { AppRouteConfig } from '@/pages/types';
import { authUserRoleSelector } from '@/redux';
import { fastClassNames } from '@/utils';
import {
  findActiveIndex,
  getRoutes,
} from './utils';
import style from './app-navigation.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'App-navigation';

const mapDispatchToProps = {
  push
};

const mapStateToProps = (state: AppStore) => ({
  pathname: locationPathNameSelector(state),
  userRole: authUserRoleSelector(state),
});

type AppNavigationProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
  items: Array<AppRouteConfig>;
};

type State = {
  activeIndex: number;
  routes: Array<AppRouteConfig>;
};

export class AppNavigationContainer extends Component<AppNavigationProps, State> {
  static getDerivedStateFromProps(nextProps: AppNavigationProps, prevState: State) {
    const nextIndex = findActiveIndex(nextProps.pathname, nextProps.items);
    const routes = getRoutes(nextProps.items, nextProps.userRole);

    if (nextIndex !== prevState.activeIndex) {
      return {
        activeIndex: nextIndex,
        routes,
      };
    }

    return { routes };
  }

  constructor(props: AppNavigationProps) {
    super(props);

    this.state = {
      activeIndex: 0,
      routes: [],
    }
  }

  handleClick = ({ href }: AnchorMouseEvent) => {
    this.props.push(href);
  };

  render() {

    return (
      <nav className={cn(CLASS_NAME)}>
        <ul className={cn(`${CLASS_NAME}__list`)}>
          {this.state.routes.map((item, index) => (
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

export const AppNavigation = connect(mapStateToProps, mapDispatchToProps)(AppNavigationContainer);