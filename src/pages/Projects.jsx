import { Card, ExternalLink, SectionHeader } from "../components";
import React from "react";

const careerProjects = [
  {
    name: "CNN",
    href: "https://www.cnn.com/",
    description:
      "is where I contributed engineering work on high-traffic digital experiences for a global news audience.",
  },
  {
    name: "Intuit Mailchimp",
    href: "https://mailchimp.com/",
    description:
      "is an internationally successful email marketing platform. I worked as a fullstack engineer on the email builder product.",
  },
  {
    name: "Fetch",
    href: "https://web.archive.org/web/20220901223020/https://fetchtruck.com/",
    description:
      "was a startup specializing in truck rentals. I was responsible, in-part, for designing and developing multiple platforms needed to comprise the entire product, including dashboards, landing pages and wizards.",
  },
  {
    name: "Supply.com",
    href: "https://web.archive.org/web/20190106090219/https://www.supply.com/",
    description:
      "was an established e-commerce retailer. They required my specialized frontend knowledge for a small team in charge of translating the old XML website into React.",
  },
];

const personalProjects = [
  {
    name: "This Website",
    href: "/",
    description:
      "is my personal home on the web, built with React and Vite as an evolving portfolio for my projects, peer support work, and creative life.",
  },
   {
    name: "Tarot Guide",
    href: "/tarot-guide",
    description:
      "is a pet project created using Vite. I created this in order to help study tarot images and meaning.",
  },
  {
    name: "Rumblr",
    href: "/rumblr",
    description:
      "is an earthquake tracking application in the browser using WebGL Earth. This was my final project for Thinkful Fullstack Certification.",
  },
];

const Projects = () => {
  return (
    <>
      <Card>
        <SectionHeader id="career-projects" text="Career Projects" />
        {careerProjects.map((project) => (
          <p key={project.name}>
            <ExternalLink href={project.href}>{project.name}</ExternalLink>{" "}
            {project.description}
          </p>
        ))}
      </Card>
      <Card>
        <SectionHeader id="personal-projects" text="Personal Projects" />
        {personalProjects.map((project) => (
          <p key={project.name}>
            <a href={project.href}>
              {project.name}
            </a>{" "}
            {project.description}
          </p>
        ))}
      </Card>
    </>
  );
};

export default Projects;
