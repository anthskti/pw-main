
import fs from "fs";
import path from "path";
import Link from "../components/Link";

// posts material
import { meta as whyIStartedCodingMeta} from "../archive/why-i-started-coding/meta.js";

export default async function archive() {
    // A perminant path with all pages
    // const postsDirectory = path.join(process.cwd(), "src/app/archive");

    // // Gets a list of the folders
    // const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

    // const folderNames = entries
    //     .filter((entry) => entry.isDirectory()) 
    //     .map((entry) => entry.name);

    // // Load each MDX file with its metadata, for main page
    
    // const posts = await Promise.all(
    //     folderNames.map(async (folderName) => {
    //         const { meta } = await import (`../archive/${folderName}/page.mdx`);
    //         return { ...meta, slug: folderName };
    //     })
    // );

    const posts = [
        {
        slug: "why-i-started-coding",
        ...whyIStartedCodingMeta,
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

            {/* posts */}
            <ul className="space-y-6">
                {posts.map(({ title, date, description, status, slug }) => (
                <li key={slug}>
                    <Link href={`/archive/${slug}`} isNextLink={true} className="text-xl font-semibold text-violet-600">
                    {title}
                    </Link>
                    <p className="text-sm text-neutral-500">
                    {new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
                    {status && status !== "Published" && (
                    <span className="text-xs inline-block mt-1 px-2 py-0.5 rounded-md bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100">
                        {status}
                    </span>
                    )}
                </li>
                ))}
            </ul>
        </div>
    );
}