import { text } from "../../asset/constants";
import Key from "../button/Key";

export default function Keyboard({ handleClick, start, end }) {
  return (
    <>
      {text.slice(start, end).map((text, index) => (
        <Key key={index} handleClick={handleClick} type={text}/>
      ))}
    </>
  );
}
