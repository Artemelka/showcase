import React, { FC, memo, useCallback, useState } from 'react';
import { CollapsePanel } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { TaskItem } from '../../redux';
import style from './accordion.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Accordion';

const THEME_COLOR_MAP = {
  create: 'base',
  done: 'success',
  error: 'error',
  pending: 'secondary',
  progress: 'base',
  sending: 'primary',
} as const;

type AccordionProps = {
  items: Array<TaskItem>;
};

export const AccordionComponent: FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState('');

  const handleClick = useCallback(
    (id?: string | number) => {
      setOpenId(`${id}` === openId ? '' : `${id}`);
    },
    [openId],
  );

  return (
    <ul className={cn(CLASS_NAME)}>
      {items.map(({ index, status, result }) => (
        <li key={index} className={cn(`${CLASS_NAME}__item`)}>
          <CollapsePanel
            id={index}
            isOpen={openId === `${index}`}
            onClick={handleClick}
            panelTitle={`Task ${index + 1} - status: ${status}`}
            themeColor={THEME_COLOR_MAP[status]}
          >
            <p>{status}</p>
            {Number.isInteger(result) && <p>{result}</p>}
          </CollapsePanel>
        </li>
      ))}
    </ul>
  );
};

export const Accordion = memo(AccordionComponent);
