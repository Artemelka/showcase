import React, { FC, memo, SyntheticEvent, useCallback, useState } from 'react';
import { Button, Input, InputChangeEvent } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { SendMessageFormValues } from '../../types';
import style from './chat-send-message-form.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Chat-send-message-form';

type ChatSendMessageFormProps = {
  onSubmit: (values: SendMessageFormValues) => void;
};

export const ChatSendMessageFormComponent: FC<ChatSendMessageFormProps> = ({
  onSubmit,
}) => {
  const [message, setMessage] = useState('');

  const handleInputChange = useCallback(({ value }: InputChangeEvent) => {
    setMessage(value);
  }, []);

  const handleSubmit = useCallback(
    (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit({ message });
      setMessage('');
    },
    [message, onSubmit],
  );

  return (
    <form className={cn(`${CLASS_NAME}`)} onSubmit={handleSubmit}>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Input
          name="message"
          onChange={handleInputChange}
          themeColor="primary"
          value={message}
        />
      </div>
      <div className={cn(`${CLASS_NAME}__button`)}>
        <Button themeColor="primary" type="submit" value="send" />
      </div>
    </form>
  );
};

export const ChatSendMessageForm = memo(ChatSendMessageFormComponent);
