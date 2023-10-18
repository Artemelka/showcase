import React, { memo } from 'react';
import { Button, Text } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import style from './error-block.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Error-block';

type ErrorBlockPropsType = {
  onClick: () => void;
  title: string;
};

export const ErrorBlockComponent = ({
  onClick,
  title,
}: ErrorBlockPropsType) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <Text fontWeight="bold" tagName="p">
        {title}
      </Text>
      <div className={cn(`${CLASS_NAME}__action`)}>
        <Button onClick={onClick} themeColor="primary" value="Return to form" />
      </div>
    </div>
  );
};

export const ErrorBlock = memo(ErrorBlockComponent);
