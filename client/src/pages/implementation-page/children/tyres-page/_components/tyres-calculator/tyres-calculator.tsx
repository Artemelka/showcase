import React, { memo, useState, useCallback } from 'react';
import {
  Input,
  Label,
  SelectChangeEvent,
  DropdownItemParams,
} from '@artemelka/react-components';
import { FilterSelect } from '@/components';
import { fastClassNames } from '@/utils';
import { TYRE_WIDTHS, ASPECT_RATIOS } from '../../constants';
import { getTyreHeight } from '../../utils';
import styles from './tyres-calculator.module.scss';

const cn = fastClassNames(styles);
const CLASS_NAME = 'Tyres-calculator';

const TYRE_WIDTH_OPTIONS = TYRE_WIDTHS.map((value) => ({ id: value, value }));
const ASPECT_RATIO_OPTIONS = ASPECT_RATIOS.map((value) => ({
  id: value,
  value,
}));
const INPUT_HEIGHT_ID = 'height';

type TyresCalculatorProps = {
  index?: number;
};

export const TyresCalculatorComponent = ({
  index = 0,
}: TyresCalculatorProps) => {
  const [tyreWidthOption, setTyreWidthOption] = useState<
    Array<DropdownItemParams>
  >([]);
  const [aspectRatioOption, setAspectRatioOption] = useState<
    Array<DropdownItemParams>
  >([]);

  const handleChangeWidth = useCallback((event: SelectChangeEvent) => {
    setTyreWidthOption(event.items);
  }, []);

  const handleChangeAspectRatio = useCallback((event: SelectChangeEvent) => {
    setAspectRatioOption(event.items);
  }, []);

  const height = getTyreHeight(tyreWidthOption, aspectRatioOption);
  const heightId = `${INPUT_HEIGHT_ID}_${index}`;

  return (
    <form className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <FilterSelect
          id={`tyreWidth_${index}`}
          label="Tyre width"
          name="tyre-width"
          onChange={handleChangeWidth}
          options={TYRE_WIDTH_OPTIONS}
          values={tyreWidthOption}
        />
      </div>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <FilterSelect
          id={`aspectRatio_${index}`}
          label="Aspect Ratio"
          name="aspect-ratio"
          onChange={handleChangeAspectRatio}
          options={ASPECT_RATIO_OPTIONS}
          values={aspectRatioOption}
        />
      </div>
      <div className={cn(`${CLASS_NAME}__input`)}>
        <Label htmlFor={heightId} size="small">
          Height
        </Label>
        <Input
          id={heightId}
          name="height"
          size="small"
          themeColor="primary"
          value={height}
        />
      </div>
    </form>
  );
};

export const TyresCalculator = memo(TyresCalculatorComponent);
