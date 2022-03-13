import React, { memo } from 'react';
import {
  Button,
  Overlay,
  WindowLoader,
  Text,
} from '@artemelka/react-components';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { fastClassNames } from '../../../../../../../../utils';
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

export const TodoItemPageViewComponent = ({
  onGoBackClick,
  onTitleChange,
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
            icon={<ArrowBack fontSize="inherit" />}
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
        <div className={cn(`${CLASS_NAME}__item`)}>
          <span className={cn(`${CLASS_NAME}__title`)}>
            Title:
          </span>
          <TitleEditor
            value={title}
            onChange={onTitleChange}
          />

        </div>
        <div className={cn(`${CLASS_NAME}__item`)}>
          <span className={cn(`${CLASS_NAME}__title`)}>
            Status:
          </span>
          <Text fontWeight="semi-bold">
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
};

export const TodoItemPageView = memo(TodoItemPageViewComponent);