import React from "react";
import { Header, Social } from "./sections";
import { Currently, Home, Projects } from "./pages";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const year = new Date().getFullYear();

export default () => (
  <div className="app-wrapper">
    <Router>
      <Header>
        <h1>Dyanna Turner</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/currently">Currently</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/currently" element={<Currently />}></Route>
      </Routes>
    </Router>
    <Social></Social>
    <p className="credit">© {year}, Dyanna Turner</p>
  </div>
);
