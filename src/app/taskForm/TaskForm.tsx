import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChangeEvent, FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './TaskForm.module.css';
import { Button } from 'components/button';
import { useTypedSelector } from 'utils/useTypedSelector';
import { createTaskThunk, getByIdTaskThunk, updateTaskThunk } from 'store/task/Task.thunk';
import { useAppDispatch } from 'store/store';
import { Input } from 'components/input/Input';
import { Checkbox } from 'components/checkbox/Checkbox';
import { TTaskForm } from 'types/task.type';
import { Error } from 'components/error';
import { validationSchema } from 'app/taskForm';

const defaultValues: TTaskForm = {
  name: ``,
  info: ``,
  isCompleted: false,
  isImportant: false,
};

export const TaskForm: FC = () => {
  const dispatch = useAppDispatch();
  const { error } = useTypedSelector((state) => state.tasks);
  const { id } = useParams();
  const nav = useNavigate();

  const { handleSubmit, setValue, control, watch } = useForm<TTaskForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const isCompleted = watch(`isCompleted`);

  const addTask = async ({ name, info, isCompleted, isImportant }: TTaskForm) => {
    if (!name && !info) return;

    const res = await dispatch(createTaskThunk({ name, info, isImportant, isCompleted }));

    if (res && res.status === 201) nav(`/`, { replace: true });
  };

  const changeTask = async ({ name, info, isCompleted, isImportant }: TTaskForm) => {
    if (!name && !info) return;

    if (id) {
      const taskId = +id;
      const res = await dispatch(updateTaskThunk(taskId, { name, info, isImportant, isCompleted }));
      if (res && res.status === 200) nav(`/`, { replace: true });
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
    if (e.target.checked) setValue(`isImportant`, false);
    setValue(`isCompleted`, e.target.checked);
  };

  useEffect(() => {
    const fetchTaskById = async () => {
      if (!id) return;

      const res = await dispatch(getByIdTaskThunk(+id));

      if (res?.status !== 200) return;

      setValue(`name`, res.data.name);
      setValue(`info`, res.data.info);
      setValue(`isImportant`, res.data.isImportant);
      setValue(`isCompleted`, res.data.isCompleted);
    };

    fetchTaskById();
  }, []);

  if (error)
    return (
      <Error>
        <p>{error}</p>
        <Button>
          <Link to="/">Back</Link>
        </Button>
      </Error>
    );

  return (
    <form className={styles.form} onSubmit={handleSubmit(id ? changeTask : addTask)}>
      <h4 className={styles.head}>{id ? `CHANGE` : `ADD`} TASK</h4>
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
            <Input onChange={onChangeInfoInput} value={field.value} />

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
