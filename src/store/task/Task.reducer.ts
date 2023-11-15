import { TTaskActions, TTasksReducer, TaskActionsType } from 'store/task';

const initState: TTasksReducer = {
  value: [],
  currentPage: 1,
  perPage: 10,
  totalTasks: 0,
  isLoading: false,
  error: ``,
};

export const TaskReducer = (state = initState, action: TTaskActions): TTasksReducer => {
  switch (action.type) {
    case TaskActionsType.ALL: {
      return { ...state, value: action.payload, totalTasks: action.payload.length };
    }

    case TaskActionsType.DELETE: {
      const filtered = state.value.filter((task) => task.id !== action.payload);
      return { ...state, value: filtered };
    }

    case TaskActionsType.LOADING:
      return { ...state, isLoading: action.payload };

    case TaskActionsType.ERROR:
      return { ...state, error: action.payload };

    case TaskActionsType.SET_PAGE: {
      return { ...state, currentPage: action.payload };
    }

    default:
      return state;
  }
};
