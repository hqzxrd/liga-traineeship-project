import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchForm.module.css';

import { Button } from 'components/Button';
import { Input } from 'components/Input/Input';

const SearchForm = () => {
  const [text, setText] = useState('');
  const [searchParams, setSearchParam] = useSearchParams(``);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;

    setText(searchText);

    searchParams.set('name_like', searchText);

    if (!searchText) searchParams.delete('name_like');

    setSearchParam(searchParams);
  };

  const handleReset = () => {
    setText(``);
    searchParams.delete('name_like');
    setSearchParam(searchParams);
  };

  const handleClick = (param: string, value: string | number | boolean) => {
    value = value + ``;
    searchParams.set(param, value);
    setSearchParam(searchParams);
  };

  return (
    <form className={styles.searchForm}>
      <Input
        placeholder="Search note..."
        onChange={(e) => handleChange(e)}
        value={text}
        onClickReset={() => handleReset()}
      />
      <div className={styles.filterButtons}>
        <Button
          type="button"
          onClick={() => {
            searchParams.delete('isCompleted');
            searchParams.delete('isImportant');
            setSearchParam(searchParams);
          }}>
          All
        </Button>
        <Button
          type="button"
          onClick={() => {
            searchParams.delete('isImportant');
            handleClick(`isCompleted`, false);
          }}>
          Active
        </Button>
        <Button
          type="button"
          onClick={() => {
            searchParams.delete('isImportant');
            handleClick(`isCompleted`, true);
          }}>
          Done
        </Button>
        <Button
          type="button"
          onClick={() => {
            searchParams.delete('isCompleted');
            handleClick(`isImportant`, true);
          }}>
          Important
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
