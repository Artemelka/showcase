import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace, Replace } from 'connected-react-router';
import { Layout } from '@artemelka/react-components';
import { locationPathNameSelector, AppStore } from '../../app';
import { AsyncRoutes } from '../../components';
import { PAGES_PATH } from '../constants';
import { Sidebar } from './_components';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

type MapStateToProps = {
  pathname: string;
};
type MapDispatchToProps = {
  redirect: Replace;
};
type ImplementationPageProps = MapStateToProps & MapDispatchToProps;

export class ImplementationPageContainer extends Component<ImplementationPageProps> {
  componentDidMount() {
    if (this.props.pathname === PAGES_PATH.IMPLEMENTATION) {
      this.props.redirect(`${IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG[0].path}`);
    }
  }

  render() {
    return (
      <Layout
        asideElement={<Sidebar/>}
        isAsideSticky
      >
        <AsyncRoutes routesConfig={IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ImplementationPageContainer);