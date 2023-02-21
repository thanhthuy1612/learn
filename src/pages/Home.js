import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(60);
  const ref = useRef();
  const preRef = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    preRef.current = count; //gia tri truoc do
  }, [count]);
  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  }, []);
  const handleStart = () => {
    ref.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(ref.current);
  };
  return (
    <>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
