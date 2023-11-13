import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './SearchForm.module.css';

import { TSearch } from './SearchForm.types';
import { validationSchema } from './SearchForm.schema';
import { Button } from 'components/Button';
import { Input } from 'components/Input/Input';

const SearchForm = () => {
  const [searchParams, setSearchParam] = useSearchParams(``);

  const { setValue, control, reset } = useForm<TSearch>({
    defaultValues: {
      searchValue: searchParams.get('name_like') ? (searchParams.get('name_like') as string) : ``,
    },
    resolver: yupResolver(validationSchema),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;

    setValue(`searchValue`, searchText);

    searchParams.set('name_like', searchText);

    if (!searchText) searchParams.delete('name_like');

    setSearchParam(searchParams);
  };

  const handleReset = () => {
    reset();
    searchParams.delete('name_like');
    setSearchParam(searchParams);
  };

  const handleClick = (setParam: string, value: string | number | boolean, deleteParams?: string[]) => {
    value = value.toString();

    if (deleteParams)
      deleteParams.forEach((str) => {
        searchParams.delete(str);
      });

    if (setParam && value) searchParams.set(setParam, value);
    setSearchParam(searchParams);
  };

  return (
    <form className={styles.searchForm}>
      <Controller
        control={control}
        name="searchValue"
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              placeholder="Search note..."
              onChange={handleChange}
              onClickReset={handleReset}
              value={field.value}
            />
            <div className={styles.error}>{error?.message}</div>
          </>
        )}
      />
      <div className={styles.filterButtons}>
        <Button
          type="button"
          onClick={() => {
            handleClick(``, ``, [`isCompleted`, 'isImportant']);
          }}>
          All
        </Button>
        <Button
          type="button"
          onClick={() => {
            handleClick(`isCompleted`, false, [`isImportant`]);
          }}>
          Active
        </Button>
        <Button
          type="button"
          onClick={() => {
            handleClick(`isCompleted`, true, ['isImportant']);
          }}>
          Done
        </Button>
        <Button
          type="button"
          onClick={() => {
            handleClick(`isImportant`, true, [`isCompleted`]);
          }}>
          Important
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
