import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { push as pushAction } from 'connected-react-router';
import { ButtonMouseEvent, Card } from '@artemelka/react-components';
import { fastClassNames } from '@/utils';
import { DRUNKARD_CHILDREN_PATH } from '../../constants';
import style from './drunkard-home-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'Drunkard-home-page';
const BUTTON_LABEL = 'show';

const mapDispatchToProps = {
  push: pushAction,
};

type DrunkardHomePageProps = typeof mapDispatchToProps;

export const DrunkardHomePageComponent = ({ push }: DrunkardHomePageProps) => {
  const handleButtonClick = useCallback(
    ({ id }: ButtonMouseEvent) => {
      push(`${id}`);
    },
    [push],
  );

  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__card`)}>
        <Card
          buttonLabel={BUTTON_LABEL}
          content="game implementation on react functional component"
          id={DRUNKARD_CHILDREN_PATH.FC}
          onClick={handleButtonClick}
          positionIndex="1"
          themeColor="primary"
          title="Drunkard FC"
        />
      </div>
      <div className={cn(`${CLASS_NAME}__card`)}>
        <Card
          buttonLabel={BUTTON_LABEL}
          content="game implementation on react class component"
          id={DRUNKARD_CHILDREN_PATH.CL}
          onClick={handleButtonClick}
          positionIndex="2"
          themeColor="primary"
          title="Drunkard Class"
        />
      </div>
    </div>
  );
};

export const DrunkardHomePage = connect(
  null,
  mapDispatchToProps,
)(DrunkardHomePageComponent);
