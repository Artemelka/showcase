import React, { FC, memo, useCallback } from 'react';
import { Button, ButtonMouseEvent } from '@artemelka/react-components';
import Done from '@material-ui/icons/Done';
import Clear from '@material-ui/icons/Clear';
import { fastClassNames } from '@/utils';
import style from './editor-buttons-group.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Editor-buttons-group';

type EditorButtonsGroupProps = {
  isDisabledDone?: boolean;
  onClick: (id: string) => void;
};

const EditorButtonsGroupComponent: FC<EditorButtonsGroupProps> = ({
  isDisabledDone,
  onClick,
}) => {
  const handleClick = useCallback(
    ({ id }: ButtonMouseEvent) => {
      onClick(`${id}`);
    },
    [onClick],
  );

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <Button
          icon={<Clear fontSize="inherit" />}
          id="clear"
          onClick={handleClick}
          themeColor="error"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__item`)}>
        <Button
          disabled={isDisabledDone}
          icon={<Done fontSize="inherit" />}
          id="check"
          onClick={handleClick}
          themeColor="success"
        />
      </div>
    </div>
  );
};

export const EditorButtonsGroup = memo(EditorButtonsGroupComponent);
