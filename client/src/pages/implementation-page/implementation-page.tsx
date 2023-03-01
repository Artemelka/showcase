import React, { FC } from 'react';
import { RoutesPage } from '@/components';
import { IMPLEMENTATION_PAGE_PATH } from './constants';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

const ImplementationPage: FC = () => (
  <RoutesPage
    targetPath={IMPLEMENTATION_PAGE_PATH}
    routesConfig={IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG}
  />
);

export default ImplementationPage;