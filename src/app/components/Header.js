"use client";

import { usePathname } from "next/navigation";
import {useEffect, useState } from "react";
import HorizontalNav from "./HorizontalNav";
import Link from "./Link";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import favicon from "@/app/favicon.ico";
import NextLink from "next/link";

import InitialLight from "@/app/assets/initial1.png";
import InitialDark from "@/app/assets/initial2.png";

export default function Header() {

  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  }

  const links = [
    {
      name: "About",
      href: "/",
      isActive: pathname === "/",
      isNextLink: true,
    },
    {
      name: "Projects",
      href: "/projects",
      isActive: pathname === "/projects",
      isNextLink: true,
    },
    {
      name: "Archive",
      href: "/archive",
      isActive: pathname === "/archive",
      isNextLink: true,
    },
  ];

  return (
    <div className="flex justify-between items-center">
      {/* <h1 className="text-neutral-700 dark:text-neutral-300 font-semibold">
        <Link href="/" isNextLink={true}>AP</Link>
      </h1> */}
      <NextLink href="/" >
        <Image 
            src={isDark ? InitialLight : InitialDark}
            alt="AP"
            className="w-12 transform transition-all duration-300 hover:scale-[1.07]"
          />
      </NextLink>
      <h1 className="text-neutral-700 dark:text-neutral-300 font-myraid"></h1>
      <div className="flex flex-row gap-2">
        <HorizontalNav links={links} />
        {/* Light Mode Toggle */}
        <span className="flex items-center">
          {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
        </span>
        <button
          onClick={toggleTheme}
          className="w-10 h-6 flex items-center bg-amber-300 dark:bg-violet-500 rounded-full p-1 transition-all duration-300"
        >
          <span
            className={`flex top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${isDark ? "translate-x-0" : "translate-x-4"}`} 
          />
        </button>
      </div>
    </div>
  );
}