import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Text } from '@artemelka/react-components';
import { AppStore } from '@/app';
import { locationPathNameSelector } from '@/app/router';
import { SidebarNavigation } from '@/components';
import { fastClassNames } from '@/utils';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from '../../children';
import style from './sidebar.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Sidebar';

const mapStateToProps = (state: AppStore) => ({
  pathname: locationPathNameSelector(state),
});

const mapDispatchToProps = {
  push
};

type SidebarProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export class SidebarContainer extends Component<SidebarProps> {
  handleClick = (path: string ) => {
    this.props.push(path);
  };

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__inner`)}>
          <Text tagName="h5" align="center" fontWeight="semi-bold">
            Implementation menu
          </Text>
          <div className={cn(`${CLASS_NAME}__navigation`)}>
            <SidebarNavigation
              activePath={this.props.pathname}
              items={IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG}
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);