import { Currently, Home, PeerSupport, Projects, Magic } from "./pages";
import { Header, Social } from "./sections";
import { BookMenu } from "./components";
import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";

import React, { useState } from "react";

const year = new Date().getFullYear();

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <Router>
        <div className={`app-layout ${isMenuOpen ? "sidebar-open" : ""}`}>
          <BookMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          <div className="app-content">
            <Header title="Dyanna Turner" isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/engineering" element={<Projects />}></Route>
              <Route path="/currently" element={<Currently />}></Route>
              <Route path="/peersupport" element={<PeerSupport />}></Route>
              <Route path="/magic" element={<Magic />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
      <Social></Social>
      <p className="credit">© {year}, Dyanna Turner</p>
    </div>
  );
};
