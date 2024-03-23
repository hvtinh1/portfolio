"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React, { Fragment } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section ref={ref}>
      <SectionHeading>My projects</SectionHeading>
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
