import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import UseReducer from "./pages/UseReducer";
import ToDo from "./pages/ToDo";
import UseReducerRecap from "./pages/ToDo";
import UseContext from "./pages/UseContext/UseContext";
import { ThemeProvider } from "./pages/UseContext/ThemeContext";
import { StoreProvider } from "./pages/store";
import TodoList from "./pages/store/TodoList";
import UseImperativeHandle from "./pages/UseImperativeHandle";
import Data from "./pages/Data/Data";
import KeyBoard from "./pages/KeyBoard";
import Redux from "./pages/Redux";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/useReducer">UseReducer</Link>
        <Link to="/todo">ToDo</Link>
        <Link to="/useReducerRecap">UseReducerRecap</Link>
        <Link to="/useContext">UseContext</Link>
        <Link to="/todolist">ToDoList</Link>
        <Link to="/useImperativeHandle">UseImperativeHandle</Link>
        <Link to="/data">Data</Link>
        <Link to="/keyboard">Keyboard</Link>
        <Link to="/redux">Redux</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/useReducerRecap" element={<UseReducerRecap />} />
        <Route
          path="/useContext"
          element={
            <ThemeProvider>
              <UseContext />
            </ThemeProvider>
          }
        />
        <Route
          path="/todolist"
          element={
            <StoreProvider>
              <TodoList />
            </StoreProvider>
          }
        />
        <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/data" element={<Data />} />
        <Route path="/keyboard" element={<KeyBoard />} />
        <Route path="/redux" element={<Redux/>} />
      </Routes>
    </div>
  );
}

export default App;