"use client";

import Link from "next/link";
import {
  Play,
  Code2,
  ArrowUpRight,
  Gamepad2,
  ExternalLink,
  ChevronRight,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  slug: string;
  title: string;
  description: string;
  tag: string;
  tech: string[];
  github?: string;
  play: string;
  bgColor: string;
  badgeColor: string;
}

export function PortfolioSection() {
  const projects: Project[] = [
    {
      slug: "apex-canyon",
      title: "Apex Canyon",
      description:
        "High-speed canyon racer built with responsive vehicle drift physics, dynamic camera shakes, and procedural canyon terrain.",
      tag: "Vehicle Physics · Unity 6",
      tech: ["Unity 6", "C#", "Vehicle Physics", "URP"],
      github: "https://github.com/GitRohanM",
      play: "https://inboxrohanm.itch.io/",
      bgColor: "bg-[#6366F1]",
      badgeColor: "bg-[#6366F1]",
    },
    {
      slug: "royal-rush",
      title: "Royal Rush",
      description:
        "A lane-based 3D endless runner with continuous track recycling, adaptive difficulty scaling, and Cinemachine camera feedback.",
      tag: "3D Endless Runner",
      tech: ["Unity", "C#", "Cinemachine", "New Input System"],
      github: "https://github.com/GitRohanM/Royal-Rush",
      play: "https://inboxrohanm.itch.io/royal-rush",
      bgColor: "bg-[#2F81F7]",
      badgeColor: "bg-[#2F81F7]",
    },
    {
      slug: "rocket-glide",
      title: "Rocket Glide",
      description:
        "A precision flight game with physics-based rocket thrust, dynamic obstacles, landing threshold checks, and rank scoring.",
      tag: "Precision Physics Flight",
      tech: ["Unity 6", "C#", "Physics", "WebGL Build"],
      github: "https://github.com/GitRohanM/Rocket-Boost",
      play: "https://inboxrohanm.itch.io/rocket-glide",
      bgColor: "bg-[#FF6B7A]",
      badgeColor: "bg-[#FF6B7A]",
    },
    {
      slug: "cube-run",
      title: "Cube Run",
      description:
        "A fast-paced minimalist obstacle runner built on tight collision physics, smooth input response, and progressive difficulty curves.",
      tag: "Minimalist Runner",
      tech: ["Unity", "C#", "Physics", "Game Systems"],
      play: "https://inboxrohanm.itch.io/",
      bgColor: "bg-[#10B981]",
      badgeColor: "bg-[#10B981]",
    },
    {
      slug: "galaxy-shooter",
      title: "Galaxy Shooter",
      description:
        "A responsive arcade space shooter featuring reusable object pools, invulnerability state machines, and modular power-up systems.",
      tag: "2D Arcade Shooter",
      tech: ["Unity", "C#", "2D Physics", "Object Pooling"],
      play: "https://inboxrohanm.itch.io/2d-galaxy-shooter",
      bgColor: "bg-[#FFC224]",
      badgeColor: "bg-[#FFC224]",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-14 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-black">
          Take a look at my <br />
          <span className="bg-[#FFC224] text-black px-3.5 py-1 inline-block rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
            playable game portfolio
          </span>
        </h2>
        <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          Every project features dedicated gameplay mechanics, clean C# code,
          and playable web releases on itch.io.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className="group grid md:grid-cols-12 bg-white border-4 border-black rounded-[36px] overflow-hidden hover:shadow-[10px_10px_0px_0px_#000000] hover:-translate-y-1 transition-all duration-300 shadow-[6px_6px_0px_0px_#000000]"
          >
            {/* Left Content Column */}
            <div className="md:col-span-7 p-7 md:p-12 flex flex-col justify-between bg-white border-b-4 md:border-b-0 md:border-r-4 border-black">
              <div>
                {/* Category Pill */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-black text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-700 text-base md:text-lg font-medium leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-neutral-100 border-2 border-black text-black text-xs font-extrabold px-3 py-1 rounded-lg shadow-[2px_2px_0px_0px_#000000]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={project.play}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="default"
                    size="default"
                    className="flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Play Build</span>
                  </Button>
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="default"
                      className="flex items-center gap-2"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                  </a>
                )}

                <Link href={`/projects/${project.slug}`}>
                  <Button
                    variant="yellow"
                    size="default"
                    className="flex items-center gap-1.5"
                  >
                    <span>System Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual Mockup Column */}
            <div
              className={`md:col-span-5 ${project.bgColor} p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[300px]`}
            >
              {/* Top pill inside visual */}
              <div className="flex justify-between items-center z-10">
                <span className="bg-white border-2 border-black text-black text-xs font-black px-3 py-1 rounded-lg shadow-[3px_3px_0px_0px_#000000]">
                  Project 0{index + 1}
                </span>
                <span className="w-4 h-4 rounded-full bg-white border-2 border-black" />
              </div>

              {/* Center Game Wireframe / Illustration Graphic */}
              <div className="my-auto py-6 flex flex-col items-center justify-center text-center z-10">
                <div className="w-24 h-24 bg-white border-4 border-black rounded-3xl flex items-center justify-center shadow-[6px_6px_0px_0px_#000000] group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Gamepad2 className="w-12 h-12 text-black stroke-[2]" />
                </div>
                <div className="mt-4 bg-black text-white px-4 py-1.5 rounded-xl text-sm font-black border-2 border-white shadow-[3px_3px_0px_0px_#000000]">
                  {project.title} · Unity 6
                </div>
              </div>

              {/* Bottom Quick Play Link */}
              <a
                href={project.play}
                target="_blank"
                rel="noreferrer"
                className="z-10 flex items-center justify-center gap-2 bg-white border-3 border-black text-black text-sm font-black py-2.5 px-4 rounded-xl hover:bg-neutral-100 transition-colors shadow-[4px_4px_0px_0px_#000000]"
              >
                <span>Launch in Browser</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Subtle background retro diagonal pattern */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#000000 2px, transparent 2px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
