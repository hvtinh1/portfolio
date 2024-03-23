import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
export default function Contact() {
  return (
    <section id="content" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hoangvutinh1@gmail.com">
          hoangvutinh1@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10">
        <input className="h-14 rounded-lg borderBlack" type="email"></input>
        <button type="submit">
          Submit <FaPaperPlane></FaPaperPlane>
        </button>
      </form>
    </section>
  );
}
