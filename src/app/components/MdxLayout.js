export default function MdxLayout({ children }) {
    return (
      <div className="prose dark:prose-invert mx-auto max-w-2xl px-4 pt-12">
        {children}
      </div>
    );
  }