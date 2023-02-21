import { useCallback, useState } from "react";
import Content from "./Content";

function News() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);
  return (
    <>
      <Content OnIncrease={handleIncrease} />
      <h1>{count}</h1>
    </>
  );
}

export default News;
