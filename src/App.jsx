import React from "react";
import Header from "./Header";
import Card from "./Card";
import Github from "../svg/logo-github.svg";
import Codepen from "../svg/logo-codepen.svg";
import LinkedIn from "../svg/logo-linkedin.svg";
import UnderContstruction from "../gifs/under-construction.gif";

export default () => (
  <div className="app-wrapper">
    <Header>
      <h1>Dyanna Turner</h1>
    </Header>
    <Card>
      <p>1.11.24: This website is under construction!</p>
      <img
        src={UnderContstruction}
        alt="gif shows a flashing 'under construction' sign"
      />
    </Card>
    <Card>
      <h2>About Me</h2>
      <p>
        Greetings! I'm Dyanna, an artist and software engineer living in
        Atlanta.
      </p>

      <p>
        Visit <a href="peachbutterprints.com">my other site</a> for more
        information about my art.
      </p>
    </Card>
    <Card>
      <div className="social">
        <a
          href="https://github.com/dttheme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="Github" />
        </a>
        <a
          href="https://codepen.io/dyannaturner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Codepen} alt="Codepen" />
        </a>
        <a
          href="https://www.linkedin.com/in/dyannaturner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </Card>
  </div>
);
