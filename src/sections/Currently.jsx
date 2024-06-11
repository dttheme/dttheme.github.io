import React from "react";
import "../styles.css";
import Card from "../Card";

export default () => {
  return (
    <>
      <Card>
        <h2>Services</h2>
        <ul>
          <li>Software engineering, web development and auditing</li>
          <li>
            Mentorship and career coaching, specializing in engineering with a
            non-traditional background
          </li>
          <li>Technical writing, copywriting and editing</li>
          <li>Illustration and graphic design</li>
        </ul>
      </Card>
      <Card>
        <h2>Currently</h2>
        <p>
          <i>Updated: 6.11.24</i>
        </p>
        <p>Reading: Earl's Trip - Jenny Holiday</p>
        <p>Listening: BOA - Megan Thee Stallion</p>
        <p>
          Working on: Special rainbow prints for the Rainbow Art Market at EAV
          Community Garden on 6/15
        </p>
      </Card>
    </>
  );
};
