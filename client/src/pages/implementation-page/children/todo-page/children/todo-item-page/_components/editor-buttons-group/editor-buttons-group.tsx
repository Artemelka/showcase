import React, {memo, useCallback} from 'react';
import classNames from 'classnames/bind';
import {
  Button,
  ButtonMouseEvent,
} from '@artemelka/react-components';
import Done from '@material-ui/icons/Done';
import Clear from '@material-ui/icons/Clear';
import style from './editor-buttons-group.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Editor-buttons-group';

type EditorButtonsGroupProps = {
  isDisabledDone?: boolean;
  onClick: (id: string) => void;
};

export const EditorButtonsGroup = memo(({
  isDisabledDone,
  onClick
}: EditorButtonsGroupProps) => {
  const handleClick = useCallback(({ id }: ButtonMouseEvent) => {
    onClick(`${id}`);
  }, [onClick]);

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <Button
          id="clear"
          onClick={handleClick}
          icon={<Clear fontSize="inherit" />}
          themeColor="error"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <Button
          id="check"
          disabled={isDisabledDone}
          onClick={handleClick}
          icon={<Done fontSize="inherit" />}
          themeColor="success"
        />
      </div>
    </div>
  );
});