"use client";

import Image from "next/image";
import Link from "./components/Link";
import NextLink from "next/link";
import Myself from "@/app/assets/me.png";
import Myself2 from "@/app/assets/meafterhackathon.png";
import YorkULogo from "@/app/components/icons/YorkULogo.png";
import { useState } from "react";
import { Sword } from "lucide-react";

// import resume from "resume.pdf";

// Main Page - About Me

export default function About() {
  return (
    <div className="flex flex-col items-center w-full justify-center max-w-2xl mx-auto p-4">
      {/* Pic of Me */}
      <div className="flex flex-col items-center m-5">
        <div className="w-48 h-48 relative rounded-xl border-2 border-stone-700 dark:border-stone-200 overflow-hidden transform transition-all duration-300 hover:scale-[1.01] shadow-sm hover:shadow-md">
          <Image
            src={Myself2}
            alt="Anthony Pham Picture"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      <header className="text-xl text-left w-full max-w-2xl">
        I'm {""}
        <span className="font-bold">Anthony </span>
        (or
        <span className="font-bold"> Anth</span>)
      </header>

      {/* List Section */}
      <ul className="grid gap-2 w-full max-w-2xl">
        {/* Intro */}
        <li className="group flex items-start gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200">
          {/* bullet point to plus point */}
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-90" />
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-180" />
          <span className="text-stone-700 dark:text-stone-400">
            Software engineer and fullstacks development. My goals is to make my
            ideas turn to reality.
          </span>
        </li>
        {/* School */}
        <li className="group flex items-start gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200">
          {/* bullet point to plus point */}
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-90" />
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-180" />
          <span className="text-stone-700 dark:text-stone-400">
            Computer Science in <span> </span>
            <span className="inline-flex items-baseline gap-1">
              <Image
                src={YorkULogo}
                alt="Yorku Logo"
                width={15}
                height={15}
                className="object-contain relative top-[2px]"
              />
              <Link href="https://www.yorku.ca/" className="font-medium">
                LSE at York University.
              </Link>
            </span>
          </span>
        </li>
        {/* What I'm current upto */}
        <li className="group flex flex-col hover:translate-x-1 pl-4 relative transition-transform duration-200">
          {/* bullet point to plus point */}
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-90" />
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-180" />
          <span className="text-stone-700 dark:text-stone-400 font-medium">
            Lately:
          </span>
          {/* inside jots for what I've been upto*/}
          <ul className="grid gap-1 text-myriad pl-4">
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-700 dark:text-stone-400">
                Self developing a skincare website organizer, be ready for it.
              </span>
            </li>
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-700 dark:text-stone-400">
                In a team of four, created PowerRange, a electric vehicle
                e-commerence platform.
              </span>
            </li>
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-700 dark:text-stone-400">
                Working part-time at Costco Wholesale; do your{" "}
                <Link href="https://costcodle.com/" className="font-medium">
                  Costcodle
                </Link>{" "}
                today.
              </span>
            </li>
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-700 dark:text-stone-400">
                Making an AI healthcare cat chatbot with my friend.
              </span>
            </li>
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-700 dark:text-stone-400">
                Previously made a ML Stock Predicter called{" "}
                <Link
                  href="https://github.com/anthskti/Trace"
                  className="font-medium"
                >
                  Trace
                </Link>{" "}
                used to predict a stock value.
              </span>
            </li>
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-700 dark:text-stone-400">
                Been practicing martial arts with my best friend.
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <NextLink
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center mt-4 py-4 px-5 rounded-xl border-2 border-stone-700 dark:border-stone-200 hover:bg-amber-200 dark:hover:bg-violet-500 hover:text-purple transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        check out my resume! <Sword className="size-5 inline align-top ml-1" />
      </NextLink>
    </div>
  );
}
