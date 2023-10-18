import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  MESSAGE_TYPE,
  socketConnect,
  SocketHocProps,
  SocketMessage,
} from '@/services/socket';
import { fastClassNames } from '@/utils';
import {
  addInUserList,
  addMessage,
  setUsersList,
  ChatMessage,
  ChatUser,
  ChatUserLeft,
  messageSelector,
  sendMessageActionSaga,
  userSelector,
  ChatStore,
} from '../../redux';
import { ChatSendMessageForm, ChatMessagesList } from '../../_components';
import { SendMessageFormValues } from '../../types';
import { CHAT_PAGE_CHILDREN_PATH } from '../../constants';
import style from './chat-content-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Chat-content';

const mapDispatchToProps = {
  sendMessage: sendMessageActionSaga,
  setUsersList,
  addInUserList,
  addMessage,
};

const mapStateToProps = (state: ChatStore) => ({
  messages: messageSelector(state),
  user: userSelector(state),
});

type ChatContentProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  SocketHocProps;

type State = {
  isRedirect: boolean;
};

export class ChatContentPageContainer extends Component<
  ChatContentProps,
  State
> {
  constructor(props: ChatContentProps) {
    super(props);

    this.props.addSocketListeners([
      {
        messageType: MESSAGE_TYPE.CHAT_NEW_MESSAGE,
        action: this.handleChatNewMessage,
      },
      {
        messageType: MESSAGE_TYPE.CHAT_NEW_USER,
        action: this.handleChatNewUser,
      },
      {
        messageType: MESSAGE_TYPE.CHAT_USER_LEFT,
        action: this.handleChatUserLeft,
      },
    ]);

    this.state = {
      isRedirect: !(props.user.name && props.user.roomId),
    };
  }

  handleChatNewMessage = ({ payload }: SocketMessage<ChatMessage>) => {
    this.props.addMessage(payload);
  };

  handleChatNewUser = ({ payload }: SocketMessage<ChatUser>) => {
    this.props.addInUserList(payload);
  };

  handleChatUserLeft = ({ payload }: SocketMessage<ChatUserLeft>) => {
    this.props.setUsersList(payload.usersList);
  };

  sendMessage = (values: SendMessageFormValues) => {
    const message: SocketMessage<ChatMessage> = {
      timestamp: Date.now(),
      type: MESSAGE_TYPE.CHAT_SEND_MESSAGE,
      payload: {
        user: this.props.user.name,
        text: values.message,
        id: '',
        userId: this.props.user.userId,
      },
    };

    this.props.webSocketRequest<ChatMessage>(message);
  };

  render() {
    return this.state.isRedirect ? (
      <Redirect to={CHAT_PAGE_CHILDREN_PATH.LOGIN} />
    ) : (
      <div className={cn(CLASS_NAME)}>
        <section className={cn(`${CLASS_NAME}__messages`)}>
          <ChatMessagesList
            messages={this.props.messages}
            userId={this.props.user.userId}
          />
        </section>
        <ChatSendMessageForm onSubmit={this.sendMessage} />
      </div>
    );
  }
}

export default socketConnect(
  connect(mapStateToProps, mapDispatchToProps)(ChatContentPageContainer),
);
