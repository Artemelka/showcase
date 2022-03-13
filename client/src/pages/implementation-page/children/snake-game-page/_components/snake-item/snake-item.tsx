import React, { FC, memo } from 'react';
import { fastClassNames } from '@/utils';
import style from './snake-item.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Snake-item';

type SnakeItemProps = {
  isApple: boolean;
  isSnakeItem: boolean;
};

export const SnakeItemComponent: FC<SnakeItemProps> = ({
  isApple,
  isSnakeItem,
}) => (
  <td
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--apple`]: isApple,
      [`${CLASS_NAME}--filled`]: isSnakeItem
    })}
  />
);

export const SnakeItem = memo(SnakeItemComponent);