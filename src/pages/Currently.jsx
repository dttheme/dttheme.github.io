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
        <i>Updated:</i> 11.24.25
      </p>
      <p>
        <ul>
          <li>Sagittarius season artwork ♐️</li>
          <li>new prints, gift bags, cards in progress</li>
          <li>Christmas art markets 🎅</li>
          <li>going on a lot of bike rides 🚵</li>
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
