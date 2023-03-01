import React, { memo, useCallback, useMemo } from 'react';
import { fastClassNames } from '@/utils';
import { getRandomDigit } from '../../_utils';
import styles from './column-button.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Column-button';

type BaseProps = {
  columnIndex: number;
  rowIndex: number;
}

export type ClickParams = BaseProps & {
  digit: number;
}

type ColumnButtonProps = BaseProps & {
  onClick: (params: ClickParams) => void;
  disabled: boolean;
  isHideContent: boolean;
};

export const ColumnButtonComponent = ({
  columnIndex,
  rowIndex,
  onClick,
  disabled,
  isHideContent,
}: ColumnButtonProps) => {
  const digit = useMemo(() => getRandomDigit(), []);

  const handleClick = useCallback(() => {
    onClick({ columnIndex, rowIndex, digit });
  }, [columnIndex, onClick, rowIndex, digit]);

  return (
    <button
      className={cn(CLASS_NAME)}
      type="button"
      disabled={disabled || isHideContent}
      onClick={handleClick}
    >
      {isHideContent ? '' : digit}
    </button>
  );
};

export const ColumnButton = memo(ColumnButtonComponent);