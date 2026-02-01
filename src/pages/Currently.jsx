import "../styles.css";

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
        <i>Updated:</i> 1.15.26
      </p>
      <p>
        <ul>
          <li>recovering from a busy holiday season</li>
          <li>
            starting round 2 of art for the Andres Castro congressional campaign
            (
            <a
              href="https://castroforgeorgia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Castro for GA
            </a>
            )
          </li>
          <li>
            fixing domain and hosting issues for
            <a
              href="http://peachbutterprints.dyannaturner.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              peachbutterprints.com
            </a>
            <span>(if this link works, I fixed it!)</span>
          </li>{" "}
          <li>creating art for Capricorn season 🐐♑</li>
          <li>taking it one day at a time</li>
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
