import { useSearchParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { FC } from 'react';
import styles from './SearchForm.module.css';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { TSearch } from 'app/taskList/components/searchForm';

export const SearchForm: FC = () => {
  const [searchParams, setSearchParam] = useSearchParams(``);

  const { setValue, control } = useForm<TSearch>({
    defaultValues: {
      searchValue: searchParams.get('name_like') ? (searchParams.get('name_like') as string) : ``,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;

    setValue(`searchValue`, searchText);

    searchParams.set('name_like', searchText);

    if (!searchText) searchParams.delete('name_like');

    setSearchParam(searchParams);
  };

  const handleReset = () => {
    setValue(`searchValue`, ``);
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
