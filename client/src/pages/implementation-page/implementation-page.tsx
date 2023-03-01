import React, { FC } from 'react';
import { RoutesPage } from '@/components';
import { PAGES_PATH } from '../constants';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

const ImplementationPage: FC = () => (
  <RoutesPage
    targetPath={PAGES_PATH.IMPLEMENTATION}
    routesConfig={IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG}
  />
);

export default ImplementationPage;