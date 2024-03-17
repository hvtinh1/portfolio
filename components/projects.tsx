import { projectsData } from "@/lib/data";
import React, { Fragment } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My project</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Fragment key={project.title}>
            <Project {...project}></Project>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
