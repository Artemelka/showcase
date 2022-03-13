import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, Push } from 'connected-react-router';
import { Text } from '@artemelka/react-components';
import { locationPathNameSelector, AppStore } from '../../../../app';
import { SidebarNavigation } from '@/components';
import { fastClassNames } from '@/utils';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from '../../children';
import style from './sidebar.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Sidebar';

type MapStateToProps = {
  pathname: string;
};
type MapDispatchToProps = {
  push: Push;
};
type SidebarProps = MapStateToProps & MapDispatchToProps;

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

const mapStateToProps = (state: AppStore): MapStateToProps => ({
  pathname: locationPathNameSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  push
};

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);