import React from "react";
import "../styles.css";
import Card from "../Card";

export default () => {
  return (
    <>
      <Card>
        <h2>Services</h2>
        <ul>
          <li>
            Software engineering, web development and performance auditing
          </li>
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
          <i>Updated: 7.15.24</i>
        </p>
        <p>Reading: The Age of Magical Overthinking - Amanda Montell </p>
        <p>Listening: JOYRIDE - Kesha</p>
        <p>
          Working on:
          <ul>
            <li>A gallery page created in React for peachbutterprints.com</li>
            <li>A trio of prints for my partner's office</li>
          </ul>
        </p>
      </Card>
    </>
  );
};
