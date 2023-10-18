import React, { memo } from 'react';
import { RoutesPage } from '@/components';
import { IMPLEMENTATION_PAGE_PATH } from './constants';
import { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

const ImplementationPage = () => (
  <RoutesPage
    routesConfig={IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG}
    targetPath={IMPLEMENTATION_PAGE_PATH}
  />
);

export { IMPLEMENTATION_CHILDREN_PAGE_ROUTE_CONFIG } from './children';

export default memo(ImplementationPage);
