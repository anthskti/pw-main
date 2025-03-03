import Image from "next/image";
import Link from "./components/Link";
import YorkULogo from "@/app/components/icons/YorkULogo.png";

export default function About() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20 font-myriad">
    {/* </div><div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-myriad"> */}

      <header className="text-xl text-center font-myriad">
        <h1>Anthony Pham</h1>
      </header>

      <ul className="grid gap-1 text-myriad">
        <li className="group flex items-start gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200"> 
          <div className="absolute left-0 top-[10px] w-[5px] h-[2px] bg-stone-800 dark:bg-stone-200 transform transition-all duration-300 group-hover:scale-110 group-hover:w-[10px]" />
          <span className="text-stone-600 dark:text-stone-400">
            Computer Science at {" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={YorkULogo} alt="Yorku Logo" width={15} height={15} className="object-contain relative top-[2px]" />
              <Link href="https://www.yorku.ca/" className="font-medium">York University</Link>
            </span>
          </span>            
        </li>
        <li className="group flex items-start gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200"> 
          <div className="absolute left-0 top-[10px] w-[5px] h-[2px] bg-stone-800 dark:bg-stone-200 transform transition-all duration-300 group-hover:scale-110 group-hover:w-[10px]" />
          <span className="text-stone-600 dark:text-stone-400">
            Passionate in full-stack development, leveraging my skills to create impactful applications.
          </span>            
        </li>
        <li className="group flex items-col gap-4 hover:translate-x-1 pl-4 relative transition-transform duration-200"> 
          <div className="absolute left-0 top-[10px] w-[5px] h-[2px] bg-stone-800 dark:bg-stone-200 transform transition-all duration-300 group-hover:scale-110 group-hover:w-[10px]" />
          <span className="text-stone-600 dark:text-stone-400 font-medium">
            Currently:
          </span>     
          <ul className="grid gap-1 text-myriad">
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-600 dark:text-stone-400">
                working as Costco Wholesale part-time.
              </span>
            </li>
            <li className="relative flex items-start gap-2 group/item">
              <span className="text-stone-600 dark:text-stone-400">
              created a <Link href="https://github.com/anthskti/LSTM-Stock-Predictor" className="font-medium"> machine learning model</Link> that help predict if a stock will go up based on multiple patterns real trading investors analyze.
              </span>

            </li>
          </ul>       
        </li>
      </ul>

        
    </div>
  );
}
