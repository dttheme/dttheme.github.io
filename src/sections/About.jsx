import React from "react";
import { Card } from "../components";

const About = () => {
  return (
    <Card>
      <h2>About</h2>
      <p>Hey! I'm Dyanna, an         <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://peachbutterprints.com"
        >artist</a> and software engineer based in Atlanta.</p>
        <p>
        I’m open for new opportunities — please don’t hesitate to reach out. I'd love to hear from you!
        </p>

      <p>
      This website is a work in progress, personally built by me using{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://vitejs.dev/">
          Vite
        </a>{" "}
        and deploying on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pages.github.com/"
        >
          Github Pages
        </a>
        .{" "}
      </p>
    </Card>
  );
};

export default About;
