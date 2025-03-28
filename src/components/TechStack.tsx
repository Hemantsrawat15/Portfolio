import React from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import js from "./icons/js.svg";
import java from "./icons/java.svg";
import c from "./icons/c.svg";
import python from "./icons/python.svg";
import html from "./icons/html.svg";
import css from "./icons/css.svg";
import tailwind from "./icons/tailwind.svg";
import bootstrap from "./icons/bootstrap.svg";
import react from "./icons/react.svg";
import nodejs from "./icons/nodejs.svg";
import expressjs from "./icons/expressjs.svg";
import firebase from "./icons/firebase.svg";
import mongodb from "./icons/mongodb.svg";

function TechStack() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 relative w-full overflow-hidden px-4 md:px-8">
      {/* Stars background */}
      <StarsBackground className="z-0" />

      {/* Title */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-4 text-center text-white rounded-md shadow-md">
        <h1 className="text-xl md:text-2xl font-medium">My Tech Stack</h1>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-6 rounded-md shadow-lg p-6">
        {/* Section Component */}
        {sections.map(({ title, icons }) => (
          <div key={title} className="flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 rounded-lg shadow-lg">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-medium text-white">{title}</h2> {/* Added text-white */}
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap justify-center gap-6">
              {icons.map((icon, idx) => (
                <Image key={idx} src={icon.src} alt={icon.alt} className={`h-12 w-12 md:h-16 md:w-16 object-contain ${icon.alt === 'Express.js' ? 'invert' : ''}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Languages",
    icons: [
      { src: java, alt: "Java" },
      { src: js, alt: "JavaScript" },
      { src: c, alt: "C" },
      { src: python, alt: "Python" },
    ],
  },
  {
    title: "Frontend Technologies",
    icons: [
      { src: html, alt: "HTML" },
      { src: css, alt: "CSS" },
      { src: react, alt: "React" },
      { src: tailwind, alt: "Tailwind" },
      { src: bootstrap, alt: "Bootstrap" },
    ],
  },
  {
    title: "Backend Technologies",
    icons: [
      { src: nodejs, alt: "Node.js" },
      { src: expressjs, alt: "Express.js" },
      { src: firebase, alt: "Firebase" },
    ],
  },
  {
    title: "Database",
    icons: [
      { src: mongodb, alt: "MongoDB" },
    ],
  },
];

export default TechStack;
