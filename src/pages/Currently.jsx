import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 7.3.25
      </p>
      <p>
        <ul>
          <li> working on art for my upcoming art market on July 19th</li>
          <li>launching peer support and connecting with peers</li>

          <li>talking wine with ATLiens</li>
          <li>enjoying my blooming summer garden</li>
        </ul>
      </p>
      <p>
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
      </p>
    </Card>
  );
};
