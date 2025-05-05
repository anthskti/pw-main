"use client";

import Link from "../components/Link";

export default function archive() {
    // temp
    const posts = [
        {
          title: "2025 Goals",
          date: "01-01-2025",
          discription: "My roadmap for becoming a better full-stack and UI/UX dev this year.",
          status: "Draft",
        },
        {
            title: "Why I Started Coding",
            date: "10-12-2024",
            discription: "A breakdown of how I got into software dev, from curiosity to real projects.",
            status: "Draft",
          },
        {
          title: "Lessons From Failing a Side Project",
          date: "08-05-2024",
          discription: "What I learned from burning out on a project I was once excited about.",
          status: "Idea",
        },
      ];

      return(
<div className="flex flex-col items-center w-full justify-center max-w-2xl mx-auto p-4">
    
    <header className="text-2xl text-left w-full font-bold mb-2">
        📝 Archive
    </header>
    <p className="text-neutral-600 dark:text-neutral-400 mb-8 w-full">
    An archive of my goals, failures, and lessons.
    </p>

    {/* notes */}
    <div className="space-y-6">
        {posts.map((post, i) => (
            <div key={i} className="group">
                <div className="flex justify-between items-center">
                    <Link className="text-lg font-semibold"> {post.title} </Link>
                    <time className="text-stone-500 dark:text-stone-500 text-sm">
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </time>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{post.discription}</p>
                {post.status !== "Published" && (
                <span className="text-xs inline-block mt-1 px-2 py-0.5 rounded-md bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
                    {post.status}
                </span>
                )}
            </div>
        ))}
    </div>
</div>

      );
}