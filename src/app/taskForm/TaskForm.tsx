import { useParams, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './TaskForm.module.css';
import { validationSchema } from './TaskForm.chema';
import { Button } from 'components/Button';
import { useTypedSelector } from 'utils/useTypedSelector';
import { createTaskThunk, updateTaskThunk } from 'store/task/Task.thunk';
import { useAppDispatch } from 'store/store';
import { Input } from 'components/Input/Input';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { TTaskForm } from 'types/task.type';
const defaultValues: TTaskForm = {
  name: ``,
  info: ``,
  isCompleted: false,
  isImportant: false,
};

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const tasks = useTypedSelector((state) => state.tasks.value);
  const { id } = useParams();
  const nav = useNavigate();

  const { handleSubmit, setValue, control, watch } = useForm<TTaskForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const isCompleted = watch(`isCompleted`);

  const addTask = ({ name, info, isCompleted, isImportant }: TTaskForm) => {
    if (!name && !info) return;

    dispatch(createTaskThunk({ name, info, isImportant, isCompleted }));
    nav(`/`, { replace: true });
  };

  const changeTask = ({ name, info, isCompleted, isImportant }: TTaskForm) => {
    if (!name && !info) return;

    if (id) {
      const taskId = +id;
      dispatch(updateTaskThunk(taskId, { name, info, isImportant, isCompleted }));
      nav(`/`, { replace: true });
    }
  };

  const onChangeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(`name`, e.target.value);
  };
  const onChangeInfoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(`info`, e.target.value);
  };

  const onChangeImportantCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(`isImportant`, e.target.checked);
  };

  const onChangeCompletedCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(`isCompleted`, e.target.checked);
  };

  useEffect(() => {
    if (!id) return;

    tasks.forEach((task) => {
      if (task.id !== +id) return;

      setValue(`name`, task.name);
      setValue(`info`, task.info);
      setValue(`isImportant`, task.isImportant);
      setValue(`isCompleted`, task.isCompleted);
    });
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(id ? changeTask : addTask)}>
      <h4>{id ? `Change` : `Add`} task</h4>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <div>
            <label htmlFor="name">Title</label>
            <Input onChange={onChangeNameInput} value={field.value} />
            <div className={styles.error}>{error?.message}</div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="info"
        render={({ field, fieldState: { error } }) => (
          <div>
            <label htmlFor="info">Description</label>
            <Input name="info" onChange={onChangeInfoInput} value={field.value} />

            <div className={styles.error}>{error?.message}</div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="isImportant"
        render={({ field, fieldState: { error } }) => (
          <div>
            <Checkbox
              disabled={isCompleted}
              label="Important"
              onChange={onChangeImportantCheckbox}
              checked={field.value}
            />
            <div className={styles.error}>{error?.message}</div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="isCompleted"
        render={({ field, fieldState: { error } }) => (
          <div>
            <Checkbox label="Complete" onChange={onChangeCompletedCheckbox} checked={field.value} />
            <div className={styles.error}>{error?.message}</div>
          </div>
        )}
      />

      <Button addClassName={styles.button} type="submit">
        {id ? `Change task` : `Add task`}
      </Button>
    </form>
  );
};

export default TaskForm;
