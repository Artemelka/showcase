import { SyntheticEvent, useCallback, useState } from 'react';
import {
  INITIAL_INPUTS_STATE,
  INITIAL_ERRORS_STATE,
} from '../constants';
import { FieldNames, InputsState } from '../types';

type Params = {
  handleSubmit: (values: InputsState) => void;
  submitValidation: (values: InputsState) => Partial<InputsState>;
};

export type ReturnValue = {
  clear: () => void;
  errors: Partial<InputsState>;
  onChange: (name: FieldNames, value: string) => void;
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
  values: InputsState;
}

export const useForm = ({
  handleSubmit,
  submitValidation,
}: Params): ReturnValue => {
  const [values, setValues] = useState<InputsState>(INITIAL_INPUTS_STATE);
  const [errors, setErrors] = useState<Partial<InputsState>>(INITIAL_ERRORS_STATE);

  const clear = useCallback(() => {
    setValues(INITIAL_INPUTS_STATE)
  }, []);

  const onChange = useCallback((name: FieldNames, value: string) => {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const onSubmit = useCallback((event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationsErrors = submitValidation(values);

    if (!Object.keys(validationsErrors).length) {
      handleSubmit(values);
    }

    setErrors(validationsErrors);
  }, [handleSubmit, submitValidation, values]);

  return {
    clear,
    errors,
    onChange,
    onSubmit,
    values,
  }
}