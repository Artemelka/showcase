import React, { memo, SyntheticEvent, useCallback, useState } from 'react';
import { fastClassNames3 } from '../../../../utils';
import { Button, Input, InputChangeEvent } from '@artemelka/react-components';
import { SendMessageFormValues } from '../../types';
import style from './chat-send-message-form.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Chat-send-message-form';

type ChatSendMessageFormProps = {
  onSubmit: (values: SendMessageFormValues) => void;
};

export const ChatSendMessageFormComponent = ({
  onSubmit
}: ChatSendMessageFormProps) => {
  const [message, setMessage] = useState('');

  const handleInputChange = useCallback(({ value }: InputChangeEvent) => {
    setMessage(value);
  }, []);

  const handleSubmit = useCallback((event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ message });
    setMessage('');
  }, [message, onSubmit]);

  return (
    <form className={cn(`${CLASS_NAME}`)} onSubmit={handleSubmit}>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Input
          name="message"
          onChange={handleInputChange}
          value={message}
          themeColor="primary"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__button`)}>
        <Button
          type="submit"
          value="send"
          themeColor="primary"
        />
      </div>
    </form>
  );
};

export const ChatSendMessageForm = memo(ChatSendMessageFormComponent);