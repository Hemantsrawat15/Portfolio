import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/utils/cn";

function HeroSection() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
      )}
    />
    {/* Radial gradient for the container to give a faded look */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    {/* min-h-screen added on own just below this line */}
    <div className="h-auto min-h-screen md:h-[40rem] w-full rounded-md flex fex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
          Hemant Singh Rawat
        </h1>

        <p className="mt-4 font-normal text-base md:text-xl text-neutral-300 max-w-xl mx-auto">
        I am a frontend developer currently learning backend technologies. I build dynamic user interfaces, optimize performance, and enhance user experiences. Passionate about learning, I aim to master full-stack development and create impactful solutions.
        </p>
        <div className="mt-4">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Link href={"/projects"} className="text-lg p-3">Explore Projects</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default HeroSection;
