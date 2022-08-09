import React, { memo, SyntheticEvent, useCallback, useState } from 'react';
import { Button, Input, InputChangeEvent } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import style from './registration-form.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Registration-form';

type RegistrationFormProps = {
  onSubmit: (name: string) => void;
};

export const RegistrationFormComponent = ({ onSubmit }: RegistrationFormProps) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = useCallback(({ value }: InputChangeEvent) => {
    setPlayerName(value);
  }, []);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(playerName);
    setPlayerName('');
  };

  return (
    <div className={cn(CLASS_NAME)}>
      <form className={cn(`${CLASS_NAME}__form`)} onSubmit={handleSubmit}>
        <Input
          name="player-name"
          onChange={handleInputChange}
          value={playerName}
          placeholder="Please enter player name"
        />
        <div className={cn(`${CLASS_NAME}__button`)}>
          <Button disabled={playerName.length < 3} value="registration" type="submit" />
        </div>
      </form>
    </div>
  );
};

export const RegistrationForm = memo(RegistrationFormComponent);