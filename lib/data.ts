import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  }
] as const;

export const experiencesData = [
  {
    title: "Ho Chi Minh city university of Technology",
    location: "Ho Chi Minh city",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Ho Chi Minh city",
    description:
      "I worked as a front-end developer for 2 years in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Blockchain scope website",
    description:
      "I worked as a Front End developer on 1 year. Users can find about transaction information in blockchain and make some transaction like trading, stake, unstacked",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Health care website",
    description:
      "I worked as a Front End developer on 9 months. It has features like filtering, sorting and pagination.",
    tags: ["Angular", "TypeScript", "Material Angular", "NgRx", "RxJS", "Micro FrontEnd"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "VueJS",
  "Angular",
  "ReactQuery",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Material Angular",
  "Ant design",
  "TypeORM",
  "MySQL",
  "Redux",
  "GraphQL",
  "NestJS",
  "Express",
  "Framer Motion",
  "Azure",
  "Jira",
  "Agile",
  "Docker",
  "S3",
  "EC2",
  "Lambda function"
] as const;
