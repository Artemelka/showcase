import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import { Text } from '@artemelka/react-components';
import style from './page.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Page';

type PageProps = PropsWithChildren<{
  title: string;
}>;

export const Page = memo(({
  title,
  children,
}: PageProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__title`)}>
        <Text tagName="h1" align="center" fontWeight="bold">{title}</Text>
      </div>
      {children}
    </div>
  );
});