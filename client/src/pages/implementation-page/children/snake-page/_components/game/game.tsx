import React, { PureComponent } from 'react';
import { SelectChangeEvent } from '@artemelka/react-components';
import { fastClassNames3 } from '../../../../../../utils';
import {
  CELL_QUANTITY,
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
import { GameScreen } from '../game-screen';
import style from './game.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game';

type GameProps = {};

export class Game extends PureComponent<GameProps, State> {
  intervalId: NodeJS.Timeout | undefined;

  gameCells: Array<number>;

  constructor(props: GameProps) {
    super(props);

    this.state = getDefaultSnakeState();
    this.gameCells = [...Array(CELL_QUANTITY)].map((_, index) => index);
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
      appleItem: getRandomApple(this.state.snakeBody),
      snakeBody: [head, ...this.state.snakeBody]
    });
  }

  getFail = () => {
    this.stopGame();
    this.setState({ isFail: true });
  }

  handleDirectionChange = (event: KeyboardEvent) => {
    const { keyCode } = event;
    const isArrowKey = DIRECTION_KEYS_CODE.includes(keyCode);
    const isMirrorDirection = this.state.direction.mirror === keyCode;

    event.preventDefault();

    if (this.state.isStarted && isArrowKey && !isMirrorDirection) {
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

    if (checkFail({ body, head, length: this.gameCells.length })) {
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
            gameSpeed={this.state.gameSpeed}
            isFail={this.state.isFail}
            isStarted={this.state.isStarted}
            onGameSpeedChange={this.handleGameSpeedChange}
            onRefresh={this.refreshGame}
            onStartClick={this.handleStartClick}
            score={`${this.state.score}`}
          />
          <div className={cn(`${CLASS_NAME}__screen`)}>
            <GameScreen
              appleItem={this.state.appleItem}
              cells={this.gameCells}
              snakeBody={this.state.snakeBody}
            />
          </div>
        </div>
      </div>
    );
  }
}
