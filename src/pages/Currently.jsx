import { Card, ExternalLink } from "../components";
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
        <li>Reading <ExternalLink href="https://www.google.com/search?q=Drive+Your+Plow+Over+The+Bones+of+the+Dead+Olga+Tokarczuk">Drive Your Plow Over The Bones of the Dead by Olga Tokarczuk</ExternalLink> with my book club {"<3"}</li>
        <li>Add current update here</li>
        <li>Add current update here</li>
        <li>Add current update here</li>
      </ul>

      <img style={{ maxWidth: "100%" }} src={VLoveChain} alt="" />
      <p style={{ textAlign: "center" }}>
        <small>
          Credit to{" "}
          <ExternalLink href="https://gifcities.org/">
            GifCities
          </ExternalLink>
        </small>
      </p>
    </Card>
  );
};
