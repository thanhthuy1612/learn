import { useRef } from "react";
import { useStore, actions } from ".";

export default function TodoList() {
  const [state, dispatch] = useStore();
  const ref = useRef();
  console.log(state);
  return (
    <>
      <input
        ref={ref}
        value={state.todoInput}
        placeholder="Enter Todo..."
        onChange={(e) => {
          dispatch(actions.set(e.target.value, "SET_JOB"));
        }}
      />
      <button
        onClick={() => {
          dispatch(actions.set(state.todoInput, "ADD_JOB"));
          dispatch(actions.set("", "SET_JOB"));
          ref.current.focus();
        }}
      >
        ADD
      </button>
      {state.todos.map((todo, index) => (
        <div key={index}>
          {todo}{" "}
          <button
            onClick={() => {
              dispatch(actions.set(index, "DELETE_JOB"));
            }}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}
