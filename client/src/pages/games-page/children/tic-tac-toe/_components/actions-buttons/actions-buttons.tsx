import React, { memo } from 'react';
import { Button } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { CellButton } from '../cell-button';
import { SYMBOLS } from '../../constant';
import styles from './actions-buttons.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Action-button';

type ActionsButtonProps = {
  disabled: boolean;
  isNewGameButton?: boolean;
  onClear: () => void;
  onSymbolClick: (cellIndex: number, value: string) => void;
  userSymbol: string;
};

export const ActionsButtonComponent = ({
  disabled,
  isNewGameButton,
  onClear,
  onSymbolClick,
  userSymbol,
}: ActionsButtonProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      {isNewGameButton ? (
        <div className={cn(`${CLASS_NAME}__reload`)}>
          <Button
            onClick={onClear}
            value="New game"
            size="big"
            themeColor="error"
          />
        </div>
      ) : (
        <>
          <h3>Choose symbol</h3>
          <div className={cn(`${CLASS_NAME}__actions`)}>
            {SYMBOLS.map((symbol, index) => (
              <CellButton
                isWinner={userSymbol === symbol}
                key={`${index}`}
                cellIndex={index}
                onClick={onSymbolClick}
                value={symbol}
                disabled={disabled}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const ActionsButtons = memo(ActionsButtonComponent);