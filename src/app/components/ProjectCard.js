import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "./Link";



// images
import fallback from "../assets/mybias.jpg";

const shimmer = `
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
</svg>
`;

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
    return (
        <div className={`group bg-neutral-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}>
            {/* Image w/ shimmer and hover animation */}
            <div className="relative">
                <Image 
                    src={image || fallback}
                    alt={title}
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
                    className="rounded-t-xl w-full h-[200px] group-hover:h-[275px] object-cover object-center transition-all duration-500"
                />
            </div>
            {/* Card Content: Title, Desc, Technologies, Github, and Demo*/}
            <div className="p-4">
                <div className="flex justify-between items-start gap-4">
                    <div> 
                        <Link className="font-semibold text-xl">
                        {title}
                    </Link>
                    <p className="text-400 mt-2 text-stone-300 leading-relaxed">{description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs px-2 py-1 rounded-lg bg-neutral-700 text-neutral-300"
                            >
                            {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex gap-2">
                    {github && (
                        <a
                            href={github}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl text-neutral-400 hover:bg-neutral-700 transition-colors"
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
            </div>
        </div>
    );
}


