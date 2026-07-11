"use client";

import NextLink from "next/link";

function NavLinkGlow({ isActive }) {
  return (
    <>
      {/* Blurred glow — absolute so it never affects layout */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="absolute inset-0 scale-110 rounded-lg bg-amber-300/60 blur-lg dark:bg-violet-500/50" />
      </span>
    </>
  );
}

function NavLinkUnderline({ isActive }) {
  if (isActive) return null;

  return (
    <>
      <span
        aria-hidden="true"
        className="absolute bottom-1 left-3 right-3 h-px bg-zinc-300 dark:bg-zinc-600"
      />
      <span
        aria-hidden="true"
        className="nav-link-hover-line absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-zinc-800 opacity-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:opacity-100 dark:bg-zinc-200"
      />
    </>
  );
}

export default function Link({
  className = "",
  href,
  isActive = false,
  isNextLink,
  variant = "inline",
  children,
}) {
  if (variant === "nav") {
    const navClassName = `
      nav-link group
      ${isActive ? "text-zinc-950 dark:text-zinc-50" : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100"}
      ${className}
    `.trim();

    const content = (
      <>
        <NavLinkGlow isActive={isActive} />
        <NavLinkUnderline isActive={isActive} />
        <span className="relative z-10">{children}</span>
      </>
    );

    return isNextLink ? (
      <NextLink
        href={href}
        className={navClassName}
        aria-current={isActive ? "page" : undefined}
      >
        {content}
      </NextLink>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={navClassName}
      >
        {content}
      </a>
    );
  }

  const inlineClassName = `
    link-sweep
    text-zinc-600 dark:text-zinc-300
    hover:text-zinc-950 dark:hover:text-zinc-100
    ${className}
  `.trim();

  return isNextLink ? (
    <NextLink href={href} className={inlineClassName}>
      {children}
    </NextLink>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={inlineClassName}
    >
      {children}
    </a>
  );
}
