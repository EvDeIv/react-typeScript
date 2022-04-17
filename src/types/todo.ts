export interface TodoState {
  loading: boolean;
  error: string | null;
  todos: any[];
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCFETCH_TODOS_SUCCESSH_TODOS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGES = "SET_TODO_PAGES",
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSucccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGES;
  payload: number;
}

export type TodoActions =
  | FetchTodoAction
  | FetchTodoSucccessAction
  | FetchTodoErrorAction
  | SetTodoPage;
