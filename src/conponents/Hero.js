import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useHeadlineReveal, useImageReveal } from "../hooks/gsap";

const data = {
  image1:
    "https://res.cloudinary.com/doywcvyxn/image/upload/v1675758167/personal-portfolio/portfolio-image-2_yus7cu.jpg",
  image2:
    "https://res.cloudinary.com/doywcvyxn/image/upload/v1675757885/personal-portfolio/portfolio-image-1_udhdyg.png",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const headLine1Ref = useRef(null);
  const headLine2Ref = useRef(null);

  const headLines = [headLine1Ref, headLine2Ref];

  useHoverEffect(heroImageRef, data.image1, data.image2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headLines, 1.5);

  return (
    <div
      className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden"
      id="home"
    >
      <div className="hero-image " ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={headLine1Ref} className="hero-headline-one">
          react js
        </h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={headLine2Ref} className="hero-headline-two">
          developer
        </h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
