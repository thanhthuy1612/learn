import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

export default function UseReducerRecap() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;
  const ref = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    ref.current.focus();
  };
  return (
    <>
      <input
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
        ref={ref}
        placeholder="Enter todo..."
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <div
              onClick={() => {
                dispatch(deleteJob(index));
              }}
            >
              &times;
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
