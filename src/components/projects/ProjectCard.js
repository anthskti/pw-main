import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "../Link";

const shimmer = `
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#333" />
  <rect id="r" width="100%" height="100%" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const MAX_VISIBLE_TECH = 4;

export default function ProjectCard({
  title,
  category,
  href,
  description,
  image,
  technologies,
  github,
  demo,
}) {
  const src = typeof image === "string" ? image : image.src;
  const isVideo = src.endsWith(".mp4");
  const visibleTech = technologies.slice(0, MAX_VISIBLE_TECH);
  const hiddenTechCount = technologies.length - visibleTech.length;

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md dark:bg-zinc-900">
      {/* Image w/ shimmer and hover animation */}
      <div className="relative aspect-video w-full overflow-hidden">
        {isVideo ? (
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <Image
            src={image}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
            alt={title}
            fill
            className="object-cover object-center"
          />
        )}
      </div>

      {/* Card Content: Title, Cat, Desc, Technologies, Github, and Demo */}
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <span className="w-fit rounded-md border border-zinc-400 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-500 dark:text-zinc-400">
          {category}
        </span>

        <div className="flex items-start justify-between gap-3">
          <Link href={href} className="font-black text-lg leading-tight">
            {title}
          </Link>
          <div className="flex shrink-0 gap-1">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub`}
                className="rounded-lg p-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} demo`}
                className="rounded-lg p-1.5 text-zinc-600 transition-colors bg-zinc-100 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                <SquareArrowOutUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-amber-200 px-2 py-1 text-xs text-zinc-700 dark:bg-violet-500 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
          {hiddenTechCount > 0 && (
            <span className="rounded-lg px-2 py-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              +{hiddenTechCount}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
