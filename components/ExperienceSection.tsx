"use client";

import { FileText, GraduationCap, Award, Gamepad2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExperienceSection() {
  const milestones = [
    {
      period: "2024 - 2026",
      title: "Master of Computer Applications (MCA)",
      institution: "Guru Nanak Dev University College, Jalandhar",
      description:
        "Deepening computer science principles, advanced data structures, algorithms, and software engineering methodologies while building interactive systems.",
      icon: GraduationCap,
      color: "bg-[#2F81F7]",
    },
    {
      period: "2021 - 2024",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Lyallpur Khalsa College, Jalandhar",
      description:
        "Strong academic foundation in object-oriented programming (C++, Java), databases, and foundational mathematics for game development.",
      icon: Award,
      color: "bg-[#FF6B7A]",
    },
    {
      period: "2024 - Present",
      title: "Unity Gameplay & Systems Programmer",
      institution: "Independent Game Projects & Prototypes",
      description:
        "Shipped 5+ playable prototypes on itch.io covering vehicle physics, 3D runner procedural systems, precision flight, and 2D state-machine shooters.",
      icon: Gamepad2,
      color: "bg-[#FFC224]",
    },
  ];

  return (
    <section className="bg-black text-white py-20 md:py-28 my-16 select-none">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
              Take a look at my{" "}
              <span className="bg-[#6366F1] text-white px-3.5 py-1 inline-block rounded-xl border-2 border-white shadow-[4px_4px_0px_0px_#ffffff]">
                education &amp; focus
              </span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed font-medium">
              Academic grounding in computer applications combined with continuous,
              hands-on Unity game development and physics prototyping.
            </p>

            <div className="pt-2">
              <a
                href="https://github.com/GitRohanM"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-black border-4 border-black hover:bg-neutral-100 font-extrabold text-base rounded-2xl shadow-[6px_6px_0px_0px_#6366F1]"
                >
                  <FileText className="w-5 h-5 mr-2 text-black" />
                  <span>View GitHub / Resume</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-7 space-y-6">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white text-black border-4 border-black rounded-[32px] p-7 md:p-8 shadow-[8px_8px_0px_0px_#6366F1] transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between pb-4 border-b-3 border-black mb-5">
                    <span className="text-base md:text-lg font-black text-black bg-neutral-100 border-2 border-black px-3.5 py-1 rounded-xl">
                      {item.period}
                    </span>
                    <div
                      className={`w-12 h-12 ${item.color} border-2 border-black rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_#000000]`}
                    >
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-black mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm font-bold text-neutral-600 mb-3">
                    {item.institution}
                  </div>
                  <p className="text-neutral-800 text-base font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
