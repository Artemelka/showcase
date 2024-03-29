import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { ButtonMouseEvent, Card } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';
import style from './snake-home-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Snake-home-page';

const BUTTON_LABEL = 'show';
const DESCRIPTION =
  'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является станд...';

const mapDispatchToProps = {
  push,
};

type SnakeHomePageProps = typeof mapDispatchToProps;

class SnakeHomePage extends Component<SnakeHomePageProps> {
  handleButtonClick = ({ id }: ButtonMouseEvent) => {
    this.props.push(`${id}`);
  };

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__card`)}>
          <Card
            buttonLabel={BUTTON_LABEL}
            content={DESCRIPTION}
            id={SNAKE_GAME_CHILDREN_PATH.REACT}
            onClick={this.handleButtonClick}
            positionIndex="1"
            themeColor="primary"
            title="Pure React"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__card`)}>
          <Card
            buttonLabel={BUTTON_LABEL}
            content={DESCRIPTION}
            id={SNAKE_GAME_CHILDREN_PATH.REDUX}
            onClick={this.handleButtonClick}
            positionIndex="2"
            themeColor="primary"
            title="Pure Redux"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__card`)}>
          <Card
            buttonLabel={BUTTON_LABEL}
            content={DESCRIPTION}
            id={SNAKE_GAME_CHILDREN_PATH.TOOLKIT}
            onClick={this.handleButtonClick}
            positionIndex="3"
            themeColor="primary"
            title="With toolkit"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__card`)}>
          <Card
            buttonLabel={BUTTON_LABEL}
            content={DESCRIPTION}
            id={SNAKE_GAME_CHILDREN_PATH.MOBX}
            onClick={this.handleButtonClick}
            positionIndex="4"
            themeColor="primary"
            title="MobX"
          />
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SnakeHomePage);
