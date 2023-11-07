import { TaskAction, TaskActionsType } from './Task.types';
import { TTask } from 'types/task.type';

const TaskReducer = (state: TTask[] = [], action: TaskAction): TTask[] => {
  switch (action.type) {
    case TaskActionsType.CREATE:
      return [...state, action.payload];

    case TaskActionsType.CHANGE: {
      state.forEach((task, i) => {
        if (task.id !== action.payload.id) return;

        state[i] = { ...action.payload };
      });

      return [...state];
    }

    case TaskActionsType.DELETE: {
      const filtered = state.filter((task) => task.id === action.payload.id);
      return [...filtered];
    }

    default:
      return state;
  }
};

export default TaskReducer;
