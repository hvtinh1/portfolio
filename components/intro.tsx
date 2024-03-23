"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLink, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
export default function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              width="192"
              height="192"
              quality="95"
              src="/image.JPG"
              alt="Tinh photo"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            ></Image>
            <span className="text-4xl absolute right-0 bottom-0">😊</span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Tinh.</span> I&apos;sm a{" "}
        <span className="font-bold">Front End developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex bg-gray-900 text-white px-7 py-3 items-center gap-2 rounded-full hover:scale-110 hover:bg-gray-950 active:scale-y-105 transition-all"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"></BsArrowRight>
        </Link>
        <a
          className="group flex cursor:pointer bg-white  px-7 py-3 items-center gap-2 rounded-full hover:scale-110 active:scale-y-105 transition-all border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition "></HiDownload>
        </a>
        <a className="flex bg-white text-gray-700 p-4 items-center gap-2 rounded-full active:scale-y-105 transition-all border border-black/10">
          <BsLinkedin href="https://linkedin.com" target="_blank"></BsLinkedin>
        </a>
        <a className="flex bg-white text-gray-700 p-4 items-center gap-2 rounded-full active:scale-y-105 transition-all border border-black/10">
          <FaGithubSquare></FaGithubSquare>
        </a>
      </motion.div>
    </section>
  );
}
