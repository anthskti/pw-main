export default function MdxLayout({ children }) {
  return (
    <article
      className="mx-auto w-full py-2 lg:py-8
        prose prose-zinc dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
        prose-p:leading-relaxed prose-p:text-zinc-700 dark:prose-p:text-zinc-200
        prose-a:font-bold prose-a:text-zinc-900 dark:prose-a:text-zinc-100
        prose-li:text-zinc-700 dark:prose-li:text-zinc-300
        prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
        prose-img:mx-auto prose-img:rounded-xl prose-img:ring-1 prose-img:ring-zinc-300 dark:prose-img:ring-zinc-700 prose-img:w-full prose-img:sm:w-2/3
        [&_iframe]:mx-auto [&_iframe]:my-6 [&_iframe]:aspect-video [&_iframe]:h-auto [&_iframe]:w-full [&_iframe]:sm:w-2/3 [&_iframe]:rounded-xl [&_iframe]:ring-1 [&_iframe]:ring-zinc-300 dark:[&_iframe]:ring-zinc-700"
    >
      {children}
    </article>
  );
}
