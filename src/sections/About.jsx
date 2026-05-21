import { Card, ExternalLink } from "../components";
import React from "react";

const About = () => {
  return (
    <Card>
      <h2>About</h2>
      <p>
        Hey! I'm Dyanna (they/she), an{" "}
        <ExternalLink href="https://peachbutterprints.dyannaturner.com">
          artist
        </ExternalLink>
        , software engineer, and Certified Peer Specialist based in Southwest
        Atlanta.
      </p>
      <p>
        I’ve spent the last 8+ years building accessible, scalable web products
        for startups and large corporations, including my current role at CNN in
        Atlanta.
      </p>
      <p>
        As a CPS in Georgia, I also offer one-on-one peer support for
        neurodivergent and trauma-impacted adults rooted in lived experience,
        care, and community.
      </p>
      <p>Click the menu to learn more about my work and services.</p>
    </Card>
  );
};

export default About;
