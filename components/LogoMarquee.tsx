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
  Video,
} from "lucide-react";

export function LogoMarquee() {
  const skills = [
    { name: "UNITY 6", icon: Gamepad2, color: "#FFC224" },
    { name: "C# SCRIPTS", icon: Code2, color: "#FF6B7A" },
    { name: "VEHICLE PHYSICS", icon: Gauge, color: "#2F81F7" },
    { name: "URP SHADERS", icon: Sparkles, color: "#6366F1" },
    { name: "STATE MACHINES", icon: Layers, color: "#10B981" },
    { name: "OBJECT POOLING", icon: Boxes, color: "#FFC224" },
    { name: "WEBGL BUILDS", icon: Flame, color: "#FF6B7A" },
    { name: "CUSTOM TOOLS", icon: Cpu, color: "#2F81F7" },
    { name: "CINEMACHINE", icon: Video, color: "#6366F1" },
    { name: "GIT & LFS", icon: GitBranch, color: "#10B981" },
  ];

  return (
    <div className="w-full overflow-hidden py-28 md:py-36 select-none">
      {/* 
        Uniform Straight-Edged Black Rectangle Ribbon
        - Guaranteed 100% Straight Parallel Rectangle: 
          Outer py-28 md:py-36 padding prevents overflow-hidden from clipping the tilted corners into kinks/polygons.
        - Symmetrical ultra-wide width: min-w-[200vw] -ml-[50vw] w-[200vw] prevents any horizontal gaps on wide viewports.
        - Exact Paperfolio rotation: -rotate-[5deg]
        - Restored Rohan's rich game system badges (Unity 6, C#, Physics, Shaders, etc.) with clean typography.
      */}
      <div className="relative bg-black text-white py-10 md:py-12 -rotate-[5deg] min-w-[200vw] -ml-[50vw] w-[200vw] flex items-center">
        {/* Seamless Infinite Marquee Track */}
        <div className="animate-marquee flex items-center">
          {/* Track 1 */}
          <div className="flex items-center gap-12 md:gap-16 shrink-0 pr-12 md:pr-16">
            {skills.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`track1-${idx}`}
                  className="flex items-center gap-4 text-white shrink-0"
                >
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 border-white flex items-center justify-center shadow-[3px_3px_0px_0px_#ffffff] shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-black stroke-[2.2]" />
                  </div>
                  <span className="text-2xl md:text-3xl font-black tracking-tight whitespace-nowrap uppercase text-white">
                    {item.name}
                  </span>
                  <span className="text-neutral-500 text-3xl font-black ml-8 select-none">
                    •
                  </span>
                </div>
              );
            })}
          </div>

          {/* Track 2 (Identical duplicate for seamless continuous looping) */}
          <div
            className="flex items-center gap-12 md:gap-16 shrink-0 pr-12 md:pr-16"
            aria-hidden="true"
          >
            {skills.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`track2-${idx}`}
                  className="flex items-center gap-4 text-white shrink-0"
                >
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 border-white flex items-center justify-center shadow-[3px_3px_0px_0px_#ffffff] shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-black stroke-[2.2]" />
                  </div>
                  <span className="text-2xl md:text-3xl font-black tracking-tight whitespace-nowrap uppercase text-white">
                    {item.name}
                  </span>
                  <span className="text-neutral-500 text-3xl font-black ml-8 select-none">
                    •
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
