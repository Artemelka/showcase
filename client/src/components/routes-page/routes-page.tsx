import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace, Replace } from 'connected-react-router';
import { Layout } from '@artemelka/react-components';
import { AppStore } from '@/app';
import { locationPathNameSelector } from '@/app/router';
import { AsyncRoutes, Sidebar } from '@/components';
import { AppRouteConfig } from '@/pages';

type MapStateToProps = {
  pathname: string;
};
type MapDispatchToProps = {
  redirect: Replace;
};

type Props = {
  targetPath: string;
  routesConfig: Array<AppRouteConfig>;
}

type GamesPageProps = Props & MapStateToProps & MapDispatchToProps;

export class RoutesPageComponent extends Component<GamesPageProps> {
  componentDidMount() {
    const { pathname, targetPath, routesConfig } = this.props;

    if (pathname === targetPath) {
      this.props.redirect(routesConfig[0].path);
    }
  }

  render() {
    const { routesConfig } = this.props;

    return (
      <Layout
        asideElement={<Sidebar navigationItems={routesConfig}/>}
        isAsideSticky
      >
        <AsyncRoutes routesConfig={routesConfig}/>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppStore): MapStateToProps => ({
  pathname: locationPathNameSelector(state)
});
const mapDispatchToProps: MapDispatchToProps = {
  redirect: replace,
};

export const RoutesPage = connect(mapStateToProps, mapDispatchToProps)(RoutesPageComponent);