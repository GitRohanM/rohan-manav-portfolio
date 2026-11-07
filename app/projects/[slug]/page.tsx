import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Box,
  Gauge,
  Gamepad2,
  Layers3,
  Play,
  Wrench,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = {
  "apex-canyon": {
    index: "01",
    title: "Apex Canyon",
    label: "3D canyon vehicle racer",
    summary:
      "A Unity 6 high-speed vehicle racer featuring responsive arcade drift physics, dynamic camera shakes, and procedural canyon terrain.",
    visualLabel: "Racing loop / active",
    stages: ["Track generated", "Drift calculated", "Pace verified"],
    facts: [
      ["Engine", "Unity 6"],
      ["Render pipeline", "URP"],
      ["Core language", "C#"],
      ["Physics", "Custom Rigidbody Drift"],
    ],
    intent:
      "High-speed arcade racing requires instant weight response and clear road readability",
    paragraphs: [
      "Apex Canyon focuses on vehicle handling in narrow canyon geometry where player response and drift balance are critical.",
      "The track layout and obstacle curves test suspension dynamics, terrain raycasts, and custom camera shake tailored to speed milestones.",
    ],
    notes: [
      [
        Gamepad2,
        "Drift physics",
        "Custom vehicle controller with arcade drift dynamics, suspension simulation, and surface friction.",
      ],
      [
        Layers3,
        "Procedural terrain",
        "Modular canyon sections and dynamic obstacle hazards ensure unpredictable track flow.",
      ],
      [
        Gauge,
        "Performance & batching",
        "Optimized URP materials, GPU instancing, and minimal allocation loops maintain high FPS.",
      ],
      [
        Box,
        "Target release",
        "Engineered for smooth WebGL browser play and standalone desktop builds.",
      ],
    ],
    delivery: [
      ["Playable release", "WebGL playable build hosted on itch.io"],
      ["Physics tuning", "Custom C# drift and stabilization models"],
    ],
    github: "https://github.com/GitRohanM",
    play: "https://inboxrohanm.itch.io/",
  },
  "rocket-glide": {
    index: "02",
    title: "Rocket Glide",
    label: "3D physics flight game",
    summary:
      "A Unity 6 precision flight game built around physics-based rocket control, dynamic obstacles, landing checks, and a structured mission loop.",
    visualLabel: "Flight loop / active",
    stages: ["Input sampled", "Thrust resolved", "Landing verified"],
    facts: [
      ["Engine", "Unity 6"],
      ["Render pipeline", "URP"],
      ["Core language", "C#"],
      ["Release", "Windows + WebGL"],
    ],
    intent: "Precision flight needs clear control and clear outcomes",
    paragraphs: [
      "Rocket Glide is built around a physics-based rocket controller where timing, obstacle response, and landing verification define the run.",
      "Its surrounding systems support repeatable missions: modular timing, dynamic S/A/B/C rank scoring, persistent high scores, and a custom pause state machine.",
    ],
    notes: [
      [
        Gamepad2,
        "Physics flight",
        "Rocket controls, dynamic obstacles, and landing verification form the core 3D flight loop.",
      ],
      [
        Layers3,
        "Modular architecture",
        "Mission timing, rank scoring, and high-score data are organized as modular C# systems.",
      ],
      [
        Gauge,
        "Performance and UI",
        "A zero-allocation HUD timer and custom pause state machine keep interface work responsive.",
      ],
      [
        Box,
        "Release target",
        "The project is published for Windows and WebGL, with draw-call batching and low GC overhead supporting stable 60 FPS.",
      ],
    ],
    delivery: [
      [
        "Playable release",
        "A browser build and Windows release accompany the source repository",
      ],
      [
        "Scoring feedback",
        "Dynamic S/A/B/C rankings communicate how each mission was completed",
      ],
    ],
    github: "https://github.com/GitRohanM/Rocket-Boost",
    play: "https://inboxrohanm.itch.io/rocket-glide",
  },
  "royal-rush": {
    index: "03",
    title: "Royal Rush",
    label: "3D endless runner",
    summary:
      "A Unity endless runner built around lane-based obstacle generation, continuous track recycling, and readable feedback as speed increases.",
    visualLabel: "Run loop / active",
    stages: ["Lane selected", "Obstacle spawned", "Pace adjusted"],
    facts: [
      ["Engine", "Unity"],
      ["Input", "New Input System"],
      ["Camera", "Cinemachine"],
      ["Release", "WebGL"],
    ],
    intent: "A fast run still needs a readable rhythm",
    paragraphs: [
      "Royal Rush focuses on how an endless runner stays legible over time: obstacles are generated in lanes, track sections are continuously recycled, and difficulty adjusts as the run progresses.",
      "Player control and collision handling use the New Input System and Rigidbody physics, while camera shake and particles are used as specific feedback for speed and impact.",
    ],
    notes: [
      [
        Layers3,
        "Procedural gameplay",
        "Dynamic lane-based obstacle generation and continuous track recycling extend the run without repeating a fixed course.",
      ],
      [
        Gamepad2,
        "Controls and physics",
        "Player controls and collisions are built with the New Input System and Rigidbody physics.",
      ],
      [
        Gauge,
        "Adaptive difficulty",
        "Run difficulty scales with pace so the challenge changes alongside player speed.",
      ],
      [
        Wrench,
        "Game feel",
        "Cinemachine camera shake and speed-up particles reinforce momentum at the moments players need feedback.",
      ],
    ],
    delivery: [
      [
        "Playable release",
        "A WebGL build is available alongside the source repository",
      ],
      [
        "Run feedback",
        "Camera and particle feedback are tied to movement and speed rather than decorative motion",
      ],
    ],
    github: "https://github.com/GitRohanM/Royal-Rush",
    play: "https://inboxrohanm.itch.io/royal-rush",
  },
  "2d-galaxy-shooter": {
    index: "04",
    title: "2D Galaxy Shooter",
    label: "2D arcade shooter",
    summary:
      "A Unity shooter built around responsive player state, reusable object pools, dynamic invulnerability frames, and modular power-up behaviours.",
    visualLabel: "Combat loop / active",
    stages: ["Input read", "Pool spawned", "State updated"],
    facts: [
      ["Engine", "Unity"],
      ["Core language", "C#"],
      ["Pattern", "Object Pooling"],
      ["Style", "Retro 2D Arcade"],
    ],
    intent:
      "Classic arcade rhythm requires zero-stutter performance and clear projectile feedback",
    paragraphs: [
      "2D Galaxy Shooter implements modular weapon systems, shield mechanics, and state machines for enemy waves.",
      "Object pooling prevents garbage collection spikes when dozens of lasers, explosions, and hazards are active simultaneously.",
    ],
    notes: [
      [
        Gamepad2,
        "Player controller",
        "Dual-axis movement, speed boost states, and responsive laser shooting.",
      ],
      [
        Layers3,
        "Object pooling",
        "Pre-allocated projectile and enemy pools to eliminate runtime instantiations.",
      ],
      [
        Gauge,
        "State machine",
        "Clear states for shields, invulnerability frames, and multi-shot powerups.",
      ],
      [
        Box,
        "Release target",
        "WebGL arcade release hosted on itch.io with crisp retro sprite rendering.",
      ],
    ],
    delivery: [
      ["Playable release", "Instant browser play via WebGL on itch.io"],
      ["Architecture", "Decoupled component architecture and event triggers"],
    ],
    play: "https://inboxrohanm.itch.io/2d-galaxy-shooter",
  },
  "cube-run": {
    index: "05",
    title: "Cube Run",
    label: "Minimalist precision runner",
    summary:
      "A fast-paced minimalist obstacle runner built on tight collision physics, smooth input response, and progressive difficulty curves.",
    visualLabel: "Runner loop / active",
    stages: ["Input polled", "Collision checked", "Score incremented"],
    facts: [
      ["Engine", "Unity"],
      ["Core language", "C#"],
      ["Physics", "Continuous Collision"],
      ["Platform", "WebGL / PC"],
    ],
    intent: "Clean geometry highlights pure reaction time and instant feedback",
    paragraphs: [
      "Cube Run strips away excess decoration to focus on pure collision accuracy, instant retry flow, and rhythmic obstacle placement.",
      "Object pooling and low garbage collection overhead ensure zero frame drops during high-speed runs.",
    ],
    notes: [
      [
        Gamepad2,
        "Tight controls",
        "Instantaneous input sampling with zero-latency jump and dodge mechanics.",
      ],
      [
        Box,
        "Object pooling",
        "Recycled obstacle waves to prevent GC stutter during intense gameplay.",
      ],
      [
        Gauge,
        "Dynamic pacing",
        "Difficulty ramping tied to player survival time and score milestones.",
      ],
      [
        Wrench,
        "Audio-visual feedback",
        "High-contrast visual cues and reactive audio on near-miss events.",
      ],
    ],
    delivery: [
      ["Playable build", "Instant browser play via WebGL"],
      ["System focus", "Lightweight, zero-allocation core runner loop"],
    ],
    play: "https://inboxrohanm.itch.io/",
  },
} as const;

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in projects)) notFound();
  const project = projects[slug as ProjectSlug];

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
            Project Case Study
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-[#FFC224] border-4 border-black rounded-[36px] p-8 md:p-12 shadow-[10px_10px_0px_0px_#000000] space-y-6">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white text-xs font-black px-3.5 py-1 rounded-full uppercase">
              {project.index} · {project.label}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-black">
            {project.title}
          </h1>

          <p className="text-neutral-900 text-lg md:text-xl font-bold leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href={project.play} target="_blank" rel="noreferrer">
              <Button
                variant="default"
                size="lg"
                className="bg-black text-white hover:bg-neutral-800 rounded-2xl px-7 py-4 text-base font-black shadow-[4px_4px_0px_0px_#000000]"
              >
                <Play className="w-5 h-5 fill-white mr-2" />
                <span>Play in Browser</span>
              </Button>
            </a>

            {"github" in project && (
              <a href={project.github} target="_blank" rel="noreferrer">
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
            )}
          </div>
        </div>
      </section>

      {/* Facts Strip */}
      <section className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.facts.map(([label, value]) => (
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
            {project.intent}
          </h2>
          <div className="space-y-4 text-neutral-700 text-base md:text-lg font-medium leading-relaxed">
            {project.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* System Notes */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-6">
          <div className="inline-block bg-[#2F81F7] text-white px-3.5 py-1 rounded-xl text-xs font-black uppercase border-2 border-black">
            System Notes
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-black">
            Systems behind the run
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.notes.map(([Icon, title, copy], index) => (
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

      {/* Delivery & CTA */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-black text-white border-4 border-black rounded-[36px] p-8 md:p-12 shadow-[10px_10px_0px_0px_#FFC224] text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">
            See {project.title} in motion
          </h2>
          <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto font-medium">
            Jump directly into the game on itch.io or inspect the complete C#
            mechanics on GitHub.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href={project.play} target="_blank" rel="noreferrer">
              <Button
                variant="yellow"
                size="lg"
                className="rounded-2xl px-8 py-5 text-base font-black shadow-[4px_4px_0px_0px_#000000]"
              >
                <Play className="w-5 h-5 fill-black mr-2" />
                <span>Play {project.title}</span>
              </Button>
            </a>
            {"github" in project && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-black border-3 border-black rounded-2xl px-7 py-5 text-base font-black shadow-[4px_4px_0px_0px_#000000]"
                >
                  <Code2 className="w-5 h-5 mr-2" />
                  <span>GitHub Repository</span>
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
