import { useState } from 'react';
import styles from './SearchForm.module.css';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

const SearchForm = () => {
  const [text, setText] = useState(``);

  return (
    <form className={styles.searchForm}>
      <Input
        placeholder="Search note..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        onClickReset={() => setText(``)}
      />
      <div className={styles.filterButtons}>
        <Button type="button">All</Button>
        <Button type="button">Active</Button>
        <Button type="button">Done</Button>
        <Button type="button">Important</Button>
      </div>
    </form>
  );
};

export default SearchForm;
