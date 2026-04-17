import { Card } from "../components";
import EternalMoon from "../../gifs/eternalmoon.gif";
import React from "react";
import VLoveChain from "../../gifs/vlovechain.gif";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <img style={{ maxWidth: "100%" }} src={EternalMoon} alt="" />
      <p>
        <i>Last Updated:</i> 4.17.26
      </p>

      <ul>
        <li>Designing and drawing the first issue of Peach Pulp, more to come</li>
        <li>Biking on the Beltline, getting fit while doing it</li>
        <li>Enjoying my spring garden</li>
        <li>Reading <a href="https://www.google.com/search?q=Drive+Your+Plow+Over+The+Bones+of+the+Dead+Olga+Tokarczuk" target="_blank" rel="noopener noreferrer">Drive Your Plow Over The Bones of the Dead by Olga Tokarczuk</a> with my book club {"<3"}</li>
      </ul>

      <img style={{ maxWidth: "100%" }} src={VLoveChain} alt="" />
      <p style={{ textAlign: "center" }}>
        <small>
          Credit to{" "}
          <a href="https://gifcities.org/" target="_blank" rel="noopener noreferrer">
            GifCities
          </a>
        </small>
      </p>
    </Card>
  );
};
