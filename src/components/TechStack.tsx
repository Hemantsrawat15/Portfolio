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
    <div className="min-h-screen rounded-md flex flex-col items-center justify-center gap-3 relative w-full overflow-hidden">

      {/* Stars background */}
      <StarsBackground className="z-0" />

      {/* Title */}
      <div className="relative z-10 h-[8%] w-[90%] flex px-10 py-2 justify-center items-center font-md text-white rounded-md shadow-md">
        <h1 className="text-3xl">My Tech Stack</h1>
      </div>

      {/* Main Container */}
      <div className="relative z-10 h-[60%] w-[70%] flex flex-col px-10 py-2 gap-4 rounded-md shadow-lg">
        {/* Languages Section */}
        <div className="flex-1 flex p-4 rounded-lg shadow-lg">
          <div className="w-[40%] flex justify-start items-center p-4 rounded-md shadow-md">
            <h1 className="text-3xl">Languages</h1>
          </div>
          <div className="w-[60%] flex justify-start items-center gap-12 p-4 rounded-md shadow-md">
            <Image src={java} alt="Java" className="h-16 w-16 object-contain" />
            <Image src={js} alt="JavaScript" className="h-16 w-16 object-contain" />
            <Image src={c} alt="C" className="h-16 w-16 object-contain" />
            <Image src={python} alt="Python" className="h-16 w-16 object-contain" />
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className="flex-1 flex p-4 rounded-lg shadow-lg">
          <div className="w-[40%] flex justify-start items-center p-4 rounded-md shadow-md">
            <h1 className="text-3xl">Frontend Technologies</h1>
          </div>
          <div className="w-[60%] flex justify-start items-center gap-12 p-4 rounded-md shadow-md">
            <Image src={html} alt="HTML" className="h-16 w-16 object-contain" />
            <Image src={css} alt="CSS" className="h-16 w-16 object-contain" />
            <Image src={react} alt="React" className="h-16 w-16 object-contain" />
            <Image src={tailwind} alt="Tailwind" className="h-16 w-16 object-contain" />
            <Image src={bootstrap} alt="Bootstrap" className="h-16 w-16 object-contain" />
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="flex-1 flex p-4 rounded-lg shadow-lg">
          <div className="w-[40%] flex justify-start items-center p-4 rounded-md shadow-md">
            <h1 className="text-3xl">Backend Technologies</h1>
          </div>
          <div className="w-[60%] flex justify-start items-center gap-12 p-4 rounded-md shadow-md">
            <Image src={nodejs} alt="Node.js" className="h-16 w-16 object-contain" />
            <Image src={expressjs} alt="Express.js" className="h-16 w-16 object-contain filter invert" />
            <Image src={firebase} alt="Firebase" className="h-16 w-16 object-contain" />
          </div>
        </div>

        {/* Database */}
        <div className="flex-1 flex p-4 rounded-lg shadow-lg">
          <div className="w-[40%] flex justify-start items-center p-4 rounded-md shadow-md">
            <h1 className="text-3xl">Database</h1>
          </div>
          <div className="w-[60%] flex justify-start items-center gap-12 p-4 rounded-md shadow-md">
            <Image src={mongodb} alt="MongoDB" className="h-16 w-16 object-contain" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default TechStack;