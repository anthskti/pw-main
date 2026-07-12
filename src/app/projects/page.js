"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectList from "@/components/projects/ProjectList";
import ProjectFilters from "@/components/projects/ProjectFilters";
import Link from "@/components/Link";
import { projects } from "@/data/projects";

function filterProjects(projects, category, searchTerm) {
  const lower = searchTerm.toLowerCase().trim();

  return projects.filter((project) => {
    if (category !== "All" && project.category !== category) return false;
    if (!lower) return true;

    return (
      project.title.toLowerCase().includes(lower) ||
      project.description.toLowerCase().includes(lower) ||
      project.category.toLowerCase().includes(lower) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(lower))
    );
  });
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(
    () => filterProjects(projects, activeCategory, searchTerm),
    [activeCategory, searchTerm],
  );

  return (
    <div className="py-2 lg:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
            An archive of things I&apos;ve built.
          </p>
        </header>

        <div className="mb-6 flex flex-col gap-4">
          <ProjectFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600 dark:text-zinc-300" />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border-2 border-zinc-700 bg-transparent py-2.5 pl-10 pr-4 text-zinc-700 placeholder:text-zinc-500 focus:border-amber-300 focus:outline-none dark:border-zinc-200 dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-500"
            />
          </div>
        </div>

        <ProjectList projects={filteredProjects} />

        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
          Check out all my projects{" "}
          <Link
            href="https://github.com/anthskti?tab=repositories"
            className="font-bold"
          >
            on GitHub
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
