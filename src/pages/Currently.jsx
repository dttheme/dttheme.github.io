import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 3.23.25
      </p>
      <p>
        <ul>
          <li>
            preparing to complete{" "}
            <a
              href="https://www.gmhcn.org/cps-job-description"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Peer Support Certification
            </a>
          </li>
          <li>wrapping up a few commissions</li>
          <li>working part time in a wine shop</li>
          <li>
            volunteering with{" "}
            <a
              href="https://www.instagram.com/yawpofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YAWP Atlanta
            </a>
          </li>
        </ul>
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
