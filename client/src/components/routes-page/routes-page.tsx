import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace, Replace } from 'connected-react-router';
import { Layout } from '@artemelka/react-components';
import { locationPathNameSelector } from '@/app/router';
import type { AppStore, AppRouteConfig } from '@/types';
import { AsyncRoutes, Sidebar } from '@/components';

type MapStateToProps = {
  pathname: string;
};
type MapDispatchToProps = {
  redirect: Replace;
};

type Props = {
  targetPath: string;
  routesConfig: Array<AppRouteConfig>;
};

type GamesPageProps = Props & MapStateToProps & MapDispatchToProps;

export class RoutesPageComponent extends Component<GamesPageProps, never> {
  componentDidMount() {
    const { pathname, targetPath, routesConfig } = this.props;

    if (pathname === targetPath) {
      this.props.redirect(routesConfig[0].path);
    }
  }

  render() {
    const { routesConfig, targetPath } = this.props;

    return (
      <Layout
        asideElement={
          <Sidebar
            navigationItems={routesConfig}
            title={targetPath.replace('/', '')}
          />
        }
        isAsideSticky
      >
        <AsyncRoutes routesConfig={routesConfig} />
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppStore): MapStateToProps => ({
  pathname: locationPathNameSelector(state),
});
const mapDispatchToProps: MapDispatchToProps = {
  redirect: replace,
};

export const RoutesPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoutesPageComponent);
