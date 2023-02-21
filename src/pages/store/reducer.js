import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants";

export const initState = {
  todos: [],
  todoInput: "",
};
export default function reducer(state, action) {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_JOB:
      const newState = [...state.todos];
      newState.splice(action.payload, 1);
      return {
        ...state,
        todos: newState,
      };
    default:
      throw new Error("Invalid action");
  }
}
