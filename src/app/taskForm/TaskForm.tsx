import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './TaskForm.module.css';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { changeTaskAction, createTaskAction } from 'store/actions/Task.action';

const TaskForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState(``);
  const [info, setInfo] = useState(``);

  const addTask = () => {
    dispatch(createTaskAction({ name, info, isImportant: false }));
    nav(`/`, { replace: true });
  };

  const changeTask = () => {
    if (id) {
      const taskId = +id;
      dispatch(changeTaskAction({ id: taskId, name, info, isImportant: false }));
      nav(`/`, { replace: true });
    }
  };

  return (
    <form className={styles.form}>
      <h4>{id ? `Change` : `Add`} task</h4>
      <label htmlFor="Title">Title</label>
      <Input onChange={(e) => setName(e.target.value)} value={name} />
      <label htmlFor="Description">Description</label>
      <Input onChange={(e) => setInfo(e.target.value)} value={info} />
      {id ? (
        <Button addClassName={styles.button} type="button" onClick={() => changeTask()}>
          Change
        </Button>
      ) : (
        <Button addClassName={styles.button} type="button" onClick={() => addTask()}>
          Add
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
