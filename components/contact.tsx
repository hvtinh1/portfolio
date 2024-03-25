"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="content"
      className="text-center first-letter:mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport= {{
        once:true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hoangvutinh1@gmail.com">
          hoangvutinh1@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col" action={async (formData)=> {
        console.log(formData)
      }}>
        <input
          className="h-14 rounded-lg borderBlack p-4"
          placeholder="Your email"
          type="email"
         
        ></input>
        <textarea
          className="h-52 p-4 my-3 rounded-lg borderBlack"
          placeholder="Your message"
          required={true}
          maxLength={500}
        ></textarea>
        <button
          type="submit"
          className="hover:scale-110 active:scale-y-105 hover:bg-gray-950 group flex justify-center items-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group:hover:-translate-y-1"></FaPaperPlane>
        </button>
      </form>
    </motion.section>
  );
}
