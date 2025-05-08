"use client";

import Content from "./content.mdx";
import { meta } from "./meta";

export default function PostPage() {
  return (
    <article className="prose dark:prose-invert mx-auto max-w-2xl px-4 pt-10">
      <h1 className="text-2xl font-bold">{meta.title}</h1>
      <p className="text-sm text-neutral-500 mb-6">{meta.date}</p>
      <Content />
    </article>
  );
}