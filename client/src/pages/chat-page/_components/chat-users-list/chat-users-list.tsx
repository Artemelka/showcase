import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Text } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { usersListSelector, userSelector, ChatStore } from '../../redux';
import style from './chat-users-list.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Chat-users-list';

const mapStateToProps = (store: ChatStore) => ({
  user: userSelector(store),
  usersList: usersListSelector(store),
});

type ChatUsersListProps = ReturnType<typeof mapStateToProps>;

export const ChatUsersListComponent: FC<ChatUsersListProps> = ({
  user,
  usersList,
}) => {
  return (
    <aside className={cn(CLASS_NAME)}>
      <header className={cn(`${CLASS_NAME}__header`)}>
        <Text>You name:</Text>
        <span className={cn(`${CLASS_NAME}__user-name`)}>
          <Text fontWeight="bold">
            {user.userId ? user.name : 'Please login'}
          </Text>
        </span>
      </header>
      <Text align="center" tagName="p">
        Users list:
      </Text>
      <ul className={cn(`${CLASS_NAME}__list`)}>
        {user.userId &&
          usersList.map((chatUser) => (
            <li
              key={chatUser.userId}
              className={cn(`${CLASS_NAME}__list-item`)}
            >
              <Text>{chatUser.name}</Text>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export const ChatUsersList = connect(mapStateToProps)(ChatUsersListComponent);
