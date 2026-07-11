export default function ListItem({ children, className }) {
  return (
    <li
      className={`group flex min-w-0 items-start gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200 ${className ?? ""}`}
    >
      {/* - to + animation */}
      <div className="absolute left-0 top-[13px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-90" />
      <div className="absolute left-0 top-[13px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-180" />

      <div className="min-w-0 flex-1 break-words leading-relaxed text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </li>
  );
}
