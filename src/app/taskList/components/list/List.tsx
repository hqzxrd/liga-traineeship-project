import { FC, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Task from '../task/Task';
import styles from './List.module.css';
import { TTask } from 'types/task.type';
import { useTypedSelector } from 'utils/useTypedSelector';

import { useAppDispatch } from 'store/store';
import { getAllTaskThunk } from 'store/task/Task.thunk';
import { Loader } from 'components/Loader/Loader';
import Error from 'components/error/Error';

const List: FC = () => {
  const { search } = useLocation();
  const dispatch = useAppDispatch();
  const { value: tasks, isLoading, error } = useTypedSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTaskThunk(search));
  }, [search]);

  if (error)
    return (
      <Error>
        <p>{error}</p>
      </Error>
    );

  // if (!tasks) return <p>Not Found</p>;

  if (isLoading) return <Loader />;

  return (
    <div className={styles.tasks}>
      {tasks.map((task: TTask, i) => {
        return <Task key={task.id} index={i + 1} task={task} />;
      })}
    </div>
  );
};

export default List;
