import React, { PureComponent } from 'react';
import { InputChangeEvent, SelectChangeEvent } from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../../../utils';
import {
  DIRECTION_KEYS_CODE,
  DIRECTION,
} from '../../constants';
import {
  checkFail,
  getDefaultSnakeState,
  getRandomApple,
} from '../../utils';
import { SnakeBodyItem, DirectionCode, State } from '../../types';
import { GameActions } from '../game-actions';
import { ScreenRow } from '../screen-row';
import style from './game.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game';

type GameProps = {};

export class Game extends PureComponent<GameProps, State> {
  intervalId: NodeJS.Timeout | undefined;

  constructor(props: GameProps) {
    super(props);

    this.state = getDefaultSnakeState();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleDirectionChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDirectionChange);
    this.stopGame();
  }

  eatApple = (head: SnakeBodyItem) => {
    this.updateScore();
    this.setState({
      appleItem: getRandomApple(this.state.snakeBody, this.state.cells.length),
      snakeBody: [head, ...this.state.snakeBody]
    });
  }

  getFail = () => {
    this.stopGame();
    this.setState({ isFail: true });
  }

  handleCellsChange = ({ value }: InputChangeEvent) => {
    const numberValue = Number(value);
    const nextCells = [...Array(numberValue)].map((_, index) => index);

    this.setState({...getDefaultSnakeState(nextCells.length), cells: nextCells });
  }

  handleDirectionChange = (event: KeyboardEvent) => {
    const { keyCode } = event;
    const isArrowKey = DIRECTION_KEYS_CODE.includes(keyCode);
    const isMirrorDirection = this.state.direction.mirror === keyCode;

    if (this.state.isStarted && isArrowKey && !isMirrorDirection) {
      event.preventDefault();
      this.setState({ direction: DIRECTION[(keyCode as DirectionCode)] });
    }
  }

  handleGameSpeedChange = ({ items }: SelectChangeEvent) => {
    this.setState({ gameSpeed: items });
  }

  handleStartClick = () => {
    if (this.state.isStarted) {
      this.stopGame();
    } else {
      this.intervalId = setInterval(this.snakeStep, this.state.gameSpeed[0].extraData.delay);
      this.setState({ isStarted: true });
    }
  }

  refreshGame = () => {
    const defaultState = getDefaultSnakeState();

    this.setState(defaultState);
  }

  stopGame = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.setState({ isStarted: false });
  }

  snakeStep = () => {
    const { appleItem, direction, snakeBody: body } = this.state;
    const head = {
      x: body[0].x + direction.x,
      y: body[0].y + direction.y,
    };

    if (checkFail({ body, head, length: this.state.cells.length })) {
      this.getFail();
      return;
    }

    if (appleItem.x === head.x && appleItem.y === head.y) {
      this.eatApple(head)
      return;
    }

    this.setState({ snakeBody: [head, ...body.slice(0, -1)] });
  }

  updateScore = () => {
    this.setState(({ score }) => ({ score: score + 1 }));
  }

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__container`)}>
          <GameActions
            cells={`${this.state.cells.length}`}
            gameSpeed={this.state.gameSpeed}
            isFail={this.state.isFail}
            isStarted={this.state.isStarted}
            onCellsChange={this.handleCellsChange}
            onGameSpeedChange={this.handleGameSpeedChange}
            onRefresh={this.refreshGame}
            onStartClick={this.handleStartClick}
            score={`${this.state.score}`}
          />
          <table className={cn(`${CLASS_NAME}__table`)}>
            <tbody className={cn(`${CLASS_NAME}__body`)}>
            {this.state.cells.map(y => (
              <ScreenRow
                key={`row${y}`}
                appleItem={this.state.appleItem}
                cells={this.state.cells}
                snakeBody={this.state.snakeBody}
                y={y}
              />
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
