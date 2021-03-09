import React, { memo } from 'react';
import { fastClassNames3 } from '../../../../../../../../utils';
import style from './snake-item.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Snake-item';

type SnakeItemProps = {
  isApple: boolean;
  isSnakeItem: boolean;
};

export const SnakeItem = memo(({
  isApple,
  isSnakeItem,
}: SnakeItemProps) => (
  <td
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--apple`]: isApple,
      [`${CLASS_NAME}--filled`]: isSnakeItem
    })}
  />
));