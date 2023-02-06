import React, { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);
  return (
    <div className="container mx-auto mt-20 overflow-hidden">
      <p ref={bioRef} className="text-center text-white/75">
        Skilled React developer with a passion for building intuitive web apps.
        Proficient in React. Experience in front-end technologies. Delivering
        high-quality solutions for startups and enterprises. Driven by a love of
        problem-solving and creating impactful digital experiences.
      </p>
    </div>
  );
};

export default Bio;
