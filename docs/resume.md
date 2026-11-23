%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\usepackage[default]{sourcesanspro}



\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \color{BlueViolet}  % Text color
  \vspace{-4pt}\raggedright\large
}{}{0em}{}[\color{BlueViolet}\titlerule \vspace{-5pt}]


% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{
  \begin{itemize}[leftmargin=0.15in, label={}]
    \color{Black}  % or any color like Blue, Gray, etc.
}

\newcommand{\resumeSubHeadingListEnd}{\end{itemize}\vspace{-12pt}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-7pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE

\begin{document}
    \begin{center}
        {\Huge Anthony Pham} \\ \vspace{1pt}
        {905-758-2708} $|$ 
        \href{mailto:phamanthony47@gmail.com}{\underline{phamanthony47@gmail.com}} $|$ 
        \href{https://linkedin.com/in/anthpham}{\underline{/in/anthpham}} $|$
        \href{https://github.com/anthskti}{\underline{github.com/anthskti}} $|$
        \href{https://anthonypham.ca/}{\underline{anthonypham.ca}}
    \end{center}


%-----------EDUCATION-----------
    \section{Education}
      \resumeSubHeadingListStart
            \resumeSubheading 
              {York University}{June 2026}
              {Honours B.Sc. in Computer Science }{Toronto, Ontario}
              \resumeItem{Relevant Coursework: Software Engineering, Software Testing, Data Structures, Algorithms, Computer Networks.}
          \resumeSubHeadingListEnd

%-----------PROFESSIONAL EXPERIENCE-----------
\section{Professional Experience}
  \resumeSubHeadingListStart
    \color{Black}
        \resumeSubheading
          {UofTHacks 14 | University Hackathon}{Mar 2026 -- Present}
          {Executive Software Engineer}{Toronto, Ontario}
          \resumeItemListStart
            \resumeItem{Refactored the judging scheduling workflow in the \textbf{FastAPI portal} by replacing fragile web scraping with a \textbf{handshake-token integration}, reliably syncing sponsor tracks and project metadata for a ~750-participant hackathon.}
            \resumeItem{Extended the judging scheduler with an \textbf{after-deadline append workflow}, extracting reusable components from the existing A/B scheduling algorithm to add late projects without rebuilding the existing schedule.}
            \resumeItem{Stress-tested the judging scheduler across \textbf{125 projects} using white-box testing with malformed inputs, edge cases, and skewed sponsor results; uncovered a scheduling-window bug in the after-deadline append workflow.}
            % \resumeItem{Contributed to the hackathon signup experience using \textbf{Astro, TypeScript,} and \textbf{Three.js}, collaborating with designers and independently implementing interactive \textbf{scene transitions} and \textbf{sponsorship UI}.}
          \resumeItemListEnd

      % production AI + distributed systems + infrastructure + ownership
      \resumeSubheading
      {The Perimenopause Lab}{July 2026 -- Sept 2026}
      {Software Engineer Intern}{Toronto, Ontario}
      \resumeItemListStart
        % \resumeItem{Designed and deployed a \textbf{containerized recommendation microservice} using Express/TypeScript, Azure PostgreSQL, OpenAI embeddings, cosine similarity, and LLM reranking, returning personalized professional recommendations.}
        \resumeItem{Designed and deployed a \textbf{containerized recommendation microservice} using Express/TypeScript, Azure PostgreSQL, OpenAI embeddings, cosine similarity, and LLM reranking, supporting growth from 50 initial professionals to \textbf{1,000+}.}
        \resumeItem{Integrated the service into Luna's LiveKit conversational agent via \textbf{RPC}, transforming open-ended user requests into structured queries and returning contextual matches with AI-generated rationale.}
        \resumeItem{Automated professional information collection from \textbf{30 minutes to \textasciitilde{}1 minute per profile} by building an Apify/OpenAI/regex pipeline with confidence-scored inference, admin verification, and REST integration.}
        \resumeItem{Built \textbf{production infrastructure} (Azure, Docker, GitHub Actions CI/CD, staging, automated testing) and caught jurisdiction-filtering bugs before release; wrote \textbf{architecture, API, and deployment documentation} for handoff.}
      \resumeItemListEnd
        % \resumeSubheading
        %   {Northcrest Developments (YZD) via C4 Capstone}{Jan 2026 -- April 2026}
        %   {Technical Project Lead}{North York, ON}
        %  \resumeItemListStart
        %     \resumeItem{Won the \textbf{Innovation Award} among \textbf{15 teams} and a \$500 prize by leading a 7-person cross-disciplinary team through \textbf{4 Agile Scrum sprints} to design weather-resistant pedestrian infrastructure for Northcrest Hangar District redevelopment.}
        %     \resumeItem{Engineered an \textbf{Unreal Engine 5} and \textbf{C\#} VR simulation of the Taxiway pedestrian strip with dynamic rain and snow systems to physically demonstrate glass walkway protection from wind tunnel exposure, becoming the most attended demo at the capstone showcase with clients and attendees lining up to experience it.}
        %     \resumeItemListEnd
        % \resumeSubheading
        %   {Art Circle of Alberta}{Mar 2026 -- Apr 2026}
        %   {Project and Technical Lead}{Remote}
        %   \resumeItemListStart
        %     \resumeItem{Designed detailed interactive mockups using \textbf{Figma} for a specialized web application, establishing the core user flow and UI components.}
        %     \resumeItem{Gathered and translated technical requirements into functional visual prototypes within a rapid 3-week development sprint.}
        %   \resumeItemListEnd
        % \resumeSubheading
        %   {Costco Wholesale}{May 2024 -- Jan 2026}
        %   {Merchandise}{Newmarket, ON}
        %   \resumeItemListStart
        %     \resumeItem{Worked in a team of four to restock merchandise through organizing roles, communicating prioritizes, and supporting each other.} 
        %     \resumeItem{Demonstrated reliability and time management by coordinating tasks within a 5 hour time window.} 
        %     \resumeItem{Developed quick thinking skills through resolving member inquiries and conflicts in a high-volume warehouse environment.} 
        %   \resumeItemListEnd
      % \resumeSubheading
      %     {YorkU Taekwondo Club}{Sept 2023 -- Sept 2024}
      %     {Deputy External}{North York, ON}
      %     \resumeItemListStart
      %       \resumeItem{Managed external communications and event logistics through weekly meetings and event planning, leading to increased club engagement and membership retention.}
      %   \resumeItemListEnd
  \resumeSubHeadingListEnd

%-----------TECHNICAL EXPERIENCE-----------
\section{Technical Experience}
    \resumeSubHeadingListStart
    \color{black}

    % Full-stack architecture + production engineering
    \resumeProjectHeading
          {\textbf{Clearup} $|$ \emph{TypeScript, Next.js, Express, PostgreSQL, Better Auth, AWS EC2, R2, Caddy} $|$ \href{https://www.clearup.skin}{\underline{Try It}}}{Nov 2025 -- Present}
      \resumeItemListStart
            \resumeItem{Built a full-stack skincare platform (routines, product discovery, seller price comparison) on a \textbf{45-endpoint REST API across 10 data models} with layered MVC + Service + Repository architecture.}
            
            % \resumeItem{Reduced per-request database payload \textbf{10x for a 400-product catalog} by implementing API pagination, route-specific caching (1–6hr TTL), and Next.js image optimization.}

            \resumeItem{Prevented critical data loss across \textbf{10+ production deployments} by enforcing a three-stage \textbf{CI/CD} pipeline (Docker dev → staging → production), catching a schema migration bug before release.}
            
            %  backend
            \resumeItem{Engineered a full account lifecycle for 150+ unique visitors by integrating Better Auth with Google OAuth and building a bounce-tracking webhook pipeline via AWS SES → SNS → backend to automatically suppress undeliverable accounts.}
           
            % \resumeItem{Integrated AWS SES (via IAM) for transactional email workflows such as account verification and password reset, improving account lifecycle reliability.}

            % data
            \resumeItem{Reduced manual product collection effort by an estimated \textbf{90\%} for a \textbf{350+ product catalog} by building a Python ingestion pipeline with Playwright and BeautifulSoup, extending discovery through Apify crawls and normalizing merchant data for import into Clearup.}

            \resumeItem{Enriched approximately \textbf{350 products} with standardized skin-type classifications using a \textbf{local LLM harness} grounded in ingredients, product names, and categories, validating outputs against a controlled taxonomy and tracking provenance to preserve manual corrections.}

        \resumeItemListEnd


    % Real-time multiplayer + game design
    % \resumeProjectHeading
    %     {\textbf{Spacetime Dojo} $|$ \emph{TypeScript, Next.js, Three.js, Bun, SpacetimeDB, MediaPipe, Blender} $|$ \href{https://youtu.be/TXRZh1yjFeg}{\underline{Watch It}}}{Oct 2026}
    %     \resumeItemListStart
    %         \resumeItem{Led a \textbf{4-person team} to build a \textbf{real-time multiplayer boxing game} at Cal Hacks v13, writing the project contracts and schema diagram and directing AI agents (Codex, Blender MCP) to build against them.}
    %         \resumeItem{Specified, tested, and tuned a \textbf{server-side combat engine} on SpacetimeDB, moving match resolution off the client so players and spectators share one \textbf{true state}.}
    %         \resumeItem{Reviewed a large PR, traced render overhead to heavy UI and animations, kept the demo on a leaner branch (primitive gloves, heavy models, particles, and inifite renders), raising MediaPipe tracking from 7 to 30 FPS.}
    %     \resumeItemListEnd

        
    % Distributed services + ML integration + cloud deployment
    % \resumeProjectHeading
    %     {\textbf{Voicely} $|$ \emph{Go, Gin, Python, FastAPI, Next.js, PostgreSQL, Docker, AWS S3} $|$ \href{https://voicely-lake.vercel.app/}{\underline{Play It}}}{Aug 2026 -- Sept 2026}
    %     \resumeItemListStart
    %         \resumeItem{Solo-built a \textbf{distributed voice-over platform} with a Go API, Python ML grading service, and Next.js frontend, built during \textbf{Ignition Hacks V7 in 24 hours} then extending it with four additional scenes and production deployment.}
    %         \resumeItem{Engineered an \textbf{audio-grading pipeline} using PyTorch/Resemblyzer speaker embeddings, and custom scoring heuristics for timbre similarity, cadence, and vocal intensity, returning per-line and overall performance grades through the Go API.}
    %         \resumeItem{Containerized and deployed the services across Render and Vercel, integrating Supabase for authentication/data and AWS S3 for media storage while \textbf{separating grading workloads from application request handling}.}
    %     \resumeItemListEnd

    % Systems + networking + hardware/software boundary
    \resumeProjectHeading
        {\textbf{Orca-CTL} $|$ \emph{Go, Gin, TypeScript, Next.js, OpenAI Vision, WebSockets, MJPEG} $|$ \href{https://youtu.be/W0umiOq4xsg?si=QHc0KPg5jCnkGIYL}{\underline{Watch It}}}{Sept 2026}
        \resumeItemListStart
            \resumeItem{Architected and built the software stack for a \textbf{remote server recovery system (IP-KVM)}, developing a Go middle tier and Next.js dashboard to bridge a QNX-based Raspberry Pi KVM with remote server control.}
            \resumeItem{Implemented \textbf{low-overhead remote access} using HTTP/MJPEG video streaming, HTTP-based HID commands, and WebSockets for live status/log updates, routing all hardware communication through a centralized Go backend.}
            \resumeItem{Built an \textbf{AI recovery agent} that screenshots the server, analyzes it with the OpenAI Responses API, and translates decisions into KVM keyboard commands, \textbf{demoed end to end to QNX judges at Hack the North}.}
        \resumeItemListEnd


    % If an interviewer asks: “Would people actually use this?”
    % answer: The goal of the hackathon was to demonstrate an end-to-end upcycling workflow. Given more time, I would simplify the product around the core transformation workflow rather than building a marketplace, and integrate with existing resale platforms instead.
    
    % \resumeProjectHeading
    %     {\textbf{Reverie} $|$ \emph{Typescript, Next.js, Python, FastAPI, PostgreSQL, Auth0, Google AI SDK} $|$ \href{https://youtu.be/bJywrVycfEk?si=aWKlYH1l5XU2o7iO}{\underline{Video Demo}}}{July 2026}
    %     \resumeItemListStart
    %         \resumeItem{Engineered a \textbf{5-agent AI pipeline} using Google’s AI SDK to transform clothing photos into personalized upcycling concepts, visual mockups, instructions, and environmental impact estimates.}
    %         \resumeItem{Built the \textbf{FastAPI orchestration layer} that passed user images + structured outputs between agent workflows, generating three designs before concurrently producing instructions and impact estimates for the transformed design.}
    %         \resumeItem{Architected a multi-subsystem REST API using FastAPI, SQLAlchemy, and PostgreSQL with secure Auth0 validation, shipped as a full-stack prototype in \textbf{36 hours for Hack the 6ix 2026}.}
    %     \resumeItemListEnd
        
    
    % \resumeProjectHeading
    %       {\textbf{Code Review Agent} $|$ \emph{Python, Google ADK, LLMs, Pydantic, uv} $|$ \href{https://github.com/mark-ngo203/code-review-agent/}{\underline{Github}}}{June 2026 -- July 2026} 
    %     \resumeItemListStart
    %         \resumeItem{Engineered a 4-agent concurrent code review pipeline using \textbf{Python and Google ADK}, orchestrating parallel Security and Performance \textbf{LLM} agents through a shared strictly-typed \textbf{Pydantic} state model.}
    %         \resumeItem{Reduced hallucinations and redundant context across agents by implementing a dedicated Context Agent whose data classification output dynamically targets each downstream agent toward specific vulnerability and performance patterns relevant to the analyzed codebase.}
    %         % \resumeItem{Designed a Coordinator agent to coordinate conflicting cross-agent findings, group results by severity, and emit a structured markdown report, validated on production code where the pipeline surfaced an actionable blocking I/O issue in a live application.}
    %     \resumeItemListEnd
        
    % \resumeProjectHeading
    %     {\textbf{Clementine} $|$ \emph{Next.js, Python, FastAPI, LLMs, Pandas} $|$ Hack Days 2026 $|$ \href{https://youtu.be/WYxQTdH8iW4/}{\underline{Video Demo}}}{Mar 2026 -- Apr 2026} 
    %   \resumeItemListStart
    %         \resumeItem{Engineered a financial portfolio analysis platform using \textbf{Python and FastAPI}, aggregating and processing \textbf{real investment data} from \textbf{Questrade and Yahoo Finance APIs} to surface personalized insights and risk assessments.}
    %         \resumeItem{Designed an asynchronous FastAPI data processing pipeline to get, normalize, and aggregate multi-source financial data using Pandas, ensuring \textbf{data integrity} across third-party API responses.}
    %         % \resumeItem{Integrated an \textbf{LLM analysis engine} to assess portfolio health, generate a personalized "gardener personality" type based on risk tolerance, and provide actionable financial insights.}
    %         \resumeItem{Designed a responsive Next.js frontend to visualize portfolio performance metrics, mapping actions like dollar-cost averaging to "watering" wilting plants.}
    %     \resumeItemListEnd

    % \resumeProjectHeading
    %       {\textbf{PowerRange} $|$ \emph{Java, Spring Boot, Next.js, Supabase, Docker, AWS EC2} $|$ \href{https://github.com/Mansteinvon/PowerRange}{\underline{Github}}}{Apr 2025 -- Sept 2025}
    %     \resumeItemListStart
    %         \resumeItem{Built a cloud-native vehicle e-commerce platform using \textbf{Java Spring Boot} microservices across a 4-person team, deployed to \textbf{AWS EC2}, integrating \textbf{Stripe Checkout} for end-to-end payment processing.}
    %         \resumeItem{Developed an admin analytics dashboard for revenue and customer behaviour reporting; reduced API latency \textbf{20\%} via concurrent queries and caching.}
    %         % \resumeItem{Implemented and managed bi-weekly \textbf{Scrum sprints} within an \textbf{Agile} framework.}
    %         % \resumeItem{Integrated \textbf{Stripe Checkout} within our system to process payments, manage metadata routing, save to our database, and automate order creation.}
    %         % \resumeItem{Built an admin analytics dashboard for revenue, order history, and customer behaviour reporting; reduced API latency by \textbf{20\%} via concurrent queries and caching.}
    %         % \resumeItem{Utilized \textbf{JDBC and Supabase} for data storage, enabled Docker logging for fast fixes, and containerized each service for scalable, maintainable deployments.}
    %     \resumeItemListEnd
        
    % \resumeProjectHeading
    %       {\textbf{Study Cafe Finder} $|$ \emph{Typescript, Next.js, .NET Web API, C\#, Google Places API}}{Feb 2026 -- Apr 2026} 
    %   \resumeItemListStart
    %         \resumeItem{Developed a full-stack web app to discover study cafes, integrating an interactive map using the \textbf{Google Maps JS SDK}.} 
    %         % \resumeItem{Designed a \textbf{.NET Web API} backend utilizing MVC + Service to securely manage API keys, separate business logic, and implement daily caching which improved performance by 60\%.} 
    %         \resumeItem{Designed a modern responsive frontend with abstracted components for reusable cafe cards from Google Places API.} 
    %         \resumeItem{Integrated the \textbf{Google Places API} to fetch cafe metadata and engineered a photo proxy endpoint to serve images to the client while bypassing CORS restrictions.} 
    %     \resumeItemListEnd
    
    % \resumeProjectHeading
    %     {\textbf{AI 3D Model Generator} $|$ \emph{Python, FastAPI, Google Gemini, Three.js, Blender API} $|$ CSHub Hacks }{Nov 2025 - Jan 2026}
    %   \resumeItemListStart
    %         \resumeItem{Designed an agentic AI workflow using the Gemini SDK (Python) to transform unstructured image inputs into structured 3D model outputs for rapid prototyping in user’s 3D development projects.}
    %         \resumeItem{Evaluated multiple AI-driven approaches and selected the most reliable solution under strict file format constraints.}
    %         \resumeItem(Utilized the requirement outline to design a prompt for the AI agent to follow, improving model consistency by 25\%.)
    %         \resumeItem{Built a linear processing pipeline to automate data inputs, AI inference, validation, and export of fbx artifacts.}
    %         % \resumeItem{Integrated \textbf{Three.js} on the frontend to provide real time 3D previews of generated assets, enabling a "Prompt-to-Preview" user experience.}
    %     \resumeItemListEnd
    
    % \resumeProjectHeading
    %     {\textbf{Themed Itinerary Generator} $|$ \emph{Python, NetworkX, Personalized PageRank, NLP}}{Sept 2025 -- Nov 2025}
    %   \resumeItemListStart
    %         \resumeItem{Developed a graph-based framework using the \textbf{Yelp Open Dataset} to generate themed tourist itineraries, modeling a network of 26,000+ businesses with 137,000+ weighted edges.}
    %         \resumeItem{Engineered a multi-criteria formula using co-review frequency, Jaccard categorical similarity, and geographic proximity for edge weights.}
    %         \resumeItem{Solved the routing sub-problem (NP-hard TSP variant) by implementing a nearest-neighbor heuristic followed by \textbf{2-opt optimization} to minimize travel.}
    %         \resumeItem{Validated model performance against traditional star-rating baselines, achieving superior geographic coherence and reliability through review-count weighting.}
    %     \resumeItemListEnd
    
    % \resumeProjectHeading
    %     {\textbf{Invisible UI} $|$ \emph{Python, OpenCV, MediaPipe} $|$ TechTo Hackathon $|$ \href{https://wondrous-menu-617557.framer.app/}{\underline{Live Demo}}}{Sept 2025}
    %   \resumeItemListStart
    %         \resumeItem{Developed a real-time computer vision interface using \textbf{OpenCV} and \textbf{MediaPipe} to map 7 hand coordinates to signal the system through \textbf{PyAutoGUI}.}
    %         \resumeItem{Implemented custom \textbf{gesture recognition shortcuts} using Euclidean distance formulas to detect finger extension states, enabling hands-free control of presentations and media.}
    %         \resumeItem{Integrated \textbf{ElevenLabs} and \textbf{Google STT} to create a multi-modal input system, allowing for voice command recognition.}
    %   \resumeItemListEnd
    
    %   \resumeProjectHeading
    %       {\textbf{Trace} $|$ \emph{Python, Tensorflow, YFinance} $|$ \href{https://github.com/anthskti/Trace}{\underline{GitHub}}} {Feb 2025 -- Mar 2025}
    %       \resumeItemListStart
    %         \resumeItem{Developed a stock price predictor using Python and Tensorflow LSTM model with YFinance API for data to predict the next day stock price percentage.}
    %         \resumeItem{Applied \textbf{technical indicators} (SMA, RSI, VWAP, Fibonacci retracements) and financial patterns (Golden Cross) to improve input features, obtaining a \textbf{directional accuracy of ~65\% and Mean Absolute Error (MAE) of ~0.2\%}.}
    %         \resumeItem{Visualized a \textbf{comparison of real vs predicted results} using \textbf{Plotly} and implemented a model saving/loading to minimize API calls.}
    %       \resumeItemListEnd
    
  % \resumeProjectHeading
  %     {\textbf{YorkU Park and GO} $|$ \emph{Java, JUnit, Randoop, EvoSuite}}{Jan 2025 -- Apr 2025}
  %     \resumeItemListStart
  %       \resumeItem{Engineered a parking application using Java, enabling users to book parking spots via the app.}
  %       \resumeItem{Designed the app using creational, behavioral, and structural design patterns and \textbf{UML diagrams} (Use Case, Sequence, Class, Component), testing it using tools like \textbf{Randoop and EvoSuite}, improving \textbf{test coverage by 50\%}.}
  %       \resumeItem{Refactored code quality after using \textbf{mutation analysis with PIT} improving \textbf{API output by 30}\%.}
  %   \resumeItemListEnd
    
    % \resumeProjectHeading
    %   {\textbf{Tag Team Summer Trials} $|$ \emph{Godot Engine, GDScript, Pixilart} $|$ \href{https://anthskti.itch.io/tag-team-summer-trials}{\underline{Game Page}}} {Nov 2025 -- Dec 2025}
    %   \resumeItemListStart
    %     \resumeItem{Developed a \textbf{2D racing-puzzle game} using GDScript featuring 4 progressively difficult levels with tag-team character switching mechanics, time-based ranking system, and environmental puzzles requiring cooperative problem solving.}
    %     \resumeItem{Conducted iterative playtesting sessions and implemented player feedback to refine \textbf{level design, UI clarity, and puzzle mechanics}, resulting in improved player onboarding and engagement.}
    %   \resumeItemListEnd
    \resumeSubHeadingListEnd

%-----------PROGRAMMING SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Python, TypeScript, JavaScript, Go, Java, SQL, C, C\#, C++.} \\
     \textbf{Frameworks/Libraries}{: React, Next.js, Node, Express, Flask, FastAPI, Gin, Spring Boot, JUnit, Tailwind CSS, Sequelize, Drizzle.} \\
     \textbf{Tools/Platforms}{: Git, GitHub Actions, Bruno, Postman, MySQL, PostgreSQL, OpenCV, Codex, Claude Code, OpenAI API, MCP.} \\
     \textbf{DevOps}{: Docker, AWS, Google Cloud, Azure, Cloudflare.} \\
    }} 
 \end{itemize}
%-------------------------------------------


 

\end{document}
