import { Action } from 'redux';
import { AuthStore } from '@/redux';
import { RouterStore } from '@/app/router';
import { ChatStore } from '@/pages/chat-page';
import {
  QueueStore,
  GameReduxStore,
  GameToolkitStore,
  TodoItemStore,
  TodoStore,
} from '@/pages/implementation-page';

export type AppStore = RouterStore &
  AuthStore &
  ChatStore &
  QueueStore &
  GameReduxStore &
  GameToolkitStore &
  TodoItemStore &
  TodoStore;

export type BaseAction<P> = Action<string> & {
  payload: P;
};