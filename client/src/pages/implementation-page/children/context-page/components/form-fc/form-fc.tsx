import React, { memo, useCallback } from 'react';
import { Button, Input, InputChangeEvent, Text } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { FORM_ITEMS } from '../../constants';
import { useContextForm } from '../../hooks';
import { FieldNames } from '../../types';
import style from '../form/form.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Form';

export const FormFcComponent = () => {
  const { isLoading, errors, onChange, onSubmit, values } = useContextForm();

  const handleChange = useCallback(({ value, name }: InputChangeEvent) => {
    onChange(name as FieldNames, value);
  }, [onChange]);

  return (
    <form className={cn(CLASS_NAME)} onSubmit={onSubmit}>
      <Text tagName="h3">Form FC</Text>
      {FORM_ITEMS.map((({ id, name, placeholder, type }) => (
        <div className={cn(`${CLASS_NAME}__input`)} key={`${id}-fc`}>
          <Input
            disabled={isLoading}
            id={`${id}-fc`}
            isError={Boolean(errors[name])}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            value={values[name]}
          />
          {errors[name] && (
            <span className={cn(`${CLASS_NAME}__error`)}>
              {errors[name]}
            </span>
          )}
        </div>
      )))}
      <div className={cn(`${CLASS_NAME}__action`)}>
        <Button disabled={isLoading} value="submit" type="submit"/>
      </div>
    </form>
  );
};

export const FormFc = memo(FormFcComponent);