import React from "react";
import Header from "./Header";
import Card from "./Card";
import Github from "../svg/logo-github.svg";
import Codepen from "../svg/logo-codepen.svg";
import LinkedIn from "../svg/logo-linkedin.svg";

export default () => (
  <div className="app-wrapper">
    <Header>
      <h1>Dyanna Turner</h1>
    </Header>
    <Card>
      <h2>About Me</h2>
      <p>Hey! I'm Dyanna, an artist and software engineer living in Atlanta.</p>
      <p>
        I've been working professionally as a fullstack software engineer since
        2018. Most recently, I was Senior Software Engineer at Intuit Mailchimp.
        I have past experience in React, Vue, Node, and Python.
      </p>
      <p>
        At the end of 2023, I opened my art shop,{" "}
        <a href="https://peachbutterprints.com">Peach Butter Prints</a>. You can
        find links to my store and social media there.
      </p>
      <p>
        I am looking for new engineering opportunities in 2024. I would love to
        hear from you if you have a remote engineering position.
      </p>
    </Card>
    <Card>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/dyannaturner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/dttheme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="Github" />
        </a>

        <a
          href="https://codepen.io/dyannaturner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Codepen} alt="Codepen" />
        </a>
      </div>
    </Card>
  </div>
);
