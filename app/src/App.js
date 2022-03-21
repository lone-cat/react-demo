import {NavLink, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
      <div className="App">
        <h1>Welcome to React App</h1>
          <NavLink to="/">main</NavLink>
          <NavLink to="/about">about</NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;
