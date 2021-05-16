import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  MESSAGE_TYPE,
  socketConnect,
  SocketInjectConfig,
  SocketMessage,
  WebSocketRequest,
} from '../../../../services/socket';
import { fastClassNames3 } from '../../../../utils';
import {
  addInUserList,
  addMessage,
  setUsersList,
  AppStoreWithChat,
  ChatMessage,
  ChatUser,
  ChatUserLeft,
  messageSelector,
  sendMessageActionSaga,
  userSelector,
} from '../../redux';
import { ChatSendMessageForm, ChatMessagesList } from '../../_components';
import { SendMessageFormValues } from '../../types';
import { CHAT_PAGE_CHILDREN_PATH } from '../../constants'
import style from './chat-content-page.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Chat-content';
const SOCKET_INJECT_CONFIG: SocketInjectConfig = {
  listeners: [
    {
      messageType: MESSAGE_TYPE.CHAT_NEW_MESSAGE,
      action: (dispatch) => (socketMessage: SocketMessage<ChatMessage>) => {
        dispatch(addMessage(socketMessage.payload))
      }
    }, {
      messageType: MESSAGE_TYPE.CHAT_NEW_USER,
      action: (dispatch) => ({ payload }: SocketMessage<ChatUser>) => {
        dispatch(addInUserList(payload));
      }
    }, {
      messageType: MESSAGE_TYPE.CHAT_USER_LEFT,
      action: (dispatch) => ({ payload }: SocketMessage<ChatUserLeft>) => {
        dispatch(setUsersList(payload.usersList))
      }
    }
  ],
};

type MapStateToProps = {
  messages: Array<ChatMessage>;
  user: ChatUser,
}
type MapDispatchToProps = {
  sendMessage: (message: string) => void;
}
type ChatContentProps = MapStateToProps & MapDispatchToProps & {
  webSocketRequest: WebSocketRequest;
};
type State = {
  isRedirect: boolean;
}

export class ChatContentPageContainer extends Component<ChatContentProps, State> {
  constructor(props: ChatContentProps) {
    super(props);

    this.state = {
      isRedirect: !(props.user.name && props.user.roomId),
    }
  }
  sendMessage = (values: SendMessageFormValues) => {
    const message: SocketMessage<ChatMessage> = {
      timestamp: Date.now(),
      type: MESSAGE_TYPE.CHAT_SEND_MESSAGE,
      payload: {
        user: this.props.user.name,
        text: values.message,
        id: '',
        userId: this.props.user.userId,
      }
    };

    this.props.webSocketRequest<ChatMessage>(message);
  }

  render() {
    return (this.state.isRedirect
      ? <Redirect to={CHAT_PAGE_CHILDREN_PATH.LOGIN}/>
      : (
          <div className={cn(CLASS_NAME)}>
            <section className={cn(`${CLASS_NAME}__messages`)}>
              <ChatMessagesList messages={this.props.messages} userId={this.props.user.userId} />
            </section>
            <ChatSendMessageForm onSubmit={this.sendMessage} />
          </div>
        )
    );
  }
}

const mapStateToProps = (state: AppStoreWithChat): MapStateToProps => ({
  messages: messageSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  sendMessage: sendMessageActionSaga,
};

export default socketConnect(SOCKET_INJECT_CONFIG)(
  connect(mapStateToProps, mapDispatchToProps)(ChatContentPageContainer)
);