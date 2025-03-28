"use client";
import React from "react";
import { Tabs } from "./ui/tabs";
import Image from "next/image";
import { StaticImageData } from "next/image";
import obys from "../../public/obys.png";
import netflix_homepage from "../../public/netflix_homepage.png";
import BharatBulletin from "../../public/BharatBulletin.png";

function Projects() {
  const tabs = [
    {
      title: "Netflix Clone",
      value: "netflix-clone",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Netflix Clone</p>
          <DummyContent imageSrc={netflix_homepage} />
        </div>
      ),
    },
    {
      title: "Obys Agency Clone",
      value: "obys-agency-clone",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Obys Agency Clone</p>
          <DummyContent imageSrc={obys} />
        </div>
      ),
    },
    {
      title: "BharatBulletin",
      value: "BharatBulletin",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>BharatBulletin</p>
          <DummyContent imageSrc={BharatBulletin} />
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-12 mb-24 h-[20rem] md:h-[40rem]">
      <div className="mb-10 flex justify-center items-center w-full">
        <h1 className="text-3xl">Projects</h1>
      </div>
      {/* Tabs Component */}
      <Tabs tabs={tabs} />
    </div>
  );
}

// Reusable Dummy Content Component
interface DummyContentProps {
  imageSrc: StaticImageData;
}

const DummyContent: React.FC<DummyContentProps> = ({ imageSrc }) => {
  return (
    <Image
      src={imageSrc}
      alt="Project Image"
      layout="responsive"
      width={500} // Set a default width
      height={300} // Set a default height
      className="object-cover object-left-top rounded-xl mx-auto"
    />
  );
};

export default Projects;
