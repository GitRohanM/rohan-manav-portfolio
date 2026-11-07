"use client";

import { Play, Gamepad2, ArrowUpRight, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlayableSpotlight() {
  return (
    <section id="playable" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 container mx-auto px-4 max-w-7xl">
      <div className="bg-[#FFC224] border-4 border-black rounded-[36px] p-8 md:p-14 shadow-[10px_10px_0px_0px_#000000] relative overflow-hidden">
        {/* Background retro dots */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000000 2px, transparent 2px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#FF6B7A]" />
              <span>Instant Playable Browser Build</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
              Test Rocket Glide in your browser right now!
            </h2>

            <p className="text-neutral-900 text-lg md:text-xl font-bold leading-relaxed max-w-2xl">
              Experience responsive thrust physics, obstacle evasion, and precision landing mechanics built in Unity 6 &amp; WebGL. No downloads required.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://inboxrohanm.itch.io/rocket-glide"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="bg-black text-white hover:bg-neutral-800 rounded-2xl px-8 py-5 text-lg font-black shadow-[4px_4px_0px_0px_#000000]"
                >
                  <Play className="w-5 h-5 fill-white" />
                  <span>Play Rocket Glide on itch.io</span>
                </Button>
              </a>

              <a
                href="https://inboxrohanm.itch.io/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-black border-3 border-black rounded-2xl px-7 py-5 text-lg font-black shadow-[4px_4px_0px_0px_#000000]"
                >
                  <Gamepad2 className="w-5 h-5" />
                  <span>Browse All Builds</span>
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_#000000] text-center space-y-4">
              <div className="w-16 h-16 bg-[#2F81F7] border-3 border-black rounded-2xl flex items-center justify-center mx-auto shadow-[4px_4px_0px_0px_#000000]">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
              <div className="font-black text-xl text-black">
                Rocket Glide WebGL
              </div>
              <p className="text-xs font-bold text-neutral-600">
                Unity 6 · 60 FPS WebGL · Instant Loading · Zero Plugins
              </p>
              <div className="pt-2">
                <span className="inline-block w-full py-2 bg-neutral-100 border-2 border-black rounded-xl text-xs font-black">
                  Status: LIVE ON ITCH.IO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
