import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useFooterReveal } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useFooterReveal(footerRef);
  return (
    <div
      className=" text-center text-white/50 overflow-hidden my-40"
      ref={footerRef}
    >
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink className="link-item hover:text-white" smooth to={"#home"}>
          sakib biswas
        </HashLink>
        , Crafted by yours truly
      </p>
    </div>
  );
};

export default Footer;
