import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Text } from '@artemelka/react-components';
import { GoHomeLink } from './_components';
import style from './not-found-page.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Not-found-page';

export const NotFoundPage = memo(() => (
  <div className={cn(CLASS_NAME)}>
    <p className={cn(`${CLASS_NAME}__code`)}>404</p>
    <div className={cn(`${CLASS_NAME}__title`)}>
      <Text tagName="h1" align="center" fontWeight="bold">Page not fount</Text>
    </div>
    <div className={cn(`${CLASS_NAME}__link`)}>
      <GoHomeLink/>
    </div>
    <p>
      папа я тебя люблю большэ всех на свете рас у тебя нету пацылуйчеков то вот так я паступлю 9000 пацылуйчеков
    </p>
  </div>
));
