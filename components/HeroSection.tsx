"use client";

import { Mail, FolderOpen, Download, Gamepad2, Compass, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-12 pb-16 md:py-20 max-w-7xl">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 space-y-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border-2 border-black rounded-full px-4 py-1.5 text-xs md:text-sm font-bold shadow-[3px_3px_0px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-black" />
            <span>Available for Unity &amp; Gameplay Roles</span>
          </div>

          {/* Paperfolio Signature Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[1.4] text-black">
            I&apos;m{" "}
            <span className="bg-[#FF6B7A] text-white px-3.5 py-1 inline-block rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000000] transform -rotate-1 mr-2 leading-none">
              Rohan Manav
            </span>
            , a Unity Game Developer from{" "}
            <span className="bg-[#2F81F7] text-white px-3.5 py-1 inline-block rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000000] transform rotate-1 leading-none">
              India
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#393939] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Building responsive player movement, physics-driven kinematics, and
            modular game systems with <strong>Unity 6, C#, and URP</strong>. Focused on game feel and clean architecture.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="mailto:inbox.rohanm@gmail.com">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
              </Button>
            </a>

            <a href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[190px]"
              >
                <FolderOpen className="w-5 h-5" />
                <span>View Projects</span>
              </Button>
            </a>

            <a
              href="https://github.com/GitRohanM"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="yellow"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </Button>
            </a>
          </div>

          {/* Interactive Stat Chips */}
          <div className="flex flex-wrap gap-3 pt-3">
            <div className="inline-flex items-center gap-2 bg-[#F3F4F6] border-2 border-black rounded-lg px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_#000000]">
              <Compass className="w-3.5 h-3.5 text-[#2F81F7]" />
              <span>CORE // KINEMATICS &amp; PHYSICS</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#F3F4F6] border-2 border-black rounded-lg px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_#000000]">
              <Cpu className="w-3.5 h-3.5 text-[#FF6B7A]" />
              <span>ENGINE // UNITY 6 + C#</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#F3F4F6] border-2 border-black rounded-lg px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC224]" />
              <span>GRAPHICS // URP &amp; WEBGL</span>
            </div>
          </div>
        </div>

        {/* Right Column: Signature Paperfolio Hero Visual Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-[36px] overflow-hidden shadow-[10px_10px_0px_0px_#000000] p-6 flex flex-col justify-between group">
            {/* Top decorative row */}
            <div className="flex items-center justify-between">
              <span className="bg-black text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Unity 6 Engine
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-black" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-black" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-black" />
              </div>
            </div>

            {/* Center Arcade / Controller Illustration */}
            <div className="flex flex-col items-center justify-center my-auto text-center space-y-4">
              <div className="w-28 h-28 bg-white border-4 border-black rounded-3xl flex items-center justify-center shadow-[6px_6px_0px_0px_#000000] transform group-hover:rotate-6 group-hover:scale-105 transition-all">
                <Gamepad2 className="w-16 h-16 text-black stroke-[1.75]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-black">
                  Playable Builds
                </h3>
                <p className="text-sm font-bold text-neutral-800 max-w-xs">
                  5+ responsive 2D &amp; 3D prototypes built with physics, state machines &amp; custom tooling.
                </p>
              </div>
            </div>

            {/* Bottom mini card badge */}
            <div className="bg-white border-3 border-black rounded-2xl p-3 flex items-center justify-between shadow-[4px_4px_0px_0px_#000000]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-xs font-black uppercase text-black">
                  Rocket Glide · WebGL
                </span>
              </div>
              <a
                href="#playable"
                className="text-xs font-black text-[#2F81F7] hover:underline"
              >
                Play Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
