import { useReducer } from "react";
import { setADD, setDelete, setEnter, setShift } from "./asset/action";
import { text } from "./asset/constants";
import reducer, { initState } from "./asset/reducer";
import Key from "./components/button/Key";
import Buffer from "./components/buffer/Buffer";
import Screen from "./components/screen/Screen";

export default function KeyBoard() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { textInput, letterInput, shift } = state;
  const onClickAdd = (text) => {
    dispatch(setADD(text));
  };
  console.log(textInput, letterInput, shift);
  return (
    <>
      <Screen list={letterInput} />
      <Buffer type={textInput} />
      <div>
        {text.slice(0, 10).map((text, index) => (
          <Key
            key={index}
            handleClick={() => {
              onClickAdd(text);
            }}
            type={text}
          />
        ))}
      </div>

      <div>
        {text.slice(10, 19).map((text, index) => (
          <Key
            key={index}
            handleClick={() => {
              onClickAdd(text);
            }}
            type={text}
          />
        ))}
      </div>

      <div>
        {text.slice(19, 26).map((text, index) => (
          <Key
            key={index}
            handleClick={() => {
              onClickAdd(text);
            }}
            type={text}
          />
        ))}
      </div>
      <button
        onClick={() => {
          dispatch(setDelete(textInput));
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          dispatch(setEnter(textInput));
        }}
      >
        Enter
      </button>
      <button
        onClick={() => {
          dispatch(setShift(shift));
        }}
      >
        Shift
      </button>
    </>
  );
}
