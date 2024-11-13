import React from "react";
import "../styles.css";
import Card from "../components/Card";
import Github from "../../svg/logo-github.svg";
import Codepen from "../../svg/logo-codepen.svg";
import LinkedIn from "../../svg/logo-linkedin.svg";
import Spotify from "../../svg/logo-spotify.svg";
import Letterboxd from "../../svg/logo-letterboxd.svg";

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
        <a
          href="https://open.spotify.com/user/dttheme?si=4ddc1c35d1224433"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Spotify} alt="Spotify" />
        </a>
        <a
          href="https://letterboxd.com/dttheme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Letterboxd} alt="Letterboxd" />
        </a>
      </div>
    </Card>
  );
};
