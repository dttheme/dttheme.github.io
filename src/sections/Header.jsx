import React, { useState } from "react";
import "../styles.css";
// import Hamburger from "hamburger-react";

export default ({ children }) => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <div className="header">
      {children}

      {/* <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger> */}
    </div>
  );
};
