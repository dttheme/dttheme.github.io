import React from "react";
import "../styles.css";
import Card from "../Card";
import Github from "../../svg/logo-github.svg";
import Codepen from "../../svg/logo-codepen.svg";
import LinkedIn from "../../svg/logo-linkedin.svg";

export default () => {
  return (
    <Card>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/dyannaturner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
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
      </div>
    </Card>
  );
};
