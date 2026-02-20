"use client";

// modular
import ProjectList from "../components/ProjectList";
import Link from "../components/Link";

// react
import { useState } from "react";
import { Search } from "lucide-react";

// images
import schizo from "../assets/projects/schizo.png";
import percept from "../assets/projects/percept.jpg";
import yorkuparking from "../assets/projects/yorkuparking.png";
import traceDemo from "../assets/projects/trace-demo.gif";
import powerrange from "../assets/projects/powerrangepage.png";
import katana from "../assets/projects/katanathumbnail.png";
// import touchless from "/videos/touchlessvid1.mp4"; 
import temp from "../assets/projects/temp.png";
import summertrials from "../assets/projects/summertrials.png";
import clearup from "../assets/projects/clearup.png";



export default function Projects() {
  const projects = [
    // {
    //   title: "CafeTom"

    // },
    {
      title: "ClearUp",
      href: "https://clear-up.vercel.app/",
      description:
        `
          Want clear skin but you don't know where to start? 
          This site will help you build and organize a perfect skincare routine for you.
          If it's budget, skin type, or specific needs, you will find it here.
          Think of it as a PCPartPicker for Skincare. 
        `,
      image: clearup,
      technologies: [
        "Next.js", 
        "Express.js", 
        "PostgreSQL", 
        "RESTful APIs", 
        "Docker",
        "Python"
      ],
      github: "https://github.com/anthskti/fabfab",
      demo: "https://clear-up.vercel.app/",
    },
    {
      title: "fabFab",
      href: "https://github.com/anthskti/fabfab",
      description:
        `
          Top 5 of CSHub Hacks, developed a image → 3D asset in FBX format for game developers.
          Searching for 3D assets can be hard and costly for many, so we developed a prototype for 
          3D asset generatation so creators can have solid assets for free and without much time wasting
          on searching for fabs.
        `,
      image: temp,
      technologies: [
        "Python", 
        "FastAPI", 
        "Google Gemini", 
        "Blender", 
        "Three.js"
      ],
      github: "https://github.com/anthskti/fabfab",
    },
    {
      title: "Tag Team Summer Trials",
      href: "https://anthskti.itch.io/tag-team-summer-trials",
      description:
        `
          A 2D single player game, where you have to control two different characters to complete the level. 
          The player can control both a Penguin and Elephant, tag team style. 
          The objective is to get both characters to the finish line, however, there are many obstacles blocking the two characters. 
          There will be a timer with a badge rating, to fit a racing theme. 
        `,
      image: summertrials,
      technologies: [
        "Puzzle / Racing Game",
        "Godot",
        "GDscript",
        "Pixilart",
      ],
      github: "https://github.com/anthskti/SummerTrials",
      demo: "https://anthskti.itch.io/tag-team-summer-trials",
    },
    {
      title: "The Final Breath",
      href: "https://youtu.be/yG9tJz8P99w",
      description:
        `
          3D modeled a virtual environment made with Unreal Engine 5.6.
          Following the concept from the popular anime "Demon Slayer"; a storage room following life after the demons. 
        `,
      image: katana,
      technologies: [
        "Unreal Engine 5",
        "Adobe After Effects",
      ],
      demo: "https://youtu.be/yG9tJz8P99w",
    },
    {
      title: "Touchless",
      href: "https://wondrous-menu-617557.framer.app/",
      description:
        `
          An Invisible UI that allows users to operate their devices with hand gestures. 
          Using Python's OpenCV along with Google Media Handpipe, we designed a gesture controlled application by emulating the keyboard the gestures shown below. 
          With specific hand gestures: ✌️ Quit, 👍 Next Slide, 👎 Previous Slide, 🤘 Scroll Up, 🤙 Scroll Down, 👌 Start Slideshow, and ✋ Stop Slideshow.
          Adding voice control and live note taking, used ElevenLabs STT for natural language commands and automatic note-taking on cue.
        `,
      image: "/videos/touchlessvid1.mp4",
      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "pyautogui",
        "Eleven Labs API",
        "Google STT",
      ],
      github: "https://github.com/najmasultani/Invisible-UI",
      demo: "https://wondrous-menu-617557.framer.app/",
    },
    {
      title: "PowerRange",
      href: "https://powerrange.vercel.app/",
      description:
        `
          PowerRange is a full-stack e-commerce platform for car sales, featuring a microservices architecture, secure JWT authentication, Stripe-powered payments, and real-time sales analytics. 
          Note: Due to finacial reasons, backend is not live currently. Frontend Demo is still available.
        `,
      image: powerrange,
      technologies: [
        "Java",
        "Spring Boot",
        "JavaScript",
        "Next.js",
        "React",
        "PostgreSQL",
        "Docker",
        "AWS EC2",
      ],
      github: "https://github.com/anthskti/Trace",
      demo: "https://powerrange.vercel.app/",
    },
    {
      title: "Trace",
      href: "https://github.com/anthskti/Trace",
      description:
        `
          Will tomorrow's stock price be higher than today's closing price? 
          A Long Short Term Model (LSTM) trained on past stock information from Yahoo Finances API and popular analytical trends to find the outcome of tomorrows stock price.
          Analysis by using one year of previous stock information and popular known trading patterns, such the 5, 20, 50 Day Simple Moving Averages (SMA), Relative Strength Index (RSI), Volume-Weighted Average Price(VWAP), and Fibonacci Retracement Levels.
          Using Plotly, plots all existing data from the analysis for visualization.
        `,
      image: traceDemo,
      technologies: [
        "Python", 
        "Pandas", 
        "YFinance", 
        "Plotly", 
        "Tensorflow"
      ],
      github: "https://github.com/anthskti/Trace",
      demo: "",
    },
    {
      title: "YorkU Parking System",
      href: "https://drive.google.com/drive/folders/1uqICs_W09mz5QFKfc1bJXwjGduYyLclF?usp=drive_link",
      description:
        `
          Developed and tested a parking system software for YorkU. Designed various diagrams (UseCase, Sequence, Class, Activity, Component). 
          In development, used software design strategies implementing design patterns (creational, behavioural, structural). After implementing the code, we refractor, optimized, and tested it using several different methods: manual testing, automatic testing (randoop), and search based testing (evosuite). Also calculating mutation score thorugh pitclipse.
        `,
      image: yorkuparking,
      technologies: ["Java", "JUnit", "Randoop", "Evosuite"],
      github: "",
      demo: "https://drive.google.com/drive/folders/1uqICs_W09mz5QFKfc1bJXwjGduYyLclF?usp=drive_link",
    },
    {
      title: "Percept",
      href: "https://github.com/tvirat/UofTHacks12",
      description:
        `
        Chat and Share Stories Anonymously. 
        Developed with Python...
        
        Designed for sharing our perspectives, created a full-stacks application where users can publicly post notes on a map or privately send stories for advice and receieve stories giving advice to other anonymous users.
        `,
      image: percept,
      technologies: [
        "Javascript",
        "React",
        "Vite",
        "CSS",
        "Python",
        "Flask",
        "Google Maps API",
      ],
      github: "https://github.com/tvirat/UofTHacks12",
      demo: "",
    },
    {
      title: "SCHIZO",
      href: "https://github.com/sciausu/Ctrl-Hack-Del",
      description:
        `
        A game designed to bring awareness to schizophrenia. 
        As a player, recently diagonised with schizophrenia, your goal is to maintain your insanity score. 
        Dealing with reality versus delusions, how do you keep your sanity in check?
        `,
      image: schizo,
      technologies: ["Godot", "Blender", "Aseprite"],
      github: "https://github.com/sciausu/Ctrl-Hack-Del",
      demo: "",
    },
  
  ];

  // for search
  const [searchTerm, setSearchTerm] = useState("");

  const filterProjects = (projects, term) => {
    const lower = term.toLowerCase();
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lower) ||
        project.description.toLowerCase().includes(lower) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(lower)
        )
    );
  };

  return (
    <div className="flex flex-col items-center w-full justify-center max-w-2xl mx-auto p-4">
      <div className="relative w-full pb-4">
        <Search className="absolute top-2.5 left-3 text-stone-700 dark:text-stone-100" />
        <input
          type="text"
          placeholder="Search for a Project/Technology..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border-2 rounded-xl bg-transparent border-stone-700 dark:border-stone-100 focus:outline-none focus:border-amber-300 dark:focus:border-violet-500 pl-10 shadow-md"
        />
      </div>
      <ProjectList projects={filterProjects(projects, searchTerm)} />
      <p className=" relative pb w-full pt-4 text-stone-400">
        Check out all my projects{" "}
        <Link href="https://github.com/anthskti?tab=repositories">here</Link>!
      </p>
    </div>
  );
}
