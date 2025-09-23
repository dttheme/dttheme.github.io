import "../styles.css";
import EternalMoon from "../../gifs/eternalmoon.gif";
import VLoveChain from "../../gifs/vlovechain.gif";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <img style={{ maxWidth: "100%" }} src={EternalMoon} alt="" />
      <p>
        <i>Updated:</i> 9.23.25
      </p>
      <p>
        <ul>
          <li>going on a lot of bike rides 🚵</li>
          <li>
            networking with all different people around Atlanta, in software
            engineering and peer support
          </li>
          <li>applying for wholesale and retail spaces for art 🖼️</li>
          <li>emotionally preparing to turn 35</li>
        </ul>
      </p>
      <img style={{ maxWidth: "100%" }} src={VLoveChain} alt="" />
      <center>
        <small>
          Credit to <a href="https://gifcities.org/">GifCities</a>
        </small>
      </center>
    </Card>
  );
};
