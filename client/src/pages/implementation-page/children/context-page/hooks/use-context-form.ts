import { useCallback, useState } from 'react';
import { API, SignUpResponse } from '@/api';
import { INITIAL_ERRORS_STATE } from '../constants';
import { signUpSuccess, useContextState } from '../context';
import { checkErrors } from '../utils';
import { InputsState } from '../types';
import { useForm, ReturnValue as UseFormValue } from './use-form';
import { useRequest } from './use-request';

type ReturnValue = Omit<UseFormValue, 'clear'> & {
  isLoading: boolean;
};

export const useContextForm = (): ReturnValue => {
  const [apiErrors, setApiErrors] =
    useState<Partial<InputsState>>(INITIAL_ERRORS_STATE);
  const [, dispatch] = useContextState();

  const { isLoading, sendRequest } = useRequest<
    InputsState,
    SignUpResponse,
    SignUpResponse
  >({
    onError: (error) =>
      setApiErrors({ userName: error.additionalErrors[0].userName }),
    onSuccess: (response) => {
      dispatch(signUpSuccess(response.data.name));
      clearForm();
    },
    request: ({ userName, password }) =>
      API.SIGN_UP.SIGN({ userName, password }),
  });

  const handleSubmit = useCallback(
    (val) => {
      sendRequest(val);
    },
    [sendRequest],
  );

  const { clear, errors, onChange, onSubmit, values } = useForm({
    handleSubmit,
    submitValidation: checkErrors,
  });

  function clearForm() {
    clear();
    setApiErrors(INITIAL_ERRORS_STATE);
  }

  return {
    errors: {
      ...errors,
      ...apiErrors,
    },
    isLoading,
    values,
    onChange,
    onSubmit,
  };
};
