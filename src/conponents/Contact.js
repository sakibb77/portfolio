import React, { useRef } from "react";
import { useContactReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("submit");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("Message sent");
        },
        () => {
          console.log("Message not sent");
        }
      );

    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputTextareaRef = useRef(null);
  const inputSubmitRef = useRef(null);

  const inputArr = [
    inputEmailRef,
    inputEmailRef,
    inputTextareaRef,
    inputSubmitRef,
  ];

  useContactReveal(inputArr);

  return (
    <div className="contact container mx-auto mt-40 " id="contact">
      <SectionTitle title={"contact"} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className="from-control overflow-hidden" ref={inputNameRef}>
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border py-12 px-24 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden" ref={inputEmailRef}>
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-12 px-24 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden" ref={inputTextareaRef}>
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-12 px-24 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
          />
        </div>
        <div className="from-control overflow-hidden" ref={inputSubmitRef}>
          <input
            type="submit"
            value="Send message"
            className="uppercase border py-12 px-24 rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
