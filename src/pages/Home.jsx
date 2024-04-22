import Card from "../Card";
import React from "react";

const Home = () => {
  return (
    <>
      <Card>
        <h2>About Me</h2>
        <p>
          Hey! I'm Dyanna, an artist and software engineer living in Atlanta.
        </p>
        <p>
          I've been working professionally as a fullstack software engineer
          since 2018. Most recently, I was Senior Software Engineer at Intuit
          Mailchimp.
        </p>
        <p>
          At the end of 2023, I opened my art shop,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://peachbutterprints.com"
          >
            Peach Butter Prints
          </a>
          . You can find links to my store and social media there.
        </p>
      </Card>
      <Card>
        <h2>Services</h2>
        <ul>
          <li>Software engineering and auditing</li>
          <li>User experience and interface development</li>
          <li>Technical writing, copywriting and editing</li>
          <li>Illustration and graphic design</li>
          <li>
            Mentorship and career coaching, specializing in engineering with a
            non-traditional background
          </li>
        </ul>
        <p>I'm open to freelance and remote contract work at this time.</p>
      </Card>

      <Card>
        <h2>Currently</h2>
        <p>
          <i>Updated: 4.22.24</i>
        </p>
        <p>Reading: Cultish - Amanda Montell</p>
        <p>Listening: Wanna Be - Glorilla, Megan thee Stallion</p>
        <p>Playing: Thaumaturge, Hades</p>
        <p>
          Working on: Preparing some custom prints for a wedding; buying
          supplies to bring{" "}
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

export default Home;
