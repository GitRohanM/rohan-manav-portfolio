"use client";

import {
  Gamepad2,
  Code2,
  Layers,
  Cpu,
  Boxes,
  Flame,
  Gauge,
  Sparkles,
  GitBranch,
} from "lucide-react";

export function LogoMarquee() {
  const skills = [
    { name: "UNITY 6", icon: Gamepad2, color: "#FFC224" },
    { name: "C# SCRIPTS", icon: Code2, color: "#FF6B7A" },
    { name: "VEHICLE PHYSICS", icon: Gauge, color: "#2F81F7" },
    { name: "URP GRAPHICS", icon: Sparkles, color: "#6366F1" },
    { name: "STATE MACHINES", icon: Layers, color: "#10B981" },
    { name: "OBJECT POOLING", icon: Boxes, color: "#FFC224" },
    { name: "WEBGL BUILDS", icon: Flame, color: "#FF6B7A" },
    { name: "CUSTOM TOOLS", icon: Cpu, color: "#2F81F7" },
    { name: "GIT & LFS", icon: GitBranch, color: "#10B981" },
  ];

  return (
    <div className="relative overflow-hidden my-16 md:my-24 select-none">
      {/* Rotated High-Contrast Black Ribbon */}
      <div className="bg-black text-white py-6 md:py-7 border-y-4 border-black -rotate-2 min-w-[125vw] -mx-[12vw] shadow-[0px_8px_0px_0px_#000000]">
        <div className="animate-marquee items-center gap-10 sm:gap-14">
          {[...skills, ...skills, ...skills, ...skills].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 font-black text-lg md:text-xl tracking-wider text-white whitespace-nowrap"
              >
                <div
                  className="p-1.5 rounded-lg border-2 border-white"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="w-5 h-5 text-black" />
                </div>
                <span>{item.name}</span>
                <span className="text-neutral-500 text-2xl font-black mx-2">
                  •
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
