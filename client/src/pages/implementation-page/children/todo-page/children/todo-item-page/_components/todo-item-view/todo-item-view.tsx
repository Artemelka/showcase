import React, {memo} from 'react';
import classNames from 'classnames/bind';
import {
  Button,
  Overlay,
  WindowLoader,
  Text,
} from '@artemelka/react-components';
import style from './todo-item-page.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Todo-item-page';

type TodoItemViewProps = {
  onGoBackClick: () => void;
  title: string;
  isLoading: boolean;
  status: string;
  id: string;
};

export const TodoItemPageView = memo(({
  onGoBackClick,
  title,
  isLoading,
  status,
  id,
}: TodoItemViewProps) => {
  return (
    <section className={cn(CLASS_NAME)}>
      <header className={cn(`${CLASS_NAME}__header`)}>
        <div className={cn(`${CLASS_NAME}__button`)}>
          <Button
            onClick={onGoBackClick}
            size="small"
            themeColor="primary"
            value="go back"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__id`)}>
          <Text
            tagName="p"
            align="right"
            fontWeight="light"
          >
            Task ID: {id}
          </Text>
        </div>
      </header>
      <main className={cn(`${CLASS_NAME}__main`)}>
        <div className={cn(`${CLASS_NAME}__title`)}>
          <Text
            tagName="h2"
            fontWeight="semi-bold"
          >
            {title}
          </Text>
        </div>
        <div className={cn(`${CLASS_NAME}__status`)}>
          <Text
            tagName="p"
            align="right"
            fontWeight="semi-bold"
          >
            {status}
          </Text>
        </div>
      </main>


      {isLoading && (
        <Overlay inContainer>
          <WindowLoader/>
        </Overlay>
      )}
    </section>
  );
});