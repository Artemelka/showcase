import { FieldNames, InputsState } from '../types';
import { checkLength } from './check-length';

const LENGTH_VALIDATION_FIELDS_NAME: Array<FieldNames> = ['userName', 'password'];

type Errors = Partial<InputsState>;

export function checkErrors(values: InputsState): Errors {
  const errors: Errors = {};

  LENGTH_VALIDATION_FIELDS_NAME.forEach(name => {
    if (!checkLength(values[name])) {
      errors[name] = 'should be more 6 symbols'
    }
  });

  if (values.password !== values.repeatPassword) {
    errors.repeatPassword = 'incorrect repeat Password field';
  }

  return errors;
}