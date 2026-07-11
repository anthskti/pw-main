export default function ArrowItem({ children }) {
  return (
    <li className="relative flex min-w-0 items-start gap-4 group/item">
      <span className="absolute left-[-20px] top-0 shrink-0 text-zinc-700 dark:text-zinc-300">
        ↳
      </span>
      <span className="min-w-0 flex-1 break-words">{children}</span>
    </li>
  );
}
