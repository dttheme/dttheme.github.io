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
      <p>Hey! I'm Dyanna, an artist and software engineer living in Atlanta.</p>
      <p>
        I've been working professionally as a fullstack software engineer since
        2018. Most recently, I was Senior Software Engineer at Intuit Mailchimp.
        I've worked in React, Vue, Node, and Python, specializing in auditing
        and accessibility.
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
    <Currently></Currently>
    <p className="credit">© {year}, Dyanna Turner</p>
  </div>
);
