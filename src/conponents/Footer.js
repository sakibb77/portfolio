import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className=" text-center text-white/50 overflow-hidden my-40">
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
