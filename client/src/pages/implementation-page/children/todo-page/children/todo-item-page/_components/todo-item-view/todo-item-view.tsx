import React, { FC, memo } from 'react';
import {
  Button,
  Overlay,
  WindowLoader,
  Text,
} from '@artemelka/react-components';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { fastClassNames } from '@/utils';
import { TitleEditor } from '../title-editor';
import style from './todo-item-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Todo-item-page';

type TodoItemViewProps = {
  onGoBackClick: () => void;
  onTitleChange: (title: string) => void;
  title: string;
  isLoading: boolean;
  status: string;
  id: string;
};

export const TodoItemPageViewComponent: FC<TodoItemViewProps> = ({
  onGoBackClick,
  onTitleChange,
  title,
  isLoading,
  status,
  id,
}) => {
  return (
    <section className={cn(CLASS_NAME)}>
      <header className={cn(`${CLASS_NAME}__header`)}>
        <div className={cn(`${CLASS_NAME}__button`)}>
          <Button
            icon={<ArrowBack fontSize="inherit" />}
            onClick={onGoBackClick}
            size="small"
            themeColor="primary"
            value="go back"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__id`)}>
          <Text align="right" fontWeight="light" tagName="p">
            Task ID: {id}
          </Text>
        </div>
      </header>
      <main className={cn(`${CLASS_NAME}__main`)}>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <span className={cn(`${CLASS_NAME}__title`)}>Title:</span>
          <TitleEditor onChange={onTitleChange} value={title} />
        </div>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <span className={cn(`${CLASS_NAME}__title`)}>Status:</span>
          <Text fontWeight="semi-bold">{status}</Text>
        </div>
      </main>

      {isLoading && (
        <Overlay inContainer>
          <WindowLoader />
        </Overlay>
      )}
    </section>
  );
};

export const TodoItemPageView = memo(TodoItemPageViewComponent);
