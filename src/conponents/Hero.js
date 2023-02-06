import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useHeadlineReveal, useImageReveal } from "../hooks/gsap";

const data = {
  image1:
    "https://images.pexels.com/photos/14807476/pexels-photo-14807476.jpeg?auto=compress&cs=tinysrgb&w=600",
  image2:
    "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600",
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
