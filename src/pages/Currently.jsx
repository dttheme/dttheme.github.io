import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 1.21.25
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
              href="http://www.google.com/search?q=Burnout: The Secret to Unlocking the Stress Cycle - Emily and Amelia Nagoski"
              target="_blank"
              rel="noopener noreferrer"
            >
              Burnout: The Secret to Unlocking the Stress Cycle - Emily and
              Amelia Nagoski
            </a>
          </li>
          <li>
            <a
              href="http://www.google.com/search?q=Rebecca - Daphne du Maurier"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rebecca - Daphne du Maurier
            </a>
          </li>
        </ul>
      </p>
    </Card>
  );
};
