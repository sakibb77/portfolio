import React, { useRef } from "react";
import { useSectionTitleReveal } from "../hooks/gsap";

const SectionTitle = ({ title }) => {
  const sectionTitleRef = useRef(null);
  useSectionTitleReveal(sectionTitleRef);

  return (
    <div className="overflow-hidden" ref={sectionTitleRef}>
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
