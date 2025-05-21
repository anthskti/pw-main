export default function MdxLayout({ children }) {
  // Create any shared layout or styles here
  return (
    <div className="prose dark:prose-invert prose-stone
                    prose-headings:mt-8 prose-headings:font-semibold prose-heading:text-stone
                    ">
      {children}
    </div>
  )
}