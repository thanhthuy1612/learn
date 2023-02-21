import { useReducer, useRef } from "react";

export default function ToDo() {
  const initState = {
    job: "",
    jobs: [],
  };
  const SET_JOB = "set_job";
  const ADD_JOB = "add_job";
  const DELETE_JOB = "delete_job";
  const setJob = (payload) => {
    return {
      type: SET_JOB,
      payload,
    };
  };
  const addJob = (payload) => {
    return {
      type: ADD_JOB,
      payload,
    };
  };
  const deleteJob = (payload) => {
    return {
      type: DELETE_JOB,
      payload,
    };
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_JOB:
        return {
          ...state,
          job: action.payload,
        };
      case ADD_JOB:
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
      case DELETE_JOB:
        const newJobs = [...state.jobs];
        newJobs.splice(action.payload, 1);
        return {
          ...state,
          jobs: newJobs,
        };
      default:
        throw new Error("Invalid action");
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);
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
