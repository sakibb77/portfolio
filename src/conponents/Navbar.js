import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar container mx-auto flex gap-3 justify-between mt-20 uppercase">
      <div className="logo ">
        <HashLink smooth to={"#home"}>
          sakib biswas
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3 w-[180px]">
        <li className="self-start">
          <HashLink smooth to={"#home"} className="link-item">
            home
          </HashLink>
        </li>
        <li className="self-end">
          <HashLink smooth to={"#projects"} className="link-item">
            projects
          </HashLink>
        </li>
        <li className="self-start">
          <HashLink smooth to={"#skills"} className="link-item">
            skills
          </HashLink>
        </li>
        <li className="self-end">
          <HashLink smooth to={"#about"} className="link-item">
            about
          </HashLink>
        </li>
        <li className="self-start">
          <HashLink smooth to={"#contact"} className="link-item">
            contact
          </HashLink>
        </li>
        <li className="self-end">
          <a
            href="google.com"
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
