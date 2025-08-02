import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <img src="/gifs/eternalmoon.gif" alt="" />
      <p>
        <i>Updated:</i> 8.1.25
      </p>
      <p>
        <ul>
          <li>getting setup to do wholesale prints</li>
          <li>painting for leo season</li>
          <li>finishing my verified resources document</li>
          <li>talking wine with ATLiens</li>
          <li>enjoying my blooming summer garden</li>
        </ul>
      </p>
      <img src="/gifs/vlovechain.gif" alt="" />
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
