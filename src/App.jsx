import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Card from "./Card";
import Course from "./pages/Course";
import Header from "./sections/Header";
import Home from "./pages/Home";
import React from "react";
import Social from "./sections/Social";

const year = new Date().getFullYear();

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        {/* <nav>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ol>
        </nav> */}
        <Header>
          <h1>Dyanna Turner</h1>
        </Header>
        <Social></Social>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Course />}></Route>
        </Routes>
        <p className="credit">© {year}, Dyanna Turner</p>
      </div>
    </Router>
  );
};

export default App;
