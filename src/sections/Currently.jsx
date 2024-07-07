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
          <i>Updated: 7.7.24</i>
        </p>
        <p>Reading: Magic - Chris Gosden</p>
        <p>
          Listening: Our summer playlist! You can listen to it{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/playlist/045cMeVNKpIkVKpPsLmQde?si=0e498c8560854552"
          >
            here
          </a>
        </p>
        <p>Working on: A trio of themed prints for my partner's office</p>
      </Card>
    </>
  );
};
