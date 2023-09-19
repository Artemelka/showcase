import React, { memo } from 'react';
import { fastClassNames } from '@/utils';
import { CellButton } from '../cell-button';
import { SYMBOLS } from '../../constant';
import styles from './actions-buttons.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Action-button';

type ActionsButtonProps = {
  message?: string;
  onSymbolClick: (cellIndex: number, value: string) => void;
  onClear: () => void;
  disabled: boolean;
};

export const ActionsButtonComponent = ({
  message,
  onSymbolClick,
  onClear,
  disabled,
}: ActionsButtonProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      {!Boolean(message) ? (
        <>
          <h3>Choose symbol</h3>
          <div className={cn(`${CLASS_NAME}__actions`)}>
            {SYMBOLS.map((symbol, index) => (
              <CellButton
                key={`${index}`}
                cellIndex={index}
                onClick={onSymbolClick}
                value={symbol}
                disabled={disabled}
              />
            ))}
          </div>
        </>
      ) : (
        <button
          className={cn(`${CLASS_NAME}__reload`)}
          onClick={onClear}
          type="button"
        >
          New game
        </button>
      )}
    </div>
  );
};

export const ActionsButtons = memo(ActionsButtonComponent);