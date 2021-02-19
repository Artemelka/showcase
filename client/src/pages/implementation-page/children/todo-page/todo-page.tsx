import React, { memo } from 'react';
import classNames from 'classnames/bind';
import style from './todo-page.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Todo-page';

type TodoPageProps = {};

export const TodoPage = memo(({}: TodoPageProps) => {
  return (
    <div className={cn(CLASS_NAME)}>TodoPage</div>
  );
});