import React, { memo } from 'react';
import { Text } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { NestedData } from '../../types';
import style from './nested-list.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'nested-list';

type NestedListProps = {
  list: NestedData;
};

export const NestedListComponent = ({ list }: NestedListProps) => {
  return (
    <ul className={cn(CLASS_NAME)}>
      <li className={cn(`${CLASS_NAME}__item`)}>
        <Text>{list.name}</Text>
        {list.children.map(item => (
          <NestedList list={item}/>
        ))}
      </li>
    </ul>

  );
};

export const NestedList = memo(NestedListComponent);