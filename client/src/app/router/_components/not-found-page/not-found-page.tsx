import React, { FC, memo } from 'react';
import { Text } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { GoHomeLink } from './_components';
import style from './not-found-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Not-found-page';

export const NotFoundPageComponent: FC = () => (
  <div className={cn(CLASS_NAME)}>
    <p className={cn(`${CLASS_NAME}__code`)}>404</p>
    <div className={cn(`${CLASS_NAME}__title`)}>
      <Text align="center" fontWeight="bold" tagName="h1">
        Page not fount
      </Text>
    </div>
    <div className={cn(`${CLASS_NAME}__link`)}>
      <GoHomeLink />
    </div>
    <p>
      папа я тебя люблю большэ всех на свете рас у тебя нету пацылуйчеков то вот
      так я паступлю 9000 пацылуйчеков
    </p>
  </div>
);

export const NotFoundPage = memo(NotFoundPageComponent);
