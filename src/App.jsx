import { Currently, Home, PeerSupport, Projects } from "./pages";
import { Header, Social } from "./sections";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";

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
              <Link to="/engineering">Engineering</Link>
            </li>
            <li>
              <Link to="/peersupport">Peer Support</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/engineering" element={<Projects />}></Route>
        <Route path="/currently" element={<Currently />}></Route>
        <Route path="/peersupport" element={<PeerSupport />}></Route>
      </Routes>
    </Router>
    <Social></Social>
    <p className="credit">© {year}, Dyanna Turner</p>
  </div>
);
