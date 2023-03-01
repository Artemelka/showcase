import React, { FC, memo } from 'react';
import { Text } from '@artemelka/react-components';
import { useContextState } from '../../context';

export const TitleComponent: FC = () => {
  const [state] = useContextState();

  return (
    <Text align="center" fontWeight="bold" tagName="h2">
      Hello {state.userName}
    </Text>
  );
};

export const Title = memo(TitleComponent);