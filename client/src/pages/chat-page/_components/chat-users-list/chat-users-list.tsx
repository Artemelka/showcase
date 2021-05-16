import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Text } from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../utils';
import {
  ChatUser,
  AppStoreWithChat,
  usersListSelector,
  userSelector,
} from '../../redux';
import style from './chat-users-list.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Chat-users-list';

type MapStateToProps = {
  user: ChatUser;
  usersList: Array<ChatUser>;
};
type ChatUsersListProps = MapStateToProps & {};

export const ChatUsersListComponent = memo(({ user, usersList }: ChatUsersListProps) => {
  return (
    <aside className={cn(CLASS_NAME)}>
      <header className={cn(`${CLASS_NAME}__header`)}>
        <Text>You name:</Text>
        <span className={cn(`${CLASS_NAME}__user-name`)}>
          <Text fontWeight="bold" >
            {user.userId ? user.name : 'Please login'}
          </Text>
        </span>
      </header>
      <Text tagName="p" align="center" >Users list:</Text>
      <ul className={cn(`${CLASS_NAME}__list`)}>
        {user.userId && usersList.map(chatUser => (
          <li key={chatUser.userId} className={cn(`${CLASS_NAME}__list-item`)}>
            <Text>{chatUser.name}</Text>
          </li>
        ))}
      </ul>
    </aside>
  );
});

const mapStateToProps = (store: AppStoreWithChat): MapStateToProps => ({
  user: userSelector(store),
  usersList: usersListSelector(store),
});

export const ChatUsersList = connect(mapStateToProps)(ChatUsersListComponent);