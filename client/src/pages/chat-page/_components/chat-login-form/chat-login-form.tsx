import React, { Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { v4 as getId } from 'uuid';
import { push } from 'connected-react-router';
import { Redirect } from 'react-router';
import { Button, Input, InputChangeEvent } from '@artemelka/react-components';
import { MESSAGE_TYPE, socketConnect, SocketHocProps } from '@/services/socket';
import { fastClassNames } from '@/utils';
import {
  ChatUser,
  ChatSetUser,
  setUser,
  setUsersList,
  userSelector,
  ChatStore,
} from '../../redux';
import { CHAT_PAGE_CHILDREN_PATH } from '../../constants';
import style from './chat-login-form.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Chat-login-form';

const mapDispatchToProps = {
  push,
  setUsersList,
  setUser,
};

const mapStateToProps = (state: ChatStore) => ({
  user: userSelector(state),
});

type ChatLoginFormProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  SocketHocProps;
type State = {
  userName: string;
  isRedirect: boolean;
};

export class ChatLoginForm extends Component<ChatLoginFormProps, State> {
  constructor(props: ChatLoginFormProps) {
    super(props);

    this.props.addSocketListeners([
      {
        messageType: MESSAGE_TYPE.CHAT_SET_USER,
        action: ({ payload }) => {
          const { user, usersList }: ChatSetUser = payload;

          this.props.setUsersList(usersList);
          this.props.setUser(user);
          this.props.push(
            `${CHAT_PAGE_CHILDREN_PATH.CONTENT}?id=${user.roomId}`,
          );
        },
      },
    ]);

    this.state = {
      userName: props.user.name,
      isRedirect: Boolean(props.user.name) && Boolean(props.user.roomId),
    };
  }

  handleInputChange = ({ value }: InputChangeEvent) => {
    this.setState({ userName: value });
  };

  handleButtonClick = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = {
      timestamp: Date.now(),
      type: MESSAGE_TYPE.CHAT_SET_USER,
      payload: {
        name: this.state.userName,
        roomId: this.props.user.roomId || getId(),
        userId: '',
      },
    };

    this.props.webSocketRequest<ChatUser>(message);
  };

  render() {
    const { userName, isRedirect } = this.state;

    return isRedirect ? (
      <Redirect
        to={`${CHAT_PAGE_CHILDREN_PATH.CONTENT}/?id=${this.props.user.roomId}`}
      />
    ) : (
      <form className={cn(`${CLASS_NAME}`)} onSubmit={this.handleButtonClick}>
        <div className={cn(`${CLASS_NAME}__input`)}>
          <Input
            name="chat-login-name"
            onChange={this.handleInputChange}
            themeColor="primary"
            value={userName}
            variant="filled"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__button`)}>
          <Button
            disabled={userName === ''}
            themeColor="primary"
            type="submit"
            value="login"
          />
        </div>
      </form>
    );
  }
}

export const ConnectedChatLoginForm = socketConnect(
  connect(mapStateToProps, mapDispatchToProps)(ChatLoginForm),
);
