import React, { FormEvent, memo, useCallback } from 'react';
import { Button, Input, InputChangeEvent } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { getFormValuesFromEvent } from '../../_utils';
import {
  FLAT_ITEM_ID,
  FLAT_ITEM_NAME,
  FLAT_ITEM_PARENT,
  INITIAL_VALUES,
  INITIAL_ERRORS,
} from '../../constants';
import style from './add-flat-item-form.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'add-flat-item-form';

type AddFlatItemFormProps = {
  errors: Partial<typeof INITIAL_ERRORS>;
  onSubmit: (item: typeof INITIAL_VALUES) => void;
  onChange: (value: Record<string, string>) => void;
  values: typeof INITIAL_VALUES;
};

export const AddFlatItemFormComponent = ({ errors, onChange, onSubmit, values }: AddFlatItemFormProps) => {
  const handleInputChange = useCallback(({ value, name }: InputChangeEvent) => {
    onChange({ [name]: value });
  }, [onChange]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = getFormValuesFromEvent(event);

    onSubmit(values);
  }, [onSubmit])

  const isIdError = Boolean(errors[FLAT_ITEM_ID]);
  const isNameError = Boolean(errors[FLAT_ITEM_NAME]);
  const isParentIdError = Boolean(errors[FLAT_ITEM_PARENT]);
  const isSubmitDisabled = isIdError || isNameError || isParentIdError;

  return (
    <form className={cn(CLASS_NAME)} onSubmit={handleSubmit}>
      <div
        className={cn(`${CLASS_NAME}__input`, {
          [`${CLASS_NAME}__input--error`]: !isIdError,
        })}
      >
        <Input
          isError={isIdError}
          name={FLAT_ITEM_ID}
          onChange={handleInputChange}
          type="number"
          value={values[FLAT_ITEM_ID]}
          placeholder='item id'
        />
        {isIdError && (
          <span className={cn(`${CLASS_NAME}__error`)}>
            {errors[FLAT_ITEM_ID]}
          </span>
        )}
      </div>
      <div
        className={cn(`${CLASS_NAME}__input`, {
          [`${CLASS_NAME}__input--error`]: !isNameError,
        })}
      >
        <Input
          isError={isNameError}
          name={FLAT_ITEM_NAME}
          onChange={handleInputChange}
          value={values[FLAT_ITEM_NAME]}
          placeholder="item name"
        />
        {isNameError && (
          <span className={cn(`${CLASS_NAME}__error`)}>
            {errors[FLAT_ITEM_ID]}
          </span>
        )}
      </div>
      <div
        className={cn(`${CLASS_NAME}__input`, {
          [`${CLASS_NAME}__input--error`]: !isParentIdError,
        })}
      >
        <Input
          isError={isParentIdError}
          name={FLAT_ITEM_PARENT}
          onChange={handleInputChange}
          type="number"
          value={values[FLAT_ITEM_PARENT]}
          placeholder="item parent id"
        />
        {isParentIdError && (
          <span className={cn(`${CLASS_NAME}__error`)}>
            {errors[FLAT_ITEM_ID]}
          </span>
        )}
      </div>

      <div className={cn(`${CLASS_NAME}__submit`)}>
        <Button
          disabled={isSubmitDisabled}
          themeColor="primary"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

export const AddFlatItemForm = memo(AddFlatItemFormComponent);