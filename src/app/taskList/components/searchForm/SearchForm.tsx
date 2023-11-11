import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchForm.module.css';

import { Button } from 'components/Button';
import { Input } from 'components/Input/Input';

const SearchForm = () => {
  const [text, setText] = useState(``);
  const [seatchParam, setSearchParam] = useSearchParams(``);

  return (
    <form className={styles.searchForm}>
      <Input
        placeholder="Search note..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        onClickReset={() => setText(``)}
      />
      <div className={styles.filterButtons}>
        <Button type="button" onClick={() => setSearchParam(``)}>
          All
        </Button>
        <Button type="button" onClick={() => setSearchParam(`isCompleted=false`)}>
          Active
        </Button>
        <Button type="button" onClick={() => setSearchParam(`isCompleted=true`)}>
          Done
        </Button>
        <Button type="button" onClick={() => setSearchParam(`isImportant=true`)}>
          Important
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
