import "../styles.css";

import { Card } from "../components";
import React from "react";

export default () => {
  return (
    <Card>
      <h2>Currently</h2>
      <p>
        <i>Updated:</i> 11.13.2024
      </p>
      <p>Getting ready to bring Peach Butter Prints to a few upcoming markets on November 16th, 23rd, and 30th. Check out  <a
          href="https://www.instagram.com/peachbutterprints/"
          target="_blank"
          rel="noopener noreferrer"
        > PBP's Instagram</a> for more information.</p>
      <p>
        <i>Reading: </i>{" "}
        <ul>
          <li>
          <a
          href="http://www.google.com/search?q=Neuroqueer Heresies - Nick Walker"
          target="_blank"
          rel="noopener noreferrer"
        > 
        Neuroqueer Heresies - Nick Walker
        </a>
          </li>
          <li>
          <a
          href="http://www.google.com/search?q=Smoke Gets in Your Eyes - Caitlin Doughty"
          target="_blank"
          rel="noopener noreferrer"
        >
        Smoke Gets in Your Eyes - Caitlin Doughty
        </a>
          </li>
        </ul>
      </p>
    </Card>
  );
};
