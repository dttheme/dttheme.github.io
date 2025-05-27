import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 5.27.25
      </p>
      <p>
        <ul>
          <li>
            writing scripts for upcoming comics (keep an eye on my{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/peachbutterprints/
            "
            >
              art insta
            </a>
            )
          </li>
          <li>launching peer support and connecting with peers</li>
          <li>pen to tablet, working on art for Gemini season</li>
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
