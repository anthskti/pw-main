"use client";

import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            title: "Stock Predictor",
            href: "https://github.com/anthskti/LSTM-Stock-Predictor",
            description:
                "Will tomorrow's stock price be higher than today's closing price? An LSTM model trains to find this outcome by looking at the previous year's stock data, then with trading patterns such as SMA's, RSI's, VWAP, and Fibonacci Retracement Levels, it can make a prediction on whether the stock price will be higher or lower than today.",
            image: "",
            technologies:["Python, Pandas, NumPy, YFinance Library, Plotly, Scikit-learn, Tensorflow "],
            github:"https://github.com/anthskti/LSTM-Stock-Predictor",
            demo: "",
        },
        {
            title: "YorkU Parking System",
            href: "",
            description:
                "Designed, developed, and tested a parking system software for YorkU. Designed various diagrams (UseCase, Sequence, Class, Activity, Component). In development, used software design strategies implementing design patterns (creational, behavioural, structural). After implementing the code, we refractor, optimized, and tested it using several different methods: manual testing, automatic testing (randoop), and search based testing (evosuite). Also calculating mutation score thorugh pitclipse.",
            image: "",
            technologies: ["Java"],
            github: "",
            demo: "",
        },
        {
            title: "Percept",
            href: "https://github.com/tvirat/UofTHacks12",
            description:
                "Chat and Share Stories Anonymously. Designed for sharing our perspectives, created a full-stacks application where users can publicly post notes on a map or privately send stories for advice and receieve stories giving advice to other anonymous users.",
            image: "",
            technologies: ["Javascript, React.js, Vue.js, CSS, Python, Google Maps API"],
            github: "https://github.com/tvirat/UofTHacks12",
            demo: "",
        },
        {
            title: "SCHIZO",
            href: "",
            description:
                "A game designed for ",
            image: "",
            technologies: [""],
            github: "",
            demo: "",
        },
        


    ];

    return (
        <div className="flex flex-col items-center max-w-2xl mx-auto p-4">


        </div>
    );
}