import Image from "next/image";
import Link from "@/components/Link";
import NextLink from "next/link";
import ListItem from "@/components/about/ListItem";
import ArrowItem from "@/components/about/ArrowItem.js";

import headshot from "@/assets/googlepwpfp.png";

import YorkULogo from "@/assets/icons/YorkULogo.png";
import ITFLogo from "@/assets/icons/ITFLogo.jpg";
import UofTHacksLogoWhite from "@/assets/icons/UofTHacksLogoWhite.png";
import UofTHacksLogoBlack from "@/assets/icons/UofTHacksLogoBlack.png";
import NorthcrestLogo from "@/assets/icons/NorthcrestLogo.jpeg";
import ClearupLogo from "@/assets/icons/ClearupLogo.png";
import ClementineLogo from "@/assets/icons/ClementineLogo.png";
import CostcoLogo from "@/assets/icons/CostcoLogo.jpg";
// import LunaLogo from "@/assets/icons/LunaLogo.png";

import { Sword } from "lucide-react";

export default function About() {
  return (
    <div className="py-2 lg:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 max-w-2xl flex-1">
            <header className="text-2xl font-bold">
              Hey, I'm Anthony (or Anth)
            </header>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300 mt-4">
              I'm a Software Engineer based in Toronto, Canada, focused on
              website development, AI, and data analysis.
              <br />
              Outside of engineering, I've enjoyed doing calisthenics, playing
              piano(ish), video editing (kind of retired), karoaking, playing
              video games, and chess (700 elo).
            </p>

            {/* Experience + Education */}
            <ul className="grid gap-1 mt-4">
              <ListItem>
                Software Engineering @{" "}
                <span className="inline-flex items-baseline gap-1">
                  <Image
                    src={UofTHacksLogoBlack}
                    alt="UofTHacks logo"
                    width={15}
                    height={15}
                    className="object-contain relative top-[px] block dark:hidden"
                  />
                  <Image
                    src={UofTHacksLogoWhite}
                    alt="UofTHacks logo"
                    width={15}
                    height={15}
                    className="object-contain relative top-[px] hidden dark:block"
                  />
                  <Link href="https://uofthacks.com/" className="font-bold">
                    UofTHacks
                  </Link>
                </span>
              </ListItem>

              <ListItem>
                Software Engineering @{" "}
                <span className="inline-flex items-baseline gap-1">
                  {/* <Image
                    src={YorkULogo}
                    alt="Luna PM"
                    width={15}
                    height={15}
                    className="object-contain relative top-[2px]"
                  /> */}
                  <Link
                    href="https://www.perimenopauselab.com/"
                    className="font-bold"
                  >
                    Luna by PM Lab
                  </Link>
                </span>
              </ListItem>

              <ListItem>
                Computer Science @{" "}
                <span className="inline-flex items-baseline gap-1">
                  <Image
                    src={YorkULogo}
                    alt="Yorku"
                    width={15}
                    height={15}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://www.yorku.ca/" className="font-bold">
                    LSE at York University
                  </Link>
                </span>
              </ListItem>
            </ul>

            {/* What I've been Building / Projects */}
            <ul className="grid gap-1 mt-4">
              <ListItem>
                <span className="font-bold italic tracking-wider">
                  What I've been building:
                </span>
                <ul className="min-w-0 w-full pl-5">
                  <ArrowItem>
                    <span className="inline-flex items-baseline gap-1">
                      <Image
                        src={ClearupLogo}
                        alt="Clearup Logo"
                        width={15}
                        height={15}
                        className="object-contain relative top-[2px]"
                      />
                      <Link
                        href="https://www.clearup.skin/"
                        className="font-bold"
                      >
                        Clearup
                      </Link>
                    </span>
                    {": "}A skincare organizer where users compare real sellers
                    prices and build + share personalized routines.
                  </ArrowItem>

                  <ArrowItem>
                    <Link href="" className="font-bold">
                      Code Review Agent
                    </Link>
                    {": "}
                    In a new world that ships fast, an agentic ai pipeline that
                    reviews Github PR requests, generating a pull request
                    report.
                  </ArrowItem>

                  <ArrowItem>
                    <span className="inline-flex items-baseline gap-1">
                      <Image
                        src={ClementineLogo}
                        alt="Clementine Logo"
                        width={15}
                        height={15}
                        className="object-contain relative top-[2px]"
                      />
                      <Link
                        href="https://clementine-pi.vercel.app/"
                        className="font-bold"
                      >
                        Clementine
                      </Link>
                    </span>
                    {": "} turns your investment portfolio into a little garden,
                    using AI to look at your real financial data and give you
                    advice that's actually fun to check in on.
                  </ArrowItem>

                  {/* <ArrowItem>
                    <Link href="" className="font-bold">
                      PowerRange
                    </Link>
                  </ArrowItem> */}
                </ul>
              </ListItem>
            </ul>
            {/* Previously */}
            <ul className="grid gap-1 mt-4">
              <ListItem>
                <span className="font-bold italic tracking-wider text-zinc-900 dark:text-zinc-100">
                  Previously:
                </span>
                <ul className="min-w-0 w-full pl-5">
                  <ArrowItem>
                    Technical Lead @{" "}
                    <span className="inline-flex items-baseline gap-1">
                      <Image
                        src={NorthcrestLogo}
                        alt="Northcrest Logo"
                        width={15}
                        height={15}
                        className="object-contain relative top-[2px]"
                      />
                      <Link
                        href="https://www.northcrestdev.ca/"
                        className="font-bold"
                      >
                        Northcrest YZD
                      </Link>
                      via C4 Capstone
                    </span>
                  </ArrowItem>

                  <ArrowItem>
                    UX Designer @{" "}
                    <Link
                      href="https://www.instagram.com/popular/art-circle-of-alberta/"
                      className="font-bold"
                    >
                      Art Circle of Alberta
                    </Link>
                  </ArrowItem>

                  <ArrowItem>
                    Associate @{" "}
                    <span className="inline-flex items-baseline gap-1">
                      <Image
                        src={CostcoLogo}
                        alt="Costco Logo"
                        width={15}
                        height={15}
                        className="object-contain relative top-[2px]"
                      />
                      <Link href="https://www.costco.ca/" className="font-bold">
                        Costco Wholesale
                      </Link>
                    </span>{" "}
                  </ArrowItem>

                  <ArrowItem>
                    Deputy External @{" "}
                    <span className="inline-flex items-baseline gap-1">
                      <Image
                        src={ITFLogo}
                        alt="Yorku ITF Taekwondo Logo"
                        width={15}
                        height={15}
                        className="object-contain relative top-[2px]"
                      />
                      <Link
                        href="https://www.instagram.com/yorktaekwondo/"
                        className="font-bold"
                      >
                        YorkU ITF Taekwondo
                      </Link>
                    </span>{" "}
                  </ArrowItem>
                </ul>
              </ListItem>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-56 h-56 md:w-72 md:h-72 relative rounded-xl border-2 border-zinc-700 dark:border-zinc-200 overflow-hidden transform transition-all duration-300 shadow-sm hover:shadow-md">
              <Image
                src={headshot}
                alt="Anthony Pham headshot"
                draggable={false}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <NextLink
              href="/anthony_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-4 px-5 rounded-xl border-2 border-zinc-700 dark:border-zinc-200 hover:bg-amber-200 dark:hover:bg-violet-500 hover:text-stone-900 dark:hover:text-zinc-100 transform transition-all duration-300 hover:scale-[1.02] active:scale-1 shadow-sm hover:shadow-md"
            >
              Check out my resume!{" "}
              <Sword className="size-5 inline align-top ml-1" />
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
