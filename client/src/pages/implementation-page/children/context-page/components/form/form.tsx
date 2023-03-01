import React, { PureComponent, SyntheticEvent } from 'react';
import { Button, Input, InputChangeEvent, Text } from '@artemelka/react-components';
import { API } from '@/api';
import { fastClassNames } from '@/utils';
import { signUpSuccess, WithContextProps, withContextState } from '../../context';
import {
  FORM_ITEMS,
  INITIAL_INPUTS_STATE,
  INITIAL_ERRORS_STATE,
} from '../../constants';
import { checkErrors } from '../../utils';
import { InputsState } from '../../types';
import style from './form.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Form';

type State = {
  inputs: InputsState;
  errors: Partial<InputsState>;
};

type FormBaseProps = {};
type FormProps = FormBaseProps & WithContextProps;

export class FormComponent extends PureComponent<FormProps, State> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      inputs: INITIAL_INPUTS_STATE,
      errors: INITIAL_ERRORS_STATE,
    };
  }

  signUp = async (): Promise<void> => {
    const data = {
      userName: this.state.inputs.userName,
      password: this.state.inputs.password,
    };

    this.setState({ errors: INITIAL_ERRORS_STATE });

    try {
      const response = await API.SIGN_UP.SIGN(data);

      this.props.dispatch(signUpSuccess(response.data.name));
      this.setState({ inputs: INITIAL_INPUTS_STATE });
    } catch (error) {
      console.log('ERROR in signUp', error);

      if (error.isError) {
        this.setState({ errors: error.additionalErrors[0] });
        return;
      }
    }
  }

  handleChange = ({ value, name }: InputChangeEvent): void => {
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [name]: value,
      }
    }));
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const errors = checkErrors(this.state.inputs);

    if (!Object.keys(errors).length) {
      this.signUp();
    }

    this.setState({ errors });
  }

  render() {
    return (
      <form className={cn(CLASS_NAME)} onSubmit={this.handleSubmit}>
        <Text tagName="h3">Form</Text>
        {FORM_ITEMS.map((({ id, name, placeholder, type}) => (
          <div className={cn(`${CLASS_NAME}__input`)} key={id}>
            <Input
              id={id}
              isError={Boolean(this.state.errors[name])}
              name={name}
              onChange={this.handleChange}
              placeholder={placeholder}
              type={type}
              value={this.state.inputs[name]}
            />
            {this.state.errors[name] && (
              <span className={cn(`${CLASS_NAME}__error`)}>
                {this.state.errors[name]}
              </span>
            )}
          </div>
        )))}
        <div className={cn(`${CLASS_NAME}__action`)}>
          <Button value="submit" type="submit"/>
        </div>
      </form>
    );
  }
}

export const Form = withContextState<FormBaseProps>(FormComponent);