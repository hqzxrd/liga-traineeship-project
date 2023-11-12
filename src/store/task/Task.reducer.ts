import { TaskAction, TaskActionsType } from './Task.types';
import { TTasksReducer } from 'store/redux.types';

const initState: TTasksReducer = {
  value: [],
  isLoading: false,
  error: ``,
};

const TaskReducer = (state = initState, action: TaskAction): TTasksReducer => {
  switch (action.type) {
    case TaskActionsType.ALL:
      return { ...state, value: action.payload };

    case TaskActionsType.DELETE: {
      const filtered = state.value.filter((task) => task.id !== action.payload);
      return { ...state, value: filtered };
    }

    case TaskActionsType.LOADING:
      return { ...state, isLoading: action.payload };

    case TaskActionsType.ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default TaskReducer;
