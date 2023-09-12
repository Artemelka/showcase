import React, { memo, useCallback } from 'react';
import { fastClassNames } from '@/utils';
import styles from './cell-button.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'cell-button';

type CellButtonProps = {
  rowIndex: number;
  cellIndex: number;
  onClick: (cellIndex: number, rowIndex: number, value: string) => void;
  value: string;
  disabled: boolean;
};

export const CellButtonComponent = ({ cellIndex, disabled, rowIndex, onClick, value }: CellButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(rowIndex, cellIndex, value);
  }, [cellIndex, rowIndex, onClick, value]);

  return (
    <button
      className={cn(CLASS_NAME)}
      disabled={disabled}
      onClick={handleClick}
      type="button"
    >
      {value}
    </button>
  );
};

export const CellButton = memo(CellButtonComponent);