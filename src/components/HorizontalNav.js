"use client";

import Link from "./Link";

export default function HorizontalNav({ links }) {
  return (
    <nav className="flex items-center gap-0.5 sm:gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          variant="nav"
          isActive={link.isActive}
          isNextLink={link.isNextLink}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
