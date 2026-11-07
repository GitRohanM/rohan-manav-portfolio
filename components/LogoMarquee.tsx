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
  const items = [
    { name: "unity 6", icon: Gamepad2 },
    { name: "c# systems", icon: Code2 },
    { name: "vehicle physics", icon: Gauge },
    { name: "urp shaders", icon: Sparkles },
    { name: "state machines", icon: Layers },
    { name: "object pooling", icon: Boxes },
    { name: "webgl builds", icon: Flame },
    { name: "custom tools", icon: Cpu },
    { name: "cinemachine", icon: Video },
    { name: "git & lfs", icon: GitBranch },
  ];

  return (
    <div className="w-full overflow-hidden my-20 md:my-28 select-none">
      {/* 
        High-Impact Paperfolio Black Marquee Ribbon
        - Matching reference: pure white monochrome logo lockups (white vector icon + bold lowercase typography)
        - Height matching template: generous py-16 md:py-20 padding
        - Exact template rotation: -rotate-[5deg]
        - Symmetrical ultra-wide width (-ml-[50vw] w-[200vw]) to guarantee no edge clipping on any screen width
        - Seamless loop with 2 identical tracks at 32s linear infinite
      */}
      <div className="relative bg-black text-white py-16 md:py-20 -rotate-[5deg] min-w-[200vw] -ml-[50vw] w-[200vw] flex items-center">
        {/* Seamless Infinite Marquee Track */}
        <div className="animate-marquee flex items-center">
          {/* Track 1 */}
          <div className="flex items-center gap-16 md:gap-24 shrink-0 pr-16 md:pr-24">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`track1-${idx}`}
                  className="flex items-center gap-3.5 md:gap-4 text-white opacity-95 hover:opacity-100 transition-opacity"
                >
                  <Icon className="w-9 h-9 md:w-11 md:h-11 text-white stroke-[2.2] shrink-0" />
                  <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white whitespace-nowrap lowercase">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Track 2 (Identical duplicate for 100% seamless infinite loop) */}
          <div
            className="flex items-center gap-16 md:gap-24 shrink-0 pr-16 md:pr-24"
            aria-hidden="true"
          >
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`track2-${idx}`}
                  className="flex items-center gap-3.5 md:gap-4 text-white opacity-95 hover:opacity-100 transition-opacity"
                >
                  <Icon className="w-9 h-9 md:w-11 md:h-11 text-white stroke-[2.2] shrink-0" />
                  <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white whitespace-nowrap lowercase">
                    {item.name}
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
