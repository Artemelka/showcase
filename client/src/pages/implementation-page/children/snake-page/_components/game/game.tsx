import React, { PureComponent } from 'react';
import { fastClassNames3 } from '../../../../../../utils';
import { DIRECTION_KEYS_CODE, DIRECTION } from '../../constants';
import {
  checkApplePosition,
  checkStopGame,
  getDefaultSnakeState,
  getNextHead,
  getRandomApple,
} from '../../utils';
import { SnakeBodyItem, DirectionCode, State } from '../../types';
import { SnakeItem } from '../snake-item';
import style from './game.module.scss';

const cn = fastClassNames3(style);
const CLASS_NAME = 'Game';

type GameProps = {
  cellQuantity: number;
  gameSpeed: number;
  isRefresh: boolean;
  isStarted: boolean;
  onStopGame: () => void;
  onUpdateScore: () => void;
};

export class Game extends PureComponent<GameProps, State> {
  intervalId: any;

  constructor(props: GameProps) {
    super(props);

    this.state = getDefaultSnakeState(props.cellQuantity);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleDirectionChange);
  }

  componentDidUpdate(prevProps: Readonly<GameProps>) {
    if (prevProps.isStarted !== this.props.isStarted) {
      if (this.props.isStarted) {
        this.intervalId = setInterval(this.snakeStep, this.props.gameSpeed);
      } else {
        this.stopGame();
      }
    }

    const isRefresh = prevProps.isRefresh !== this.props.isRefresh;
    const isNewCellQuantity = prevProps.cellQuantity !== this.props.cellQuantity;

    if (isRefresh || isNewCellQuantity) {
      this.refreshGame();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDirectionChange);
    this.stopGame();
  }

  handleDirectionChange = ({ keyCode }: KeyboardEvent) => {
    if (this.props.isStarted && DIRECTION_KEYS_CODE.includes(keyCode)) {
        this.setState({ direction: DIRECTION[(keyCode as DirectionCode)] });
    }
  }

  refreshGame = () => {
    const defaultState = getDefaultSnakeState(this.props.cellQuantity);

    this.setState(defaultState);
  }

  setStep = (head: SnakeBodyItem, body: Array<SnakeBodyItem>) => {
    this.props.onUpdateScore();
    this.setState({
      appleItem: getRandomApple(body, this.props.cellQuantity),
      snakeBody: [head, ...body]
    });
  }

  stopGame = () => {
    clearInterval(this.intervalId);
    this.props.onStopGame();
  }

  snakeStep = () => {
    const { appleItem, cells, direction, snakeBody: body } = this.state;
    const head = getNextHead(body[0], direction);

    if (checkStopGame({ body, head, length: cells.length })) {
      this.stopGame();
      return;
    }

    if (checkApplePosition(appleItem, head)) {
      this.setStep(head, body)
      return;
    }

    this.setState({ snakeBody: [head, ...body.slice(0, -1)] });
  }

  render() {
    const { cells } = this.state;

    return (
      <table className={cn(CLASS_NAME)}>
        <tbody className={cn(`${CLASS_NAME}__body`)}>
        {cells.map(y => (
          <tr key={`row${y}`} className={cn(`${CLASS_NAME}__row`)}>
            {cells.map(x => (
              <td key={`cell${x}`} className={cn(`${CLASS_NAME}__cell`)}>
                <SnakeItem
                  appleItem={this.state.appleItem}
                  snakeBody={this.state.snakeBody}
                  x={x}
                  y={y}
                />
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}
