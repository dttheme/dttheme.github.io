import React from "react";
import "../styles.css";
import { Card } from "../components";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 8.14.24
      </p>
      <p>
        <i>Reading: </i>{" "}
        <a
          href="https://www.goodreads.com/book/show/34728667-children-of-blood-and-bone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Children of Blood and Bone - Tomi Adeyemi
        </a>
      </p>
      <p>
        <i>Listening: </i>
        <a
          href="https://open.spotify.com/album/6gkh9oOIjRJ24JXKSX9LWp?si=l4sXdZKqTw2PNzm_T50ZkQ"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        Parallel Lines - STRFKR
      </p>
      <p>
        <i>Working on:</i>
      </p>
      <ul>
        <li>Project page for this website</li>
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
        <li>A trio of prints for my partner's office </li>
      </ul>
    </Card>
  );
};
