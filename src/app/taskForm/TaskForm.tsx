import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './TaskForm.module.css';
import { Button } from 'components/Button';
import { Input } from 'components/Input';

const TaskForm = () => {
  const { id } = useParams();
  const [name, setName] = useState(``);
  const [info, setInfo] = useState(``);

  return (
    <form className={styles.form}>
      <h4>{id ? `Изменить` : `Добавить`} задачу</h4>
      <label htmlFor="Title">Title</label>
      <Input onChange={(e) => setName(e.target.value)} value={name} />
      <label htmlFor="Description">Description</label>
      <Input onChange={(e) => setInfo(e.target.value)} value={info} />
      {id ? (
        <Button type="button" buttonClassName={styles.button}>
          Изменить
        </Button>
      ) : (
        <Button type="button" buttonClassName={styles.button}>
          Добавить
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
