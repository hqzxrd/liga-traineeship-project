import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from './TaskList.module.css';
import { Button } from 'components/button';
import { List, SearchForm } from 'app/taskList/components';
import { Pagination } from 'components/pagination';

export const TaskList: FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>TODO LIST</h1>
        <SearchForm />
      </header>

      <Button type="button">
        <Link to="/task_form">New task</Link>
      </Button>

      <List />

      <Pagination />
    </div>
  );
};
