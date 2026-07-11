"use client";

import { PROJECT_CATEGORIES } from "@/data/projects";

export default function ProjectFilters({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {PROJECT_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={isActive}
            className={`rounded-xl border-2 px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "border-zinc-700 bg-amber-200 text-zinc-900 dark:border-zinc-200 dark:bg-violet-500 dark:text-zinc-100"
                : "border-zinc-700 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-900"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
