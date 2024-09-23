import { About, Services } from "../sections";

import Currently from "./Currently";
import Projects from "./Projects";
import React from "react";

const Home = () => {
  return (
    <>
      <About></About>
      {/* <Projects></Projects> */}
      <Currently></Currently>
    </>
  );
};

export default Home;
