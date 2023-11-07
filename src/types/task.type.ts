export type TTask = {
  name: string;
  info: string;
  isCompleted: boolean;
  isImportant: boolean;
  id: number;
};

export type TTaskForm = Omit<TTask, 'isCompleted' | 'id'>;
