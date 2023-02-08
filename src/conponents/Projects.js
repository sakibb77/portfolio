import Project from "./Project";
import React from "react";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "Foodverse - Recipe Ingredient App",
    img1: "https://res.cloudinary.com/doywcvyxn/image/upload/v1675755184/personal-portfolio/pf-s73-eve-set-14-mockup-Recovered_ui8bdl.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/torque-2_fawp9c.png",
    description:
      "Foodverse is a recipe ingredient management app built with React, TailwindCSS, and JavaScript. With this app, you can keep track of all the ingredients you have in your kitchen, and build recipes with the ingredients you already have on hand. Foodverse streamlines the recipe building process with a modern, intuitive interface and makes it easy to stay organized and save time in the kitchen.",
    tools: ["React.js", "Tailwind CSS", "javascript"],
    liveLink: "foodverse-sakib.netlify.app/",
    frontEndLink: "https://github.com/sakibb77/foodverse",
  },
  {
    id: 2,
    title: "Tech-Alpha - Online Tech E-Commerce Website",
    img1: "https://res.cloudinary.com/doywcvyxn/image/upload/v1675757404/personal-portfolio/tech-alpha-showcase_hz3gkm.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/shopping-2_z3boxd.jpg",
    description:
      "Shopping cart functionality has been implemented using Redux Toolkit. All the product data has been served via JSON server and fetched using RTK Query. Cart items also saved into the local storage of the client’s browser",
    tools: [
      "React.js",
      "Redux.js",
      "Redux Toolkit",
      "redux-thunk",
      "Tailwind CSS",
      "axios",
      "javascript",
    ],
    liveLink: "https://tech-alpha.netlify.app/",
    frontEndLink: "https://github.com/sakibb77/tech-alpha",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"projects"} />

      <div className="project-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
