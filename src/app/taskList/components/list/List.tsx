import { FC } from 'react';
import Task from '../task/Task';
import styles from './List.module.css';
import data from 'mocks/tasks.json';
import { TTask } from 'types/task.type';

const tasks = data as TTask[];

const List: FC = () => {
  return (
    <div className={styles.tasks}>
      {tasks.map((task: TTask) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default List;
