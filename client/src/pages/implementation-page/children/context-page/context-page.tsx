import React, { memo } from 'react';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { Title, Form, FormFc, ContextProvider } from './components';
import style from './context-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Context-page';

export const ContextPage = () => {
  return (
    <Page
      headTitle="Context"
      title="Context implementation"
    >
      <ContextProvider>
        <div className={cn(CLASS_NAME)}>
          <Title/>
          <div className={cn(`${CLASS_NAME}__container`)}>
            <div className={cn(`${CLASS_NAME}__form`)}>
              <Form />
            </div>
            <div className={cn(`${CLASS_NAME}__form`)}>
              <FormFc />
            </div>
          </div>
        </div>
      </ContextProvider>
    </Page>
  );
};

export default memo(ContextPage);
