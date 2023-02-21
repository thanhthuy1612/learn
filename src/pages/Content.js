import { memo } from "react";

function Content({OnIncrease}) {
    console.log(1);
  return (
    <>
      <h2>New</h2>
      <button onClick={OnIncrease}>Click me!</button>
    </>
  );
}
export default memo(Content);
