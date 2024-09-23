import { Card } from "../components";
import React from "react";
import UnderConstruction from "../../gifs/under-construction.gif";

const Projects = () => {
  return (
    <Card>
      <h2>Journey</h2>
      <p style={{ "text-align": "center" }}>
        <img src={UnderConstruction} alt="" />
        <br />
        <i>This section is a WIP</i>
      </p>
      <p>
        <i>2023</i> |
      </p>
      <p>
        <i>2021</i> |
      </p>
      <p>
        <i>2019</i> |
      </p>
      <p>
        <i>2018</i> |
      </p>
      <p>
        <i>2017</i> | <a href="/rumblr">Rumblr</a> is an earthquake tracking
        application in the browser using WebGL Earth. This was my final project
        for Thinkful Fullstack Certification.
      </p>
      <p>
        <i>2016</i> | I decided to
      </p>
      <p>
        <i>1990s - Early 2000s</i> | My love of art and technology started from
        a young age. I began drawing as soon as I could hold a pencil, and that
        love of design developed as I got older. I grew up tinkering with the
        HTML, CSS and JavaScript on sites like GeoCities, MySpace, and
        LiveJournal.
      </p>
      {/* <p>V1, V2</p> */}
    </Card>
  );
};

export default Projects;
