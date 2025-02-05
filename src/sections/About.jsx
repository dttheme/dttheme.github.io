import { Card } from "../components";
import React from "react";

const About = () => {
  return (
    <Card>
      <h2>About</h2>
      <p>
        Hey! I'm Dyanna (they/she), an{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://peachbutterprints.com"
        >
          artist
        </a>{" "}
        and software engineer based in Atlanta.
      </p>
      <p>
        I've had many jobs over the years, in customer service, merchandising,
        event planning and more. I consider myself a Jane of All Trades and can
        wear many hats at once. For the last 8 years, I've worked as a software
        engineer. I've worked at startups, corporations, mid-size companies, and
        have started my own business. I've designed and built production
        websites from scratch.
      </p>
      <p>
        When my dad passed in July '23, I took a sabbatical from engineering. I
        have been working as an artist, fulfilling a life-long dream. I have
        spent the last year vending at markets around Atlanta, building my own
        brand, and connecting with my community.
      </p>
      <br />
      <b>
        I am looking for engineering opportunities in 2025. Please, don’t
        hesitate to <a href="mailto:dyanna.a.turner@gmail.com">reach out</a>.
        I'm friendly and I'd love to hear from you! :)
      </b>
      <br />
      <p>
        This website is built by me using{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://vitejs.dev/">
          Vite
        </a>{" "}
        and deploying on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pages.github.com/"
        >
          Github Pages
        </a>
        .{" "}
      </p>
    </Card>
  );
};

export default About;
