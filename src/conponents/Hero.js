import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  image1:
    "https://images.pexels.com/photos/14807476/pexels-photo-14807476.jpeg?auto=compress&cs=tinysrgb&w=600",
  image2:
    "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.image1, data.image2);

  return (
    <div
      className="hero container mx-auto mt-20 -translate-y-1/3 flex justify-center items-center"
      id="home"
    >
      <div className="hero-image" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 className="hero-headline-one">react js</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 className="hero-headline-two">developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
