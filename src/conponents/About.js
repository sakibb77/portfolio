import { useRef } from "react";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  image1:
    "https://res.cloudinary.com/doywcvyxn/image/upload/v1675757885/personal-portfolio/portfolio-image-1_udhdyg.png",
  image2:
    "https://res.cloudinary.com/doywcvyxn/image/upload/v1675758167/personal-portfolio/portfolio-image-2_yus7cu.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.image1, data.image2);
  useProjectLeftRightReveal(abouts);

  return (
    <div className="about container mx-auto mt-40 " id="about">
      <SectionTitle title={"about"} />
      <div className="about-wrapper grid grid-cols-2 mt-40 gap-20 overflow-hidden">
        <div
          className="about-left self-center justify-self-center"
          ref={aboutLeftRef}
        ></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            Hi, I'm Sakib, a passionate and self-taught React developer. I have
            a strong expertise in building high-performance and scalable web
            applications using React, Redux, and other modern technologies
          </p>
          <p className="mt-10">
            Throughout my experience, I have developed and delivered several
            successful projects, ranging from small single-page applications to
            large-scale enterprise solutions. I have a good understanding of
            front-end development best practices and strive to create
            user-friendly and visually appealing interfaces
          </p>
          <p className="mt-10">
            If you're looking for a skilled and driven React developer, I'd love
            to hear from you. Let's build something great together!
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-6 px-12 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
