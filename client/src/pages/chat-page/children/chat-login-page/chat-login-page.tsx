import React, { memo } from 'react';
import { Text } from '@artemelka/react-components';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { ConnectedChatLoginForm } from '../../_components';
import style from './chat-login-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Chat-login';

const ChatLoginPage = () => {
  return (
    <Page headTitle="Chat" title="Chat">
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__header`)}>
          <Text align="center" tagName="h2">
            You need enter name!
          </Text>
        </div>
        <div className={cn(`${CLASS_NAME}__form`)}>
          <ConnectedChatLoginForm />
        </div>
      </div>
    </Page>
  );
};

export default memo(ChatLoginPage);
