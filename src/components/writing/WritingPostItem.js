import Link from "@/components/Link";

export default function WritingPostItem({
  title,
  slug,
  date,
  description,
  status,
}) {
  return (
    <li className="rounded-xl ring-1 ring-zinc-700 dark:ring-zinc-300 p-4 transition-all duration-300 hover:scale-[1.005] hover:shadow-sm">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <Link
          href={`/writing/${slug}`}
          isNextLink
          className="text-lg font-bold"
        >
          {title}
        </Link>
        <time
          dateTime={date}
          className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400"
        >
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {description}
      </p>
      {/* <span className="mt-3 inline-block rounded-md border border-zinc-400 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-zinc-600 dark:border-zinc-500 dark:text-zinc-400">
        {status}
      </span> */}
    </li>
  );
}
