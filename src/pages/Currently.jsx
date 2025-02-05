import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 2.4.25
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
              href="http://www.google.com/search?q=Caste: Origins of Our Discontent by Isabel Wilkerson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caste: Origins of Our Discontent by Isabel Wilkerson
            </a>
          </li>
          <li>
            <a
              href="http://www.google.com/search?q=We Deserve Monuments by Jas Hammonds"
              target="_blank"
              rel="noopener noreferrer"
            >
              We Deserve Monuments by Jas Hammonds
            </a>
          </li>
        </ul>
      </p>
    </Card>
  );
};
