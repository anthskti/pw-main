"use client";

import { usePathname } from "next/navigation";
import HorizontalNav from "./HorizontalNav";
import Link from "./Link";

export default function Header() {
    const pathname = usePathname();

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
          name: "Journal",
          href: "/journal",
          isActive: pathname.startsWith("/journal"),
          isNextLink: true,
        },
    ];

    return (
      <div className="flex justify-between items-center">
        <h1 className="text-neutral-700 dark:text-neutral-300 font-semibold">
          <Link href="/" isNextLink={true}>Anthony Pham</Link>
        </h1>
        <h1 className="text-neutral-700 dark:text-neutral-300 font-myraid"></h1>
        <HorizontalNav links={links} />
      </div>


    );
}