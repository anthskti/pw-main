import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "./Link";


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


export default function ProjectCard({
    title,
    href,
    description,
    image,
    technologies,
    github,
    demo,
}) {
    const src = typeof image === "string" ? image : image.src;
    const isVideo = src.endsWith(".mp4");

    return (
        <div className={`group bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}>
            {/* Image w/ shimmer and hover animation */}
            <div className="relative">
                {isVideo ? (
                    <video
                        src={image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-t-xl w-full h-[200px] group-hover:h-[275px] object-cover object-center transition-all duration-[400ms]"
                    />
                ) : (
                    <Image 
                        src={image}
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
                        alt={title}
                        className="rounded-t-xl w-full h-[200px] group-hover:h-[275px] object-cover object-center transition-all duration-[400ms]"
                    />
                )}
            </div>
            {/* Card Content: Title, Desc, Technologies, Github, and Demo*/}
            <div className="p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-4">
                        <div> 
                            <Link href={`${href}`} className="font-semibold text-2xl">
                            {title}
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            {github && (
                                <a
                                    href={github}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-xl text-neutral-700 dark:text-neutral-400 hover:bg-stone-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {demo && (
                                <a
                                    href={demo}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-xl text-neutral-400 hover:ng-neutral-700 transition-colors"
                                >
                                    <SquareArrowOutUpRight className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                    <p className="mt-2 text-stone-700 dark:text-stone-300 leading-relaxed">{description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 rounded-lg bg-amber-200 dark:bg-violet-500 text-stone-600 dark:text-neutral-300"
                                >
                                {tech}
                                </span>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
}


