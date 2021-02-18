import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Button, Text } from '@artemelka/react-components';
import style from './error-block.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Error-block';

type ErrorBlockPropsType = {
  onClick: () => void;
  title: string;
}

export const ErrorBlock = memo(({ onClick, title }: ErrorBlockPropsType) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <Text tagName="p" fontWeight="bold">{title}</Text>
      <div className={cn(`${CLASS_NAME}__action`)}>
        <Button onClick={onClick} value="Return to form" themeColor="primary"/>
      </div>
    </div>
  );
});