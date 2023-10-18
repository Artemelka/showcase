import React, { memo } from 'react';
import { Text } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { ChatMessage } from '../../redux';
import style from './chat-messages-list.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Chat-messages-list';

type ChatMessagesListProps = {
  messages: Array<ChatMessage>;
  userId: string;
};

export const ChatMessagesListComponent = ({
  messages,
  userId,
}: ChatMessagesListProps) => {
  return (
    <ul className={cn(CLASS_NAME)}>
      {messages.map((message) => (
        <li key={message.id} className={cn(`${CLASS_NAME}__item`)}>
          {userId !== message.userId && (
            <div className={cn(`${CLASS_NAME}__user`)}>{`${message.user}`}</div>
          )}
          <div
            className={cn(`${CLASS_NAME}__message-container`, {
              [`${CLASS_NAME}__message-container--self`]:
                userId === message.userId,
            })}
          >
            <div className={cn(`${CLASS_NAME}__message`)}>
              <Text>{message.text}</Text>
            </div>
            <div className={cn(`${CLASS_NAME}__time`)}>
              {message.time && (
                <Text align="right" tagName="p">
                  {`${
                    new Date(message.time)
                      .toISOString()
                      .split('T')[1]
                      .split('Z')[0]
                  }`}
                </Text>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const ChatMessagesList = memo(ChatMessagesListComponent);
