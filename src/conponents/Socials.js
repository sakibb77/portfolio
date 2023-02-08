import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";
// import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/sakibbiswas.sakib.7/",
  },
  { id: 3, title: "GitHub", url: "https://github.com/sakibb77" },
  { id: 4, title: "LinkedIn", url: "https://www.linkedin.com/in/sakib77/" },
  { id: 5, title: "Leetcode", url: "https://leetcode.com/sakibb77/" },
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
