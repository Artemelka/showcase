import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, Push } from 'connected-react-router';
import { ButtonMouseEvent, Card } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { SNAKE_GAME_CHILDREN_PATH } from '../../constants';
import style from './snake-home-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Snake-home-page';

const BUTTON_LABEL = 'show';
const DESCRIPTION = 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является станд...'

type MapDispatchToProps = {
  push: Push
}
type SnakeHomePageProps = MapDispatchToProps;

class SnakeHomePage extends Component<SnakeHomePageProps> {
  handleButtonClick = ({ id }: ButtonMouseEvent) => {
    this.props.push(`${id}`)
  }

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__card`)}>
          <Card
            id={SNAKE_GAME_CHILDREN_PATH.REACT}
            onClick={this.handleButtonClick}
            title="Pure React"
            buttonLabel={BUTTON_LABEL}
            content={DESCRIPTION}
            positionIndex="1"
            themeColor="primary"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__card`)}>
          <Card
            id={SNAKE_GAME_CHILDREN_PATH.REDUX}
            onClick={this.handleButtonClick}
            title="Pure Redux"
            buttonLabel={BUTTON_LABEL}
            content={DESCRIPTION}
            positionIndex="2"
            themeColor="primary"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__card`)}>
          <Card
            id={SNAKE_GAME_CHILDREN_PATH.TOOLKIT}
            onClick={this.handleButtonClick}
            title="With toolkit"
            buttonLabel={BUTTON_LABEL}
            content={DESCRIPTION}
            positionIndex="3"
            themeColor="primary"
          />
        </div>
        <div className={cn(`${CLASS_NAME}__card`)}>
          <Card
            id={SNAKE_GAME_CHILDREN_PATH.MOBX}
            onClick={this.handleButtonClick}
            title="MobX"
            buttonLabel={BUTTON_LABEL}
            content={DESCRIPTION}
            positionIndex="4"
            themeColor="primary"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps = {
  push
}

export default connect(null, mapDispatchToProps)(SnakeHomePage);