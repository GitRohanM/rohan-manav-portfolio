"use client";

import {
  Gamepad2,
  Gauge,
  Sparkles,
  Boxes,
  Cpu,
  Layers,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      title: "Gameplay Mechanics & Controls",
      description:
        "Building responsive character movement, jump buffering, coyote time, drift dynamics, and deterministic input handling.",
      icon: Gamepad2,
      bgColor: "bg-[#2F81F7]",
      badge: "Game Feel",
    },
    {
      title: "Physics & Vehicle Simulation",
      description:
        "Tuning Rigidbodies, raycast suspensions, custom aerodynamic drag, collision feedback, and landing threshold checks.",
      icon: Gauge,
      bgColor: "bg-[#FF6B7A]",
      badge: "Physics Kinematics",
    },
    {
      title: "URP Shaders & Visual Feedback",
      description:
        "Creating custom Shader Graph materials, screen shakes, particle bursts, depth fog, and camera-relative perspective layers.",
      icon: Sparkles,
      bgColor: "bg-[#6366F1]",
      badge: "Render Pipeline",
    },
    {
      title: "Modular C# Architecture",
      description:
        "Decoupled event channels, ScriptableObject-driven state architectures, finite state machines, and zero-allocation object pools.",
      icon: Layers,
      bgColor: "bg-[#10B981]",
      badge: "Clean Architecture",
    },
    {
      title: "Editor Tooling & Automation",
      description:
        "Custom Unity EditorWindows, scene inspectors, procedural track recyclers, and build automation workflows.",
      icon: Cpu,
      bgColor: "bg-[#FFC224]",
      badge: "Unity Tooling",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-14 md:mb-18">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-black">
          My core{" "}
          <span className="bg-[#FF4A60] text-white px-3.5 py-1 inline-block rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
            game systems &amp; skills
          </span>
        </h2>
        <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          From deterministic physics and tight input loops to editor scripts that
          speed up game iterations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 flex flex-col group shadow-[4px_4px_0px_0px_#000000]"
            >
              {/* Colored Top Banner */}
              <div
                className={`${service.bgColor} p-8 flex items-center justify-between border-b-[3px] border-black min-h-[160px]`}
              >
                <div className="w-16 h-16 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_#000000] group-hover:scale-110 transition-transform">
                  <Icon className="w-9 h-9 text-black" />
                </div>
                <span className="bg-white border-2 border-black text-black text-xs font-black px-3.5 py-1 rounded-full shadow-[2px_2px_0px_0px_#000000]">
                  {service.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-black mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Paperfolio Get In Touch Card */}
        <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-10 flex flex-col items-center justify-center text-center hover:-translate-y-1.5 transition-all shadow-[6px_6px_0px_0px_#000000]">
          <div className="w-16 h-16 bg-white border-3 border-black rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#000000]">
            <Mail className="w-9 h-9 text-black" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
            Have a Game Idea?
          </h3>
          <p className="text-neutral-900 text-base font-semibold leading-relaxed mb-7 max-w-xs">
            Looking for a gameplay programmer to prototype mechanics or build systems? Let&apos;s talk!
          </p>
          <a href="mailto:inbox.rohanm@gmail.com" className="w-full">
            <Button
              variant="default"
              className="w-full h-14 text-base font-extrabold rounded-2xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Send a Message</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
