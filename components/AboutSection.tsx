"use client";

import { User, CheckCircle2, Gamepad2, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 pt-24 md:pt-28 pb-16 md:pb-28 max-w-7xl">
      <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left Avatar Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-square border-4 border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_#000000] flex flex-col items-center justify-center text-center p-8">
            <div className="w-28 h-28 bg-white border-4 border-black rounded-full flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_#000000]">
              <span className="text-4xl font-black text-black">RM</span>
            </div>
            <h3 className="text-2xl font-black text-white">Rohan Manav</h3>
            <p className="text-sm font-bold text-white/90 mt-1 max-w-xs">
              Unity Game Developer &amp; Systems Programmer
            </p>
            <div className="mt-4 bg-white border-2 border-black px-4 py-1 rounded-full text-xs font-black text-black shadow-[2px_2px_0px_0px_#000000]">
              Punjab, India
            </div>
          </div>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-black mb-4 leading-tight">
              Who&apos;s behind all this{" "}
              <span className="bg-[#2F81F7] text-white px-3.5 py-1 inline-block rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                interactive code?
              </span>
            </h2>
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-medium">
              I&apos;m Rohan Manav, a Unity game developer who loves building the
              core gameplay systems that make games feel intuitive and fun: tight
              controls, deterministic physics, readable feedback, and reliable release
              builds.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex gap-4 items-start bg-neutral-50 border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#000000]">
              <div className="w-7 h-7 bg-[#FFC224] border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[2px_2px_0px_0px_#000000]">
                <Gamepad2 className="w-4 h-4 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black">
                  5+ Playable Prototypes on itch.io
                </h3>
                <p className="text-neutral-600 text-sm font-medium leading-relaxed">
                  Ranging from vehicle physics and endless runners to precision rocket landing and arcade shooters.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-neutral-50 border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#000000]">
              <div className="w-7 h-7 bg-[#6366F1] border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[2px_2px_0px_0px_#000000]">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black">
                  Systems &amp; Architecture Focus
                </h3>
                <p className="text-neutral-600 text-sm font-medium leading-relaxed">
                  Clean C# patterns, ScriptableObjects, state machines, and zero-allocation object pools.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a href="mailto:inbox.rohanm@gmail.com">
              <Button
                variant="default"
                size="lg"
                className="bg-black text-white hover:bg-neutral-800 rounded-2xl px-8 py-5 text-base font-bold shadow-[4px_4px_0px_0px_#000000]"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Let&apos;s Build Together</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
