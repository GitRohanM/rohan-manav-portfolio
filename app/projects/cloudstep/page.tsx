import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Box,
  Camera,
  Gamepad2,
  Layers3,
  Play,
  Wrench,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const cloudstepLinks = {
  github: "https://github.com/GitRohanM/CloudStep-3D",
  play: "https://inboxrohanm.itch.io/cloudstep",
};

export default function CloudstepCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-[#0B0B0B] pb-24">
      {/* Header bar */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between bg-white border-4 border-black rounded-2xl px-6 py-3.5 shadow-[6px_6px_0px_0px_#000000]">
          <Link
            href="/"
            className="flex items-center gap-2 font-black text-black hover:text-[#2F81F7] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <span className="text-xs font-black uppercase bg-neutral-100 border-2 border-black px-3 py-1 rounded-full">
            Featured Case Study
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-[#6366F1] text-white border-4 border-black rounded-[36px] p-8 md:p-12 shadow-[10px_10px_0px_0px_#000000] space-y-6">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white text-xs font-black px-3.5 py-1 rounded-full uppercase border-2 border-white">
              01 · 3D Precision Platformer
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white">
            Cloudstep
          </h1>

          <p className="text-white/90 text-lg md:text-xl font-bold leading-relaxed max-w-3xl">
            A Unity 6 platformer built around clear movement, predictable state, and reusable tools for a three-level experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href={cloudstepLinks.play} target="_blank" rel="noreferrer">
              <Button
                variant="yellow"
                size="lg"
                className="rounded-2xl px-7 py-4 text-base font-black shadow-[4px_4px_0px_0px_#000000]"
              >
                <Play className="w-5 h-5 fill-black mr-2" />
                <span>Play in Browser</span>
              </Button>
            </a>

            <a href={cloudstepLinks.github} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black border-3 border-black rounded-2xl px-7 py-4 text-base font-black shadow-[4px_4px_0px_0px_#000000]"
              >
                <Code2 className="w-5 h-5 mr-2" />
                <span>View Source</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Facts Strip */}
      <section className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["Engine", "Unity 6"],
            ["Render pipeline", "URP"],
            ["Core language", "C#"],
            ["Release", "Playable WebGL"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-white border-3 border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_#000000]"
            >
              <span className="text-xs font-bold text-neutral-500 uppercase block mb-1">
                {label}
              </span>
              <strong className="text-lg font-black text-black block">
                {value}
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* Intent Section */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white border-4 border-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#000000] space-y-6">
          <div className="inline-block bg-[#FF6B7A] text-white px-3.5 py-1 rounded-xl text-xs font-black uppercase border-2 border-black">
            Build Intent
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-black">
            Movement that stays responsive when the level does not
          </h2>
          <div className="space-y-4 text-neutral-700 text-base md:text-lg font-medium leading-relaxed">
            <p>
              Cloudstep is a focused precision-platforming project. Its systems are designed to make jumps feel intentional while still handling the interruptions players notice most: late input, leaving a ledge, moving platforms, and camera occlusion.
            </p>
            <p>
              The project also treats the surrounding game flow as part of the build, with menu, HUD, pause, win/lose states, and cross-scene progression implemented across three levels.
            </p>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-6">
          <div className="inline-block bg-[#2F81F7] text-white px-3.5 py-1 rounded-xl text-xs font-black uppercase border-2 border-black">
            System Notes
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-black">
            Four systems behind the run
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                Gamepad2,
                "Responsive controller",
                "Coyote time, jump buffering, and moving-platform physics keep the controller responsive at the edges of player input.",
              ],
              [
                Camera,
                "Obstacle-aware camera",
                "A third-person camera detects obstacles and adjusts around them to reduce wall clipping during movement.",
              ],
              [
                Layers3,
                "Audio and state",
                "Object pooling and ScriptableObjects support optimized sound effects, while UI state follows the player across scenes.",
              ],
              [
                Wrench,
                "Editor tooling",
                "Custom Unity Editor scripts automate repeatable level generation and scene setup work.",
              ],
            ].map(([Icon, title, copy]: any, index) => (
              <div
                key={title}
                className="bg-white border-3 border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-neutral-100 border-2 border-black rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-xs font-black text-neutral-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-black text-black mb-2">{title}</h3>
                <p className="text-neutral-700 text-base font-medium leading-relaxed">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-black text-white border-4 border-black rounded-[36px] p-8 md:p-12 shadow-[10px_10px_0px_0px_#FFC224] text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">
            See Cloudstep in motion
          </h2>
          <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto font-medium">
            Jump directly into the game on itch.io or inspect the complete C# platforming mechanics on GitHub.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href={cloudstepLinks.play} target="_blank" rel="noreferrer">
              <Button
                variant="yellow"
                size="lg"
                className="rounded-2xl px-8 py-5 text-base font-black shadow-[4px_4px_0px_0px_#000000]"
              >
                <Play className="w-5 h-5 fill-black mr-2" />
                <span>Play Cloudstep on itch.io</span>
              </Button>
            </a>
            <a href={cloudstepLinks.github} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black border-3 border-black rounded-2xl px-7 py-5 text-base font-black shadow-[4px_4px_0px_0px_#000000]"
              >
                <Code2 className="w-5 h-5 mr-2" />
                <span>GitHub Repository</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
