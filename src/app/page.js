import Image from "next/image";
import Link from "./components/Link";
import NextLink from "next/link";
import Myself from "@/app/assets/me.png"
import YorkULogo from "@/app/components/icons/YorkULogo.png";

// Main Page - About Me

export default function About() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center max-h-screen p-6 pb-20 gap-32 mt-20">
      
      {/* Pic of Me */}
      <div className="flex flex-col items-center"> 
        <div className="w-48 h-48 relative rounded-xl border-2 border-stone-200 overflow-hidden">
          <Image 
            src = {Myself}
            alt = "Anthony Pham Picture"
            fill 
            className="object-cover object-top"
          />
        </div>
      </div>
      
      <header className="text-xl text-left w-full max-w-2xl">
        Hey, I'm Anthony Pham
      </header>

      {/* List Section */}
      <ul className="grid gap-2 w-full max-w-2xl">
        {/* Intro */}
        <li className="group flex items-start gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200"> 
          {/* bullet point to plus point */}
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-90" />
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-180" />
          <span className="text-stone-600 dark:text-stone-400">
            A passionate creator, looking at working in Full-Stacks, wanting to leverage my skills to create impactful applications. 
          </span>            
        </li>
        {/* School */}
        <li className="group flex items-start gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200"> 
          {/* bullet point to plus point */}
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-90" />
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-180" />
          <span className="text-stone-600 dark:text-stone-400">
            I'm studying Computer Science at Lassonde School of Engineering in {" "} 
            <span className="inline-flex items-baseline gap-1">
              <Image src={YorkULogo} alt="Yorku Logo" width={15} height={15} className="object-contain relative top-[2px]" />
              <Link href="https://www.yorku.ca/" className="font-medium">York University.</Link>
            </span>
          </span>            
        </li>
        {/* What I'm current upto */}
        <li className="group flex items-col gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200"> 
          {/* bullet point to plus point */}
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-90" />
          <div className="absolute left-0 top-[10px] transform -translate-y-1/2 w-[8px] h-[2px] bg-stone-800 dark:bg-stone-200 transition-all duration-300 group-hover:rotate-180" />
          <span className="text-stone-600 dark:text-stone-400 font-medium">
            Recently:
          </span>     
          <ul className="grid gap-1 text-myriad">
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-600 dark:text-stone-400">
                I've been working part-time at Costco Wholesale; do your <Link href="https://costcodle.com/" className="font-medium">costcodle</Link> today.
              </span>
            </li>
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-600 dark:text-stone-400">
                I've been building my personal website and planning a website start-up for skincare organization.
              </span>
            </li>
          </ul>  
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-xl border-2 border-stone-600 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md">
        check out my resume!
      </NextLink>

        
    </div>
  );
}
