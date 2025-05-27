import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 5.26.25
      </p>
      <p>
        <ul>
          <li>writing scripts for upcoming comics</li>
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
              href="http://www.google.com/search?q=What My Bones Know - Stephanie Foo"
              target="_blank"
              rel="noopener noreferrer"
            >
              What My Bones Know - Stephanie Foo
            </a>
          </li>
        </ul>
      </p>
    </Card>
  );
};
