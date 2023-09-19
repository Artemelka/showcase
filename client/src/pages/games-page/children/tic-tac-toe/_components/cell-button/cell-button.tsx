import React, { memo, useCallback } from 'react';
import { fastClassNames } from '@/utils';
import styles from './cell-button.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'cell-button';

type CellButtonProps = {
  isWinner: boolean;
  cellIndex: number;
  onClick: (cellIndex: number, value: string) => void;
  value: string;
  disabled: boolean;
};

export const CellButtonComponent = ({ isWinner, cellIndex, disabled, onClick, value }: CellButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(cellIndex, value);
  }, [cellIndex, onClick, value]);

  return (
    <button
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--winner`]: isWinner
      })}
      disabled={disabled}
      onClick={handleClick}
      type="button"
    >
      {value}
    </button>
  );
};

export const CellButton = memo(CellButtonComponent);