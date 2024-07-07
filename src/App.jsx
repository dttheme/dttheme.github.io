import React from "react";
import Header from "./sections/Header";
import Social from "./sections/Social";
import Card from "./Card";
import Currently from "./sections/Currently";

const year = new Date().getFullYear();

export default () => (
  <div className="app-wrapper">
    <Header>
      <h1>Dyanna Turner</h1>
    </Header>
    <Social></Social>
    <Card>
      <h2>About Me</h2>
      <p>Hey! I'm Dyanna, an artist and software engineer based in Atlanta.</p>
      <p>
        I've been working professionally as a fullstack software engineer since
        2018. Most recently, I was Senior Software Engineer at Intuit Mailchimp.
        I've worked in React, Vue, Node, and Python, specializing in auditing
        and accessibility.
      </p>
      <p>
        After my father passed in July of 2023, I decided to take some time away
        from engineering to start my art business.
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://peachbutterprints.com"
        >
          Peach Butter Prints
        </a>{" "}
        has since showcased at 6 markets around Atlanta to great support from
        the community. PBP continues to grow and exeed my expectations, and I
        look forward to what the future brings!
      </p>
    </Card>
    <Currently></Currently>
    <p className="credit">© {year}, Dyanna Turner</p>
  </div>
);
