import React, { memo } from 'react';
import { connect } from 'react-redux';
import { fastClassNames3 } from '../../../../../../utils';
import { gameIsAppleItemSelector, gameIsSnakeItemSelector } from '../../redux';
import { AppStoreWithGame } from '../../types';
import style from './snake-item.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Snake-item';

type MapStateToProps = {
  isApple: boolean;
  isSnakeItem: boolean;
}

type Props = {
  x: number;
  y: number;
}

type SnakeItemProps = MapStateToProps & Props;

export const SnakeItem = memo(({
  isApple,
  isSnakeItem,
}: SnakeItemProps) => (
  <div
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--apple`]: isApple,
      [`${CLASS_NAME}--filled`]: isSnakeItem
    })}
  />
));

const mapStateToProps = (state: AppStoreWithGame, ownProps: Props): MapStateToProps => {
  return ({
    isApple: gameIsAppleItemSelector(state, ownProps),
    isSnakeItem: gameIsSnakeItemSelector(state, ownProps),
  });
}

export const ConnectedSnakeItem = connect(mapStateToProps)(SnakeItem);