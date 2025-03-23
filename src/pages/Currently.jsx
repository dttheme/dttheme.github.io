import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 2.19.25
      </p>
      <p>
        Working on an interactive guide for learning tarot. You can see the work
        in progress here:{" "}
        <a
          href="https://www.dyannaturner.com/tarot-guide"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Tarot Guide
        </a>
      </p>
      <p>
        <i>Reading: </i>{" "}
        <ul>
          <li>
            <a
              href="http://www.google.com/search?q=The Art of Logic in an Illogical World by Eugenia Cheng"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Art of Logic in an Illogical World by Eugenia Cheng
            </a>
          </li>
        </ul>
      </p>
    </Card>
  );
};
