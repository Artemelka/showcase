import React, { memo } from 'react';
import { Label } from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../../../utils';
import { ConnectedFilter } from './_components/connected-filter';
import { ConnectedRowSelect } from './_components/connected-row-select';
import { ConnectedTable } from './_components/connected-table';
import { ConnectedTabs } from './_components/connected-tabs';
import style from './todo-list-page.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Todo-list-page';

export const TodoListPage = memo(() => (
  <div className={cn(CLASS_NAME)}>
    <div className={cn(`${CLASS_NAME}__actions`)}>
      <div className={cn(`${CLASS_NAME}__tabs`)}>
        <div className={cn(`${CLASS_NAME}__tabs-label`)}>
          <Label size="small">Filter category</Label>
        </div>
        <ConnectedTabs/>
      </div>
      <div className={cn(`${CLASS_NAME}__rows-select`)}>
        <ConnectedRowSelect/>
      </div>
      <div className={cn(`${CLASS_NAME}__filter`)}>
        <ConnectedFilter/>
      </div>
    </div>
    <div className={cn(`${CLASS_NAME}__table`)}>
      <ConnectedTable />
    </div>
  </div>
));