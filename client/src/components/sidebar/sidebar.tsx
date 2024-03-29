import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Text } from '@artemelka/react-components';
import { locationPathNameSelector } from '@/app/router';
import { SidebarNavigation } from '@/components';
import { AppStore, AppRouteConfig } from '@/types';
import { fastClassNames } from '@/utils';
import style from './sidebar.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Sidebar';

const mapStateToProps = (state: AppStore) => ({
  pathname: locationPathNameSelector(state),
});

const mapDispatchToProps = {
  push,
};

type Props = {
  navigationItems: Array<AppRouteConfig>;
  title: string;
};

type SidebarProps = Props &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class SidebarContainer extends Component<SidebarProps, never> {
  handleClick = (path: string) => {
    this.props.push(path);
  };

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__inner`)}>
          <Text align="center" fontWeight="semi-bold" tagName="h5">
            {this.props.title} menu
          </Text>
          <div className={cn(`${CLASS_NAME}__navigation`)}>
            <SidebarNavigation
              activePath={this.props.pathname}
              items={this.props.navigationItems}
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidebarContainer);
