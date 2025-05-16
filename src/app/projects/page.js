"use client";

// modular 
import ProjectList from "../components/ProjectList";
import Link from "../components/Link";

// react
import { useState } from "react";
import { Search } from "lucide-react";

// images
import percept from "../assets/projects/percept.jpg";

import fallback from "../assets/projects/mybias.jpg";

export default function Projects() {
    const projects = [
        {
            title: "Trace",
            href: "https://github.com/anthskti/Trace",
            description:
                "Will tomorrow's stock price be higher than today's closing price? An LSTM model trains to find this outcome by looking at the previous year's stock data, then with trading patterns such as SMA's, RSI's, VWAP, and Fibonacci Retracement Levels, it can make a prediction on whether the stock price will be higher or lower than today.",
            image: fallback,
            technologies:["Python", "Pandas", "YFinance", "Plotly", "Tensorflow"],
            github:"https://github.com/anthskti/Trace",
            demo: "",
        },
        {
            title: "YorkU Parking System",
            href: "https://drive.google.com/drive/folders/1uqICs_W09mz5QFKfc1bJXwjGduYyLclF?usp=drive_link",
            description:
                "Designed, developed, and tested a parking system software for YorkU. Designed various diagrams (UseCase, Sequence, Class, Activity, Component). In development, used software design strategies implementing design patterns (creational, behavioural, structural). After implementing the code, we refractor, optimized, and tested it using several different methods: manual testing, automatic testing (randoop), and search based testing (evosuite). Also calculating mutation score thorugh pitclipse.",
            image: fallback,
            technologies: ["Java", "JUnit", "Randoop", "Evosuite"],
            github: "",
            demo: "https://drive.google.com/drive/folders/1uqICs_W09mz5QFKfc1bJXwjGduYyLclF?usp=drive_link",
        },
        {
            title: "Percept",
            href: "https://github.com/tvirat/UofTHacks12",
            description:
                "Chat and Share Stories Anonymously. Designed for sharing our perspectives, created a full-stacks application where users can publicly post notes on a map or privately send stories for advice and receieve stories giving advice to other anonymous users.",
            image: percept,
            technologies: ["Javascript", "React", "Vite.js", "CSS", "Python", "Flask", "Google Maps API"],
            github: "https://github.com/tvirat/UofTHacks12",
            demo: "",
        },
        {
            title: "SCHIZO",
            href: "https://github.com/sciausu/Ctrl-Hack-Del",
            description:
                "A game designed to bring awareness to schizophrenia. As a player, recently diagonised with schizophrenia, your goal is to maintain your insanity score. Dealing with reality versus delusions, how do you keep your sanity in check?",
            image: fallback,
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
                Check out all my projects {" "}
                <Link href="https://github.com/anthskti?tab=repositories">
                here
                </Link>
                !
            </p>
        </div>
    );
}