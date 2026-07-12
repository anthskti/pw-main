import percept from "@/assets/projects/percept.jpg";
import yorkuparking from "@/assets/projects/yorkuparking.png";
import traceDemo from "@/assets/projects/trace-demo.gif";
import powerrange from "@/assets/projects/powerrangepage.png";
import katana from "@/assets/projects/katanathumbnail.png";
import temp from "@/assets/projects/temp.png";
import summertrials from "@/assets/projects/summertrials.png";
import cafetom from "@/assets/projects/cafetom.png";
import clementine from "@/assets/projects/clementine.png";
import clearup from "@/assets/projects/clearuphomee.png";

export const PROJECT_CATEGORIES = ["All", "Work", "Hackathon", "Personal"];

export const projects = [
  {
    title: "ClearUp",
    category: "Personal",
    href: "https://www.clearup.skin/",
    description:
      "Want clear skin but you don't know where to start? I developed this website to help you build and organize the perfect skincare routine for you.",
    image: clearup,
    technologies: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Python",
      "Typescript",
    ],
    github: "https://github.com/anthskti/clearup",
    demo: "https://www.clearup.skin/",
  },
  {
    title: "Code Review Agent",
    category: "Personal",
    href: "https://github.com/mark-ngo203/code-review-agent",
    description:
      "With AI allowing developers to ship fast, we made an agentic ai pipeline that reviews Github PR requests, generating a pull request report.",
    image: temp,
    technologies: ["FastAPI", "Google ADK", "Gemini", "LLM", "Python"],
    github: "https://github.com/mark-ngo203/code-review-agent",
    demo: "https://youtu.be/ED3WgY3tLek?si=kFdge3LwVDsRpf05",
  },
  {
    title: "Clementine",
    category: "Personal",
    href: "https://clementine-pi.vercel.app/",
    description:
      "Clementine is a personal functional fintech application that transforms boring portfolio spreadsheets into a living garden.",
    image: clementine,
    technologies: [
      "FastAPI",
      "Next.js",
      "Questrade API",
      "Gemini",
      "Python",
      "Typescript",
    ],
    github: "https://github.com/anthskti/Clementine",
    demo: "https://www.youtube.com/watch?v=WYxQTdH8iW4",
  },
  {
    title: "PowerRange",
    category: "Work",
    href: "https://powerrange.vercel.app/",
    description:
      "PowerRange is a cloud native full stack e-commerce platform for car sales, featuring JWT authentication, Stripe payments, and real-time sales analytics.",
    image: powerrange,
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
      "Next.js",
    ],
    github: "https://github.com/anthskti/PowerRange",
    demo: "",
  },
  {
    title: "Hangar District Storefront Walkway",
    category: "Work",
    href: "https://youtu.be/2_Pt8QzRSYk",
    description:
      "Designed and developed a storefront walkway solution for the Hangar District under development from Northcrest at YZD avoid weather conditions in elevated land.",
    image: temp,
    technologies: ["VR Metaquest", "Unreal Engine", "C++", "After Effects"],
    // github: "",
    demo: "https://youtu.be/2_Pt8QzRSYk",
  },
  {
    title: "CafeTom",
    category: "Personal",
    href: "https://cafetom.vercel.app/",
    description:
      "A convenient local list of Cafe spots people can use as third spaces (studying, chatting, etc) using Google Place's API for context.",
    image: cafetom,
    technologies: ["C++", ".NET", "Docker", "Next.js", "Google Places API"],
    github: "https://github.com/anthskti/cafetom",
    demo: "https://cafetom.vercel.app/",
  },
  {
    title: "fabFab",
    category: "Hackathon",
    href: "https://github.com/anthskti/fabfab",
    description:
      "Turn your prompts and images into 3D Video Game Assets(.fbx mainly for Unreal Engine) files with fabFab.",
    image: temp,
    technologies: ["FastAPI", "Google Gemini", "Blender", "Three.js", "Python"],
    github: "https://github.com/anthskti/fabfab",
  },
  {
    title: "Percept",
    category: "Hackathon",
    href: "https://github.com/tvirat/UofTHacks12",
    description:
      "Interactively publicly sincere post notes on a map or privately send stories for advice.",
    image: percept,
    technologies: ["Vite.js", "Python", "Flask", "Google Maps API"],
    github: "https://github.com/tvirat/UofTHacks12",
  },
  {
    title: "Touchless",
    category: "Hackathon",
    href: "https://wondrous-menu-617557.framer.app/",
    description:
      "Operate any device with an invisible UI. With hand gestures you can: quit, navigate slides, scroll, and control slideshows hands-free.",
    image: "/videos/touchlessvid1.mp4",
    technologies: ["Python", "OpenCV", "MediaPipe", "Eleven Labs API"],
    github: "https://github.com/najmasultani/Invisible-UI",
    demo: "https://wondrous-menu-617557.framer.app/",
  },
  // {
  //   title: "SCHIZO",
  //   category: "Hackathon",
  //   href: "https://github.com/sciausu/Ctrl-Hack-Del",
  //   description:
  //     "As a player recently diagnosed with schizophrenia, maintain your insanity score while navigating reality vs delusions.",
  //   image: schizo,
  //   technologies: ["Godot", "Blender", "Aseprite"],
  //   github: "https://github.com/sciausu/Ctrl-Hack-Del",
  // },
  {
    title: "Trace",
    category: "Personal",
    href: "https://github.com/anthskti/Trace",
    description:
      "Trained on Yahoo Finance data with SMA, RSI, VWAP, and Fibonacci retracement analysis.",
    image: traceDemo,
    technologies: ["Python", "Pandas", "Plotly", "Tensorflow"],
    github: "https://github.com/anthskti/Trace",
  },
  {
    title: "Tag Team Summer Trials",
    category: "Work",
    href: "https://anthskti.itch.io/tag-team-summer-trials",
    description:
      "Single-player game where you control two characters to reach the finish line, compete for the highest medal.",
    image: summertrials,
    technologies: ["Godot", "GDScript", "Pixilart"],
    github: "https://github.com/anthskti/SummerTrials",
    demo: "https://youtu.be/m7uBUaXtzSw",
  },
  {
    title: "The Final Breath",
    category: "Work",
    href: "https://youtu.be/yG9tJz8P99w",
    description:
      "Modeled a virtual storage room exploring life after the demons.",
    image: katana,
    technologies: ["Unreal Engine 5", "Adobe After Effects"],
    demo: "https://youtu.be/yG9tJz8P99w",
  },
  {
    title: "YorkU Parking System",
    category: "Work",
    href: "https://drive.google.com/drive/folders/1uqICs_W09mz5QFKfc1bJXwjGduYyLclF?usp=drive_link",
    description:
      "Developed and tested parking system software with UML diagrams, design patterns, and mutation testing via Pitclipse.",
    image: yorkuparking,
    technologies: ["Java", "JUnit", "Randoop", "Evosuite"],
    demo: "https://drive.google.com/drive/folders/1uqICs_W09mz5QFKfc1bJXwjGduYyLclF?usp=drive_link",
  },
];
