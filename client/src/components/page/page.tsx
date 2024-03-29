import React, { FC, memo, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { Text } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import style from './page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Page';

type PageProps = PropsWithChildren<{
  headTitle?: string;
  title?: string;
}>;

export const PageComponent: FC<PageProps> = ({
  children,
  headTitle,
  title,
}) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <Helmet
        defaultTitle="Artemelka react showcase"
        title={headTitle}
        titleTemplate="%s - Artemelka react showcase"
      />
      {title && (
        <div className={cn(`${CLASS_NAME}__title`)}>
          <Text align="center" fontWeight="bold" tagName="h1">
            {title}
          </Text>
        </div>
      )}
      <div className={cn(`${CLASS_NAME}__content`)}>{children}</div>
    </div>
  );
};

export const Page = memo(PageComponent);
