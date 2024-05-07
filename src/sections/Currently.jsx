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
            Mentorship and career coaching, specializing in engineering with a
            non-traditional background
          </li>
          <li>Web development and auditing</li>
          <li>Technical writing, copywriting and editing</li>
          <li>Illustration and graphic design</li>
        </ul>
        <p>I'm open to freelance and remote contract work at this time.</p>
      </Card>
      <Card>
        <h2>Currently</h2>
        <p>
          <i>Updated: 5.7.24</i>
        </p>
        <p>Reading: The Year of Magical Thinking - Joan Didion</p>
        <p>Listening: Cate and Calvin's wedding playlist {"<3"}</p>
        <p>
          Working on: Getting ready to bring{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://peachbutterprints.com"
          >
            Peach Butter Prints
          </a>{" "}
          to Ormewood Makers Fest on Sat, May 18, 2024
        </p>
      </Card>
    </>
  );
};
