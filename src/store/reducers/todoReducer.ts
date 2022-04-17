import { TodoState, TodoActions, TodoActionTypes } from "./../../types/todo";

const initialState: TodoState = {
  todos: [],
  error: null,
  page: 1,
  loading: false,
  limit: 10,
};

export const todoReducer = (
  state = initialState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.SET_TODO_PAGES:
      return { ...state, loading: true, page: action.payload };
    default:
      return state;
  }
};
