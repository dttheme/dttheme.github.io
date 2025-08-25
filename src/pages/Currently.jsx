import "../styles.css";
import EternalMoon from "../../gifs/eternalmoon.gif";
import VLoveChain from "../../gifs/vlovechain.gif";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <img src={EternalMoon} alt="" />
      <p>
        <i>Updated:</i> 8.25.25
      </p>
      <p>
        <ul>
          <li>recovering from a cold 😷</li>
          <li>finishing my verified resources document</li>
          <li>talking wine with ATLiens</li>
          <li>enjoying my blooming summer garden</li>
        </ul>
      </p>
      <img src={VLoveChain} alt="" />
      <center>
        <small>
          Credit to <a href="https://gifcities.org/">GifCities</a>
        </small>
      </center>
      {/* <p>
        <i>Reading: </i>{" "}
        <ul>
          <li>
            <a
              href="http://www.google.com/search?q=Your Inner Fish - Neil Shubin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Your Inner Fish - Neil Shubin
            </a>
          </li>
        </ul>
      </p> */}
    </Card>
  );
};
