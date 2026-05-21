import { Card, ExternalLink, SiteLastUpdated } from "../components";
import EternalMoon from "../../gifs/eternalmoon.gif";
import React from "react";
import VLoveChain from "../../gifs/vlovechain.gif";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <img style={{ maxWidth: "100%" }} src={EternalMoon} alt="" />
      <SiteLastUpdated />

      <ul>
        <li>Learning my way around a new campus</li>
        <li>Getting back in the flow of the 40 hour work week</li>
        <li>Working on Peach Pulp, Issue #2. Checkout the first issue on my insta!</li>
        <li>Reading <ExternalLink href="https://www.google.com/search?q=Drive+Your+Plow+Over+The+Bones+of+the+Dead+Olga+Tokarczuk">Drive Your Plow Over The Bones of the Dead by Olga Tokarczuk</ExternalLink> with my book club {"<3"}</li>
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
