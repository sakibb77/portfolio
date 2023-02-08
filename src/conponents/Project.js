import React, { useRef } from "react";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectRightRef = useRef(null);
  const projectLeftRef = useRef(null);

  const projectsRefs = [projectRightRef, projectLeftRef];
  useHoverEffect(projectRightRef, project.img1, project.img2);
  useProjectLeftRightReveal(projectsRefs);

  return (
    <div className="project grid grid-cols-5">
      <div
        className="project-left col-span-3 flex flex-col gap-10"
        ref={projectLeftRef}
      >
        <span className="text-[3vw] text-white/20">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-4xl leading-relaxed text-cyan-400">
          {project.title}
        </h3>
        <p className="text-white/75">{project.description}</p>
        <span className="text-cyan-400 flex gap-5 flex-wrap">
          {project.tools.map((tool, i) => (
            <div key={i} className="flex gap-5">
              <span>{tool}</span>
              <span>|</span>
            </div>
          ))}
        </span>

        <div className="flex flex-wrap gap-10 text-xl">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-6 px-12 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Live site
          </a>
          <a
            href={project.frontEndLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-6 px-12 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            front End code
          </a>
          {project.backEndLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="uppercase py-6 px-12 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
            >
              back end code
            </a>
          )}
        </div>
      </div>
      <div
        className="project-right col-span-2 justify-self-end"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
