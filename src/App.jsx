import { Currently, Home, PeerSupport, Projects, Magic } from "./pages";
import { Header } from "./sections";
import { BookMenu } from "./components";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import React, { useState } from "react";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <Router>
        <div className={`app-layout ${isMenuOpen ? "sidebar-open" : ""}`}>
          <BookMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          <div className="app-content">
            <div className="app-content-inner">
              <Header
                title="Dyanna Turner"
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
              />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/engineering" element={<Projects />}></Route>
                <Route path="/currently" element={<Currently />}></Route>
                <Route path="/peersupport" element={<PeerSupport />}></Route>
                <Route path="/magic" element={<Magic />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};
