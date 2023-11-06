import { TTask } from 'types/task.type';

const initState: TTask = {
  id: 0,
  name: ``,
  info: ``,
  isCompleted: false,
  isImportant: false,
};

const TaskReducer = (state = initState, action: { type: string; task: TTask }) => {
  switch (action.type) {
    case `SET_TASK`:
      return (state = action.task);
    default:
      return state;
  }
};

export default TaskReducer;
