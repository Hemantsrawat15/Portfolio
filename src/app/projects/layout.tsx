"use Client"
import React from "react";
import { ReactNode } from "react";

interface ProjectsLayoutProps {
  children: ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-5xl">{children}</div>
    </div>
  );
}
