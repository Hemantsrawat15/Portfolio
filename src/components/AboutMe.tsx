"use client";
import React from "react";
import Image from "next/image"; // Importing Image from Next.js
import { StarsBackground } from "@/components/ui/stars-background";
import hemant from "@/components/icons/hemant.png";

function AboutMe() {
  return (
    <div className="h-screen rounded-md bg-neutral-900 flex items-center justify-center gap-3 relative w-full overflow-hidden">
      {/* Stars background with lower z-index */}
      <StarsBackground className="z-0" />

      {/* Content with higher z-index */}
      <div className="relative z-10 h-[70%] w-[40%] flex flex-col p-10">
        <h1 className="text-6xl font-bold text-white">Hi, I&apos;m Hemant</h1>
        <p className="mt-4 text-lg text-gray-300">
          I believe in a user-centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </p>
        <p className="mt-6 text-lg text-gray-300">
          I&apos;m a frontend web developer dedicated to turning ideas into creative
          solutions. I specialize in creating seamless and intuitive user
          experiences. My approach focuses on building scalable, high-performing
          solutions tailored to both user needs and business objectives. By
          prioritizing performance, accessibility, and responsiveness, I strive
          to deliver experiences that not only engage users but also drive
          tangible results.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative z-10 h-[70%] w-[40%] flex items-center justify-center">
        <Image
          src={hemant} // Replace with your actual image path
          alt="Hemant Singh Rawat"
          width={400} // Set the width of the image
          height={400} // Set the height of the image
          className="border-4 rounded-2xl border-gray-700 shadow-lg" // Circular image with border
        />
      </div>
    </div>
  );
}

export default AboutMe;
