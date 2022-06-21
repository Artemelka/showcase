import React, { memo, useState, useCallback } from 'react';
import {
  Clock,
  CLOCK_TIME_ZONES,
  Text,
  DropdownItemParams,
} from '@artemelka/react-components';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { TimeZoneList } from './_components';
import style from './world-time-page.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'world-time-page';
const REGIONS = Object.keys(CLOCK_TIME_ZONES);

export const WorldTimePageComponent = () => {
  const [timeZoneOption, setTimeZone] = useState<DropdownItemParams>({id: 'Europe/Moscow', value: 'Europe/Moscow'});
  const [regionOption, setRegion] = useState<DropdownItemParams | null>(null);
  console.log('=== CLOCK_TIME_ZONES ===', CLOCK_TIME_ZONES);
  const setTime = useCallback((cityOption: DropdownItemParams) => {
    const timeZone = `${regionOption?.value}/${cityOption.value}`;

    setTimeZone({ id: timeZone, value: timeZone });
  }, [regionOption]);

  const handleSelect = useCallback((name: string) => {
    const option = { id: name, value: name };
    const method = regionOption ? setTime : setRegion;

    method(option);
  }, [regionOption, setTime]);

  const handleGoBack = useCallback(() => setRegion(null), []);

  return (
    <Page title="World time">
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__time`)}>
          <Text tagName="p" align="center">{timeZoneOption.value}</Text>
          <div className={cn(`${CLASS_NAME}__clock`)}>
              {/*<Clock timeZone={timeZoneOption.value} />*/}
          </div>
        </div>
        <div className={cn(`${CLASS_NAME}__countries`)}>
          <TimeZoneList
            isGoBackDisabled={!regionOption}
            items={regionOption ? CLOCK_TIME_ZONES[regionOption?.value] : REGIONS}
            onGoBack={handleGoBack}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </Page>

  );
};

const WorldTimePage = memo(WorldTimePageComponent);

export default WorldTimePage;