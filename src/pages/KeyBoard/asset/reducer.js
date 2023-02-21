import { DELETE, ENTER, SHIFT, ADD } from "./constants";

export const initState = {
  textInput: "",
  letterInput: [],
  shift: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        textInput: state.textInput.substring(0, state.textInput.length - 1),
      };
    case ENTER:
      return {
        ...state,
        letterInput: [...state.letterInput, action.payload],
        textInput: ""
      };
    case ADD:
      return {
        ...state,
        textInput:
          state.shift > 0
            ? state.textInput + action.payload.toUpperCase(action.payload.length)
            : state.textInput + action.payload,
        shift: state.shift === 1 ? 0 : state.shift,
      };
    case SHIFT:
      return {
        ...state,
        shift: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
