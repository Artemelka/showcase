import React, { FC, memo } from 'react';
import { Page } from '@/components';
import { TodoRouterSwitch } from './_components';

const TodoPage: FC = () => (
  <Page headTitle="Todo" title="Todo">
    <TodoRouterSwitch />
  </Page>
);

export default memo(TodoPage);
