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
        </a>
        , Certified Peer Specialist, and software engineer based in Atlanta.
      </p>
      <p>
        I’ve worn many hats over the years: from customer service and event
        planning to merchandising and warehouse work. I consider myself a Jane
        of All Trades: adaptable, curious, and always learning. For the past 8
        years, I’ve worked professionally as a software engineer, building
        accessible, scalable frontend systems for startups, mid-sized companies,
        and large corporations. I’ve led projects, solved critical bugs,
        mentored teammates, and designed and built production-grade websites
        from scratch.
      </p>
      <p>
        After my dad passed away in July 2023, I stepped away from tech to focus
        on healing, creativity, and community. Since then, I’ve been working
        full-time as an artist, vending at local markets, building the Peach
        Butter Prints brand, and reconnecting with a deeper sense of purpose.
      </p>
      <p>
        As of May 2025, I am a Certified Peer Specialist in the state of
        Georgia, offering one-on-one support for other neurodivergent and
        trauma-impacted folks like me.
      </p>
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
