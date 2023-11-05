import { Link } from 'react-router-dom';
import styles from './TaskList.module.css';
import SearchForm from './components/searchForm/SearchForm';
import List from './components/list/List';
import { Button } from 'components/Button';

const TaskList = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>TODO LIST</h1>
        <SearchForm />
      </header>
      <List />

      <Button type="button">
        <Link to="/task_form">New task</Link>
      </Button>
    </div>
  );
};

export default TaskList;
