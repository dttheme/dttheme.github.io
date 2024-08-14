import React from "react";
import { Card } from "../components";

const About = () => {
  return (
    <Card>
      <h2>About</h2>
      <p>Hey! I'm Dyanna, an artist and software engineer based in Atlanta.</p>
      <p>
        I've been working as a fullstack software engineer since 2018,
        specializing in frontend applications. Most recently, I was Senior
        Software Engineer at Intuit Mailchimp.
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
      <p>
        This website, a work in progress, is being built by me using{" "}
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
