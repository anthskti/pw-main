import fs from "fs";
import path from "path";
import Link from "../components/Link";

export default async function Writing() {
  // Path to the writing directory
  const postsDirectory = path.join(process.cwd(), "src/app/archive");

  // Read all entries (files and folders) in the `writing` directory
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  // Filter for directories only
  const folderNames = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  // For each folder, dynamically import the `page.mdx` file and extract its meta
  const posts = await Promise.all(
    folderNames.map(async (folderName) => {
      const { meta } = await import(`../archive/${folderName}/page.mdx`);
      return { ...meta, slug: folderName }; // Use folder name as the slug
    })
  );

  // Sort posts by date (most recent first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div className="flex flex-col items-center w-full justify-center max-w-2xl mx-auto p-4">
      <header className="text-2xl text-left w-full font-bold mb-2">
        Anth's Archive🤔
      </header>
      {/* <p className="text-neutral-600 dark:text-neutral-400 mb-4 w-full">
        An archive of my goals, failures, and lessons.
      </p> */}
      <ul className="w-full space-y-6 text-stone-600 dark:text-stone-400">
        {/* posts */}
        {posts.map(({ title, date, description, status, slug }) => (
          <li key={slug} className="group">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-stone-800 dark:text-stone-200">
                <Link href={`/archive/${slug}`} isNextLink={true}>
                  {title}
                </Link>
              </span>
              <time className="text-sm text-stone-500 dark:text-stone-500">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
            <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
            <span className="text-xs inline-block mt-1 px-2 py-1 rounded-md bg-amber-200 text-yellow-800 dark:bg-violet-500 dark:text-yellow-100">
              {status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
