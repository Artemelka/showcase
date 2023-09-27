import React, { memo, useCallback, useMemo, useState } from 'react';
import { Text } from '@artemelka/react-components';
import { Page } from '@/components';
import { fastClassNames } from '@/utils';
import { DataTable, AddFlatItemForm, NestedList } from './_components';
import { checkFormErrors, convertFormValuesToItem, convertFlatToNested } from './_utils';
import { INITIAL_VALUES, INITIAL_ERRORS } from './constants';
import { FlatItemData } from './types';
import style from './flat-to-nested.module.scss';

const cn = fastClassNames(style);
const CLASS_NAME = 'flat-to-nested-page';

const EXAMPLE: Array<FlatItemData> = [
  {id: 1, name: 'Home' },
  {id: 2, parentId: 1, name: 'Settings' },
  {id: 4, parentId: 3, name: 'Goals' },
  {id: 3, parentId: 2, name: 'Policy' },
  {id: 7, parentId: 1, name: 'Settings 2' },
  {id: 5, parentId: 3, name: 'Goals 2' },
  {id: 6, parentId: 2, name: 'Policy 2' },
];

export const FlatToNestedPage = () => {
  const [flatItems, setFlatItems] = useState(EXAMPLE);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = useCallback((value) => {
    setValues(prevValues => ({
      ...prevValues,
      ...value,
    }))
    setErrors(INITIAL_ERRORS);
  }, []);

  const handleSubmit = useCallback((values: typeof INITIAL_VALUES) => {
    const errors = checkFormErrors(values, flatItems);

    if (Object.keys(errors).length) {
      setErrors(prevErrors => ({
        ...prevErrors,
        ...errors,
      }));

      return;
    }

    const item = convertFormValuesToItem(values);

    setFlatItems(prevItems => ([...prevItems, item]))
    setValues(INITIAL_VALUES);
  }, [flatItems]);

  const nestedList = useMemo(() => convertFlatToNested(flatItems), [flatItems]);

  return (
    <Page
      headTitle="Flat to nested"
      title="Flat to nested data"
    >
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__col`)}>
          <div className={cn(`${CLASS_NAME}__heading`)}>
            <Text tagName="h3" align="center">Flat data</Text>
          </div>
          <DataTable items={flatItems}/>
        </div>
        <div className={cn(`${CLASS_NAME}__col`)}>
          <div className={cn(`${CLASS_NAME}__heading`)}>
            <Text tagName="h3" align="center">Add flat item</Text>
          </div>
          <AddFlatItemForm
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            values={values}
          />
        </div>
        <div className={cn(`${CLASS_NAME}__result`)}>
          <div className={cn(`${CLASS_NAME}__heading`)}>
            <Text tagName="h3" align="center">Nested data result</Text>
          </div>
          <NestedList list={nestedList}/>
        </div>
      </div>
    </Page>
  );
};

export default memo(FlatToNestedPage);