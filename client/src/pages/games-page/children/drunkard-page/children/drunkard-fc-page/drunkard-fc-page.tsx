import React, { memo, useCallback, useEffect, useState } from 'react';
import { getMixArray } from '@/utils';
import { CARD_DECK } from '@/pages/games-page/_constants/cards';
import { CardParams } from '@/pages/games-page/types';
import { GameView } from '../../_components';
import { getWinner, getIsPlayerLoose, getIsSkipCheck } from '../../_utils';

const DECK = [...CARD_DECK];

type Cards = Array<CardParams>;

export const DrunkardFcPageComponent = () => {
  const [enemyBank, setEnemyBank] = useState<Cards>([]);
  const [enemyField, setEnemyField] = useState<Cards>([]);
  const [playerField, setPlayerField] = useState<Cards>([]);
  const [playerBank, setPlayerBank] = useState<Cards>([]);
  const [isInit, setIsInit] = useState(false);
  const [isUserStep, setIsUserStep] = useState(false);

  // Init game
  useEffect(() => {
    if (!isInit) {
      const deck = getMixArray(DECK);

      setEnemyBank(deck.slice(0, 18));
      setPlayerBank(deck.slice(18, 36));
      setIsInit(true);
    }
  }, [isInit]);

  const clearFields = useCallback(() => {
    setEnemyField([]);
    setPlayerField([]);
  }, []);

  const setWinner = useCallback((winner: 'player' | 'enemy') => {
    /* eslint-disable no-console */
    console.log(winner, 'win!');
  }, []);

  const setEnemyStep = useCallback(() => {
    const tempBank = [...enemyBank];
    const card = tempBank.splice(0, 1)[0];

    setEnemyField((prevField) => [...prevField, card]);
    setEnemyBank(tempBank);
    setIsUserStep(true);
  }, [enemyBank]);

  useEffect(() => {
    if (!isInit) {
      return;
    }

    const isEmptyFields = !enemyField.length && !playerField.length;
    const winner = getWinner({ playerBank, enemyBank });

    if (isEmptyFields && winner) {
      setWinner(winner);

      return;
    }

    const isSkipCheck = getIsSkipCheck({ enemyField, playerField });

    if (!isSkipCheck) {
      const isPlayerLoose = getIsPlayerLoose({ enemyField, playerField });
      const action = isPlayerLoose ? setPlayerBank : setEnemyBank;

      action((prevBank) => [...prevBank, ...enemyField, ...playerField]);
      clearFields();

      return;
    }

    if (!isUserStep) {
      setEnemyStep();
    }
  }, [
    setWinner,
    clearFields,
    enemyBank,
    enemyField,
    isInit,
    isUserStep,
    playerBank,
    playerField,
    setEnemyStep,
  ]);

  const handlePlayerClick = useCallback(() => {
    const tempBank = [...playerBank];
    const card = tempBank.splice(0, 1)[0];

    setPlayerField((prevField) => [...prevField, card]);
    setPlayerBank(tempBank);
    setIsUserStep(false);
  }, [playerBank]);

  return (
    <GameView
      enemyBank={enemyBank}
      enemyField={enemyField}
      isPlayerBankDisabled={!isUserStep}
      onPlayerClick={handlePlayerClick}
      playerBank={playerBank}
      playerField={playerField}
    />
  );
};

export const DrunkardFcPage = memo(DrunkardFcPageComponent);
