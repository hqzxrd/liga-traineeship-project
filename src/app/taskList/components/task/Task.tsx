import { Link } from 'react-router-dom';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Task.module.css';
import { ITaskProps } from './Task.types';
import { Checkbox } from 'components/Checkbox';
import { Button } from 'components/Button';
import { deleteTaskAction } from 'store/actions/Task.action';

const Task: FC<ITaskProps> = ({ task, index }) => {
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(deleteTaskAction(task.id));
  };

  return (
    <div className={styles.task}>
      <Checkbox label="" />
      <div className={styles.main}>
        <h4>№{`${index}. ${task.name}`}</h4>
        <p>{task.info}</p>
      </div>
      <div className={styles.taskInteractionBtns}>
        <Button>
          <Link to={`task_form/${task.id}`}>Change</Link>
        </Button>
        <Button type="button" onClick={() => deleteTask()}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Task;
