import fs from "fs";
import path from "path";
import WritingPostItem from "@/components/writing/WritingPostItem";

export default async function Writing() {
  // Path to the writing directory
  const postsDirectory = path.join(process.cwd(), "src/app/writing");

  // Read all entries (files and folders) in the `writing` directory
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  // Filter for directories only
  const folderNames = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  // For each folder, dynamically import the `page.mdx` file and extract its meta
  const posts = await Promise.all(
    folderNames.map(async (folderName) => {
      const { meta } = await import(`../writing/${folderName}/page.mdx`);
      return { ...meta, slug: folderName }; // Use folder name as the slug
    }),
  );

  // Sort posts by date (most recent first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="py-2 lg:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Anth&apos;s Writing ✍️</h1>
          <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
            Goals, builds, lessons learned, and whatever else is on my mind.
          </p>
        </header>

        <ul className="grid gap-4">
          {posts.map(({ title, date, description, status, slug }) => (
            <WritingPostItem
              key={slug}
              title={title}
              slug={slug}
              date={date}
              description={description}
              status={status}
            />
          ))}
        </ul>

        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
          More thoughts coming soon.
        </p>
      </div>
    </div>
  );
}
