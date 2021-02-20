import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Page } from '../../../../components';
import style from './todo-page.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Todo-page';

type TodoPageProps = {};

export const TodoPage = memo(({}: TodoPageProps) => {
  return (
    <Page title="Todo">
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__actions`)}>
          actions
        </div>
      </div>
    </Page>
  );
});