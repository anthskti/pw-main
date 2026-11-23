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
import reverie from "@/assets/projects/reverie.webp";
import codereviewagent from "@/assets/projects/code-review-agent.png";
import voicely from "@/assets/projects/voicely.png";
import spacetimedb from "@/assets/projects/spacetimedb.webp";
import orca from "@/assets/projects/orca.webp";

export const PROJECT_CATEGORIES = ["All", "Hackathon", "Personal"];

export const projects = [
  {
    title: "Clearup",
    category: "Personal",
    href: "https://www.clearup.skin/",
    description:
      "Want clear skin but you don't know where to start? I developed this website to help you build and organize the perfect skincare routine for you.",
    image: clearup,
    technologies: [
      "Typescript",
      "Next.js",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Cloudflare",
      "Docker",
      "Python",
      "Apify",
    ],
    github: "https://github.com/anthskti/clearup",
    demo: "https://www.clearup.skin/",
  },
  {
    title: "Spacetime Dojo",
    category: "Hackathon",
    href: "https://youtu.be/TXRZh1yjFeg",
    description:
      "At Cal Hacks v13, our team built a real-time community based multiplayer boxing game. Using a webcam or Airpod motion controllers and a server-side combat engine.",
    image: spacetimedb,
    technologies: [
      "TypeScript",
      "Next.js",
      "Three.js",
      "Bun",
      "SpacetimeDB",
      "MediaPipe",
      "Blender",
    ],
    demo: "https://youtu.be/TXRZh1yjFeg",
  },
  {
    title: "Orca-CTL",
    category: "Hackathon",
    href: "https://youtu.be/W0umiOq4xsg?si=QHc0KPg5jCnkGIYL",
    description:
      "For Hack the North 2026, we built an AI Agent below the OS (OpenClaw that can work when the OS isn't). It's an IP-KVM remote server recovery system bridging a QNX Raspberry Pi to low-latency MJPEG video, with an OpenAI Vision agent for autonomous recovery.",
    image: orca,
    technologies: [
      "Go",
      "Gin",
      "TypeScript",
      "Next.js",
      "OpenAI Vision",
      "WebSockets",
      "MJPEG",
      "Raspberry Pi 5",
    ],
    demo: "https://youtu.be/W0umiOq4xsg?si=QHc0KPg5jCnkGIYL",
  },
  {
    title: "Voicely",
    category: "Hackathon",
    href: "https://voicely-lake.vercel.app/",
    description:
      "For Ingnition Hacks v7, I solo-hacked a voice over practice application where users can read and voice act scenes, get graded, and hear their voice on the video.",
    image: voicely,
    technologies: [
      "Go",
      "Gin",
      "Python",
      "FastAPI",
      "Pytorch",
      "PostgreSQL",
      "Docker",
      "Next.js",
      "Typescript",
    ],
    github: "https://github.com/anthskti/voicely",
    demo: "https://voicely-lake.vercel.app/",
  },
  {
    title: "Reverie",
    category: "Hackathon",
    href: "https://github.com/anthskti/reverie",
    description:
      "For Hack the 6ix, I developed a 4 step agentic AI pipeline where it'll help you recycle your old clothes along with building a compliment community marketplace for materials.",
    image: reverie,
    technologies: [
      "Python",
      "FastAPI",
      "Google ADK",
      "Gemini",
      "AI Agents",
      "Auth0",
      "PostgreSQL",
      "Next.js",
      "Typescript",
    ],
    github: "https://github.com/anthskti/reverie",
    demo: "",
  },
  {
    title: "Code Review Agent",
    category: "Personal",
    href: "https://github.com/mark-ngo203/code-review-agent",
    description:
      "With AI allowing developers to ship fast, we made an agentic ai pipeline that reviews Github PR requests, generating a pull request report.",
    image: codereviewagent,
    technologies: ["FastAPI", "Google ADK", "Gemini", "LLM", "Python"],
    github: "https://github.com/mark-ngo203/code-review-agent",
    demo: "https://youtu.be/ED3WgY3tLek?si=kFdge3LwVDsRpf05",
  },
  {
    title: "Clementine",
    category: "Hackathon",
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
      "Designed and developed a 3D environment storefront walkway solution for the Hangar District in Downsview Park under development from Northcrest at YZD avoid weather conditions in elevated land.",
    image: "/videos/northcrest.mp4",
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
  // {
  //   title: "fabFab",
  //   category: "Hackathon",
  //   href: "https://github.com/anthskti/fabfab",
  //   description:
  //     "Turn your prompts and images into 3D Video Game Assets(.fbx mainly for Unreal Engine) files with fabFab.",
  //   image: temp,
  //   technologies: ["FastAPI", "Google Gemini", "Blender", "Three.js", "Python"],
  //   github: "https://github.com/anthskti/fabfab",
  // },
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
    title: "Themed Itinerary Generator",
    category: "Work",
    href: "https://github.com/anthskti",
    description:
      "A graph-based trip planner using the Yelp Open Dataset, modeling 26k+ spots with Personalized PageRank and 2-opt TSP heuristics to generate coherent day plans.",
    image: temp,
    technologies: [
      "Python",
      "NetworkX",
      "Personalized PageRank",
      "NLP",
      "Algorithms",
    ],
    github: "https://github.com/anthskti",
  },
  {
    title: "Trace",
    category: "Personal",
    href: "https://github.com/anthskti/Trace",
    description:
      "Trained on Yahoo Finance data with SMA, RSI, VWAP, and Fibonacci retracement analysis.",
    image: traceDemo,
    technologies: [
      "Python",
      "Pandas",
      "Plotly",
      "scikit-learn",
      "Tensorflow",
      "LSTM",
    ],
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
