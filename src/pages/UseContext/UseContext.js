import { useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";

//1. Create context
//2. Provider
//3. Consumer
export default function UseContext() {
  const context = useContext(ThemeContext);
  return (
    <p>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content />
    </p>
  );
}
