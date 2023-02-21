export default function logger(reducer) {
  return (preState, action) => {
    console.group(action.type);
    console.log("Prev State: ", preState);
    console.log("Action: ", action);

    const newState = reducer(preState, action);
    console.log("Next State: ", newState);
    console.groupEnd();
    return newState;
  };
}
