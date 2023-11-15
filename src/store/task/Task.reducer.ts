import { TTaskActions, TTasksReducer, TaskActionsType } from 'store/task';

const initState: TTasksReducer = {
  value: [],
  current: null,
  isLoading: false,
  error: ``,
};

export const TaskReducer = (state = initState, action: TTaskActions): TTasksReducer => {
  switch (action.type) {
    case TaskActionsType.ALL:
      return { ...state, value: action.payload };

    case TaskActionsType.BY_ID:
      return { ...state, current: action.payload };

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
