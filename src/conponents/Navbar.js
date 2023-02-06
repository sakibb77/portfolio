import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);

  const links = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link5Ref,
    link6Ref,
    link7Ref,
  ];

  useLinkReveal(links, 2);

  return (
    <nav
      className={`navbar container mx-auto flex gap-3 justify-between ${
        footerNav ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className="logo">
        <HashLink smooth to={"#home"} ref={link1Ref}>
          {footerNav ? "go to top" : "sakib biswas"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3 w-[180px]">
        <li className="self-start">
          <HashLink smooth to={"#home"} className="link-item" ref={link2Ref}>
            home
          </HashLink>
        </li>
        <li className="self-end">
          <HashLink
            smooth
            to={"#projects"}
            className="link-item"
            ref={link3Ref}
          >
            projects
          </HashLink>
        </li>
        <li className="self-start">
          <HashLink smooth to={"#skills"} className="link-item" ref={link4Ref}>
            skills
          </HashLink>
        </li>
        <li className="self-end">
          <HashLink smooth to={"#about"} className="link-item" ref={link5Ref}>
            about
          </HashLink>
        </li>
        <li className="self-start">
          <HashLink smooth to={"#contact"} className="link-item" ref={link6Ref}>
            contact
          </HashLink>
        </li>
        <li className="self-end">
          <a
            href="google.com"
            target="_blank"
            rel="noreferrer"
            className="link-item"
            ref={link7Ref}
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
