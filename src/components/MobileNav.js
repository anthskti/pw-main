"use client";

import NextLink from "next/link";

function MobileNavLink({ link, onNavigate }) {
  const { name, href, isActive, isNextLink } = link;

  const className = `
    block rounded-lg px-3 py-2 text-sm transition-colors duration-200
    ${
      isActive
        ? "font-bold text-zinc-950 dark:text-zinc-50"
        : "font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
    }
  `.trim();

  if (isNextLink) {
    return (
      <NextLink
        href={href}
        onClick={onNavigate}
        className={className}
        aria-current={isActive ? "page" : undefined}
      >
        {name}
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={className}
    >
      {name}
    </a>
  );
}

export default function MobileNav({ links, onNavigate }) {
  return (
    <nav
      id="mobile-nav"
      className="rounded-lg bg-zinc-100/80 p-2 ring-1 ring-zinc-200 dark:bg-zinc-900/80 dark:ring-zinc-700"
      aria-label="Mobile navigation"
    >
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <MobileNavLink link={link} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
