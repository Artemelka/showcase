import React, { memo, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import { Text } from '@artemelka/react-components';
import style from './page.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Page';

type PageProps = PropsWithChildren<{
  headTitle?: string;
  title: string;
}>;

export const Page = memo<PageProps>(function PageComponent({
  children,
  headTitle,
  title,
}) {
  return (
    <div className={cn(CLASS_NAME)}>
      <Helmet
        defaultTitle="Artemelka react showcase"
        title={headTitle}
        titleTemplate="%s - Artemelka react showcase"
      />
      <div className={cn(`${CLASS_NAME}__title`)}>
        <Text tagName="h1" align="center" fontWeight="bold">{title}</Text>
      </div>
      <div className={cn(`${CLASS_NAME}__content`)}>
        {children}
      </div>
    </div>
  );
});