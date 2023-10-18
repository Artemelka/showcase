import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Button,
  Input,
  InputChangeEvent,
  Text,
} from '@artemelka/react-components';
import Create from '@material-ui/icons/Create';
import { fastClassNames } from '@/utils';
import { EditorButtonsGroup } from '../editor-buttons-group';
import style from './title-editor.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Title-editor';

type TitleRedactorProps = {
  onChange: (title: string) => void;
  value: string;
};

const TitleEditorComponent: FC<TitleRedactorProps> = ({ onChange, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => setInputValue(value), [value]);

  const updateItem = useCallback(() => {
    onChange(inputValue);
    setIsEditing(false);
  }, [inputValue, onChange]);

  const handleChange = useCallback(
    ({ value: changedValue }: InputChangeEvent) => {
      setInputValue(changedValue);
    },
    [],
  );

  const handleRedactingClick = useCallback(() => {
    setIsEditing(true);

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleActionsClick = useCallback(
    (id: string) => {
      if (id === 'check') {
        updateItem();
      }

      if (id === 'clear') {
        setInputValue(value);
        setIsEditing(false);
      }
    },
    [value, updateItem],
  );

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__text`)}>
        <span
          className={cn(`${CLASS_NAME}__text-wrapper`, {
            [`${CLASS_NAME}__text-wrapper--hidden`]: isEditing,
          })}
        >
          <Text fontWeight="regular">{value}</Text>
        </span>
        <span className={cn(`${CLASS_NAME}__button`)}>
          <Button
            icon={<Create fontSize="inherit" />}
            onClick={handleRedactingClick}
          />
        </span>
      </div>
      <div
        className={cn(`${CLASS_NAME}__input`, {
          [`${CLASS_NAME}__input--hidden`]: !isEditing,
        })}
      >
        <Input
          inputRef={inputRef}
          name="title"
          onChange={handleChange}
          value={inputValue}
          variant="only-text"
        />
        <span className={cn(`${CLASS_NAME}__actions`)}>
          <EditorButtonsGroup
            isDisabledDone={inputValue === value}
            onClick={handleActionsClick}
          />
        </span>
      </div>
    </div>
  );
};

export const TitleEditor = memo(TitleEditorComponent);
