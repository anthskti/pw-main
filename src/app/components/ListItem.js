

export default function ListItem({ children }) {
    return (
        <li className="group flex items-start gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200"> 
          {/* bullet point to plus point */}
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-90" />
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-180" />
          <span className="text-stone-600 dark:text-stone-400"> {children} </span>
        </li>
    );
}