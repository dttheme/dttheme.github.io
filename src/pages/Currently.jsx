import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 9.23.24
      </p>
      <p>
        <i>Reading: </i>{" "}
        {/* <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        > */}
        Final Girls - Riley Sager
        {/* </a> */}
      </p>
      <p>
        <i>Listening: </i>
        {/* <a
          href="https://open.spotify.com/album/6gkh9oOIjRJ24JXKSX9LWp?si=l4sXdZKqTw2PNzm_T50ZkQ"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        Plantasia - Mort Garson
        {/* </a> */}
      </p>
      <p>
        <i>Working on:</i>
      </p>
      <ul>
        <li>
          getting ready for{" "}
          <a
            href="https://inktober.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inktober 2024
          </a>
        </li>
        {/* <li>Project page for this website</li>
        <li>
          A loading gif and animation for{" "}
          <a
            href="http://peachbutterprints.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            peachbutterprints.com
          </a>
        </li>
        <li>A trio of linocut prints for my partner's office </li> */}
      </ul>
    </Card>
  );
};
