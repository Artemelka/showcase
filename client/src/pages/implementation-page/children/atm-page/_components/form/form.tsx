import React, {
  FormEvent,
  memo,
  useCallback,
  useState,
} from 'react';
import {
  Button,
  Input,
  InputChangeEvent,
  Label,
} from '@artemelka/react-components';
import { fastClassNames } from '../../../../../../utils';
import style from './form.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Form';

const INPUT_ID = 'amount';

type FormPropsType = {
  onSubmit: (values: string) => void;
};

export const FormComponent = ({ onSubmit }: FormPropsType) => {
  const [value, setValue] = useState('');
  const [isError, setError] = useState(false);

  const handleChange = useCallback(({ value }: InputChangeEvent) => {
    setError(false);
    setValue(value)
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    if(+value % 10 !== 0) {
      setError(true);
      return;
    }

    onSubmit(value);
  }, [onSubmit, value]);

  return (
    <form className={cn(CLASS_NAME)} onSubmit={handleSubmit}>
      <Label htmlFor={INPUT_ID}>
        Please enter amount
      </Label>
      <Label size="small" themeColor="secondary">
        (* must be a multiple of 10)
      </Label>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Input
          id={INPUT_ID}
          isError={isError}
          name="amount"
          onChange={handleChange}
          themeColor="primary"
          value={value}
        />
        {isError && (
          <span className={cn(`${CLASS_NAME}__error`)}>
          Enter correct amount
        </span>
        )}
      </div>
      <Button type="submit" value="Submit" themeColor="primary"/>
    </form>
  );
};

export const Form = memo(FormComponent);