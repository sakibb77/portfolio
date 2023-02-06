import React from "react";
import SectionTitle from "./SectionTitle";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact container mx-auto mt-40 " id="contact">
      <SectionTitle title={"contact"} />

      <form onSubmit={sendEmail} className="mt-40 grid grid-cols-2 gap-20">
        <div className="from-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border py-12 px-24 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-12 px-24 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-12 px-24 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
          />
        </div>
        <div className="from-control overflow-hidden">
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
