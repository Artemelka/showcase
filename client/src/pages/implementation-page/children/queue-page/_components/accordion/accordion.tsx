import React, { memo, useCallback, useState } from 'react';
import classNames from 'classnames/bind';
import { CollapsePanel } from '@artemelka/react-components';
import { TaskItem } from '../../redux';
import style from './accordion.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Accordion';

const THEME_COLOR_MAP = {
  create: 'base',
  done: 'success',
  error: 'error',
  pending: 'secondary',
  progress: 'base',
  sending: 'primary',
};

type AccordionProps = {
  items: Array<TaskItem>;
};

export const AccordionComponent = ({
  items
}: AccordionProps) => {
  const [openId, setOpenId] = useState('');

  const handleClick = useCallback((id?: string | number) => {
    setOpenId(`${id}` === openId ? '' :`${id}`);
  }, [openId]);

  return (
    <ul className={cn(CLASS_NAME)}>
      {items.map(({ index, status, result}) => (
        <li className={cn(`${CLASS_NAME}__item`)} key={index}>
          <CollapsePanel
            isOpen={openId === `${index}`}
            onClick={handleClick}
            id={index}
            panelTitle={`Task ${index + 1} - status: ${status}`}
            // @ts-ignore
            themeColor={THEME_COLOR_MAP[status]}
          >
            <p>{status}</p>
            {result !== undefined && (
              <p>{result}</p>
            )}
          </CollapsePanel>
        </li>
      ))}
    </ul>
  );
};

export const Accordion = memo(AccordionComponent);