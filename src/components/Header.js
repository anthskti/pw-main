"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HorizontalNav from "./HorizontalNav";
import MobileNav from "./MobileNav";
import { Sun, Moon, Menu, X } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

import InitialLight from "@/assets/initial1.png";
import InitialDark from "@/assets/initial2.png";

function ThemeToggle({ isDark, onToggle }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center">
        {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
      </span>
      <button
        type="button"
        onClick={onToggle}
        aria-label="Toggle dark mode"
        className="flex h-6 w-10 items-center rounded-full bg-amber-300 p-1 transition-all duration-300 dark:bg-violet-500"
      >
        <span
          className={`h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
            isDark ? "translate-x-0" : "translate-x-4"
          }`}
        />
      </button>
    </div>
  );
}

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldUseDark =
      storedTheme === "dark" || (!storedTheme && prefersDark);
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  };

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
      name: "Writing",
      href: "/writing",
      isActive: pathname === "/writing" || pathname.startsWith("/writing/"),
      isNextLink: true,
    },
    {
      name: "Resume",
      href: "/anthony_resume.pdf",
      isActive: false,
      isNextLink: false,
    },
  ];

  return (
    <header className="relative w-full">
      <div className="flex items-center justify-between gap-4">
        <NextLink href="/" className="shrink-0">
          <Image
            src={isDark ? InitialLight : InitialDark}
            alt="Anthony Pham home"
            className="w-12 transform transition-all duration-300 hover:scale-[1.07]"
          />
        </NextLink>

        {/* Desktop */}
        <div className="hidden items-center gap-2 sm:flex">
          <HorizontalNav links={links} />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-lg ring-1 ring-zinc-200 p-2 text-zinc-700 transition-colors hover:bg-amber-200 dark:ring-zinc-700 dark:text-zinc-200 dark:hover:bg-violet-500/40"
          >
            <X
              className={`h-5 w-5 ${mobileOpen ? "" : "-rotate-45"} duration-300`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mt-4 sm:hidden">
          <MobileNav links={links} onNavigate={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}
