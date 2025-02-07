import { Card } from "../components";
import React from "react";
import UnderConstruction from "../../gifs/under-construction.gif";

const Projects = () => {
  return (
    <Card>
      <h2>Professional</h2>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.archive.org/web/20190106090219/https://www.supply.com/"
        >
          Supply.com
        </a>{" "}
        was an established e-commerce retailer. They required my specialized
        frontend knowledge for a small team in charge of translating the old XML
        website into React.{" "}
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.archive.org/web/20220901223020/https://fetchtruck.com/"
        >
          Fetch
        </a>{" "}
        was a startup specializing in truck rentals. I was responsible, in-part,
        for designing and developing multiple platforms needed to comprise the
        entire product, including dashboards, landing pages and wizards.{" "}
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mailchimp.com/"
        >
          Intuit Mailchimp
        </a>{" "}
        is an internationally successful email marketing platform. I worked as a
        fullstack engineer on the email builder product.
      </p>
      {/* <p>
        I also have examples of <a href="">UI/UX design</a>, and{" "}
        <a href="">technical writing</a>
      </p> */}
      <h2>Personal</h2>

      <p>
        <a target="_blank" rel="noopener noreferrer" href="/tarot-guide">
          Tarot Guide
        </a>{" "}
        is a pet project created using Vite. I created this in order to help
        study tarot images and meaning.
      </p>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="/rumblr">
          Rumblr
        </a>{" "}
        is an earthquake tracking application in the browser using WebGL Earth.
        This was my final project for Thinkful Fullstack Certification.
      </p>
    </Card>
  );
};

export default Projects;
