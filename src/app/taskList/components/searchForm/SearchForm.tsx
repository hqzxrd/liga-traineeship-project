import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchForm.module.css';

import { Button } from 'components/Button';
import { Input } from 'components/Input/Input';

const SearchForm = () => {
  const [searchParams, setSearchParam] = useSearchParams(``);
  const [text, setText] = useState(() => {
    if (searchParams.get('name_like')) {
      return searchParams.get('name_like') as string;
    } else {
      return ``;
    }
  });

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
