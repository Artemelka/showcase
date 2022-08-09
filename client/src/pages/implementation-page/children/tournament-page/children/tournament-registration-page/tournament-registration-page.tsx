import React, {memo, useCallback} from 'react';
import { Text } from '@artemelka/react-components';
import { RegistrationForm } from './_components';

export const TournamentRegistrationPageComponent = () => {
  const handleFormSubmit = useCallback((playerName: string) => {
    console.log('=== playerName ===', playerName);
  }, []);

  return (
    <div>
      <Text align="center" tagName="h2">Tournament registration</Text>
      <RegistrationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export const TournamentRegistrationPage = memo(TournamentRegistrationPageComponent);