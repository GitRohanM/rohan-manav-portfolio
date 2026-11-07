import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Box, Gauge, Gamepad2, Layers3, Play, Wrench } from "lucide-react";

const projects = {
  "rocket-glide": {
    index: "02",
    title: "Rocket Glide",
    label: "3D physics flight game",
    summary: "A Unity 6 precision flight game built around physics-based rocket control, dynamic obstacles, landing checks, and a structured mission loop.",
    visualLabel: "Flight loop / active",
    stages: ["Input sampled", "Thrust resolved", "Landing verified"],
    facts: [["Engine", "Unity 6"], ["Render pipeline", "URP"], ["Core language", "C#"], ["Release", "Windows + WebGL"]],
    intent: "Precision flight needs clear control and clear outcomes",
    paragraphs: [
      "Rocket Glide is built around a physics-based rocket controller where timing, obstacle response, and landing verification define the run.",
      "Its surrounding systems support repeatable missions: modular timing, dynamic S/A/B/C rank scoring, persistent high scores, and a custom pause state machine.",
    ],
    notes: [
      [Gamepad2, "Physics flight", "Rocket controls, dynamic obstacles, and landing verification form the core 3D flight loop."],
      [Layers3, "Modular architecture", "Mission timing, rank scoring, and high-score data are organized as modular C# systems."],
      [Gauge, "Performance and UI", "A zero-allocation HUD timer and custom pause state machine keep interface work responsive."],
      [Box, "Release target", "The project is published for Windows and WebGL, with draw-call batching and low GC overhead supporting stable 60 FPS."],
    ],
    delivery: [["Playable release", "A browser build and Windows release accompany the source repository"], ["Scoring feedback", "Dynamic S/A/B/C rankings communicate how each mission was completed"]],
    github: "https://github.com/GitRohanM/Rocket-Boost",
    play: "https://inboxrohanm.itch.io/rocket-glide",
  },
  "royal-rush": {
    index: "03",
    title: "Royal Rush",
    label: "3D endless runner",
    summary: "A Unity endless runner built around lane-based obstacle generation, continuous track recycling, and readable feedback as speed increases.",
    visualLabel: "Run loop / active",
    stages: ["Lane selected", "Obstacle spawned", "Pace adjusted"],
    facts: [["Engine", "Unity"], ["Input", "New Input System"], ["Camera", "Cinemachine"], ["Release", "WebGL"]],
    intent: "A fast run still needs a readable rhythm",
    paragraphs: [
      "Royal Rush focuses on how an endless runner stays legible over time: obstacles are generated in lanes, track sections are continuously recycled, and difficulty adjusts as the run progresses.",
      "Player control and collision handling use the New Input System and Rigidbody physics, while camera shake and particles are used as specific feedback for speed and impact.",
    ],
    notes: [
      [Layers3, "Procedural gameplay", "Dynamic lane-based obstacle generation and continuous track recycling extend the run without repeating a fixed course."],
      [Gamepad2, "Controls and physics", "Player controls and collisions are built with the New Input System and Rigidbody physics."],
      [Gauge, "Adaptive difficulty", "Run difficulty scales with pace so the challenge changes alongside player speed."],
      [Wrench, "Game feel", "Cinemachine camera shake and speed-up particles reinforce momentum at the moments players need feedback."],
    ],
    delivery: [["Playable release", "A WebGL build is available alongside the source repository"], ["Run feedback", "Camera and particle feedback are tied to movement and speed rather than decorative motion"]],
    github: "https://github.com/GitRohanM/Royal-Rush",
    play: "https://inboxrohanm.itch.io/royal-rush",
  },
  "2d-galaxy-shooter": {
    index: "04",
    title: "2D Galaxy Shooter",
    label: "2D arcade shooter",
    summary: "A Unity shooter built around responsive player state, reusable object pools, dynamic invulnerability frames, and modular power-up behaviours.",
    visualLabel: "Combat loop / active",
    stages: ["Wave pooled", "Power-up applied", "Score updated"],
    facts: [["Engine", "Unity"], ["Physics", "2D Physics"], ["Core language", "C#"], ["Release", "Playable build"]],
    intent: "Arcade responsiveness comes from systems that reset cleanly",
    paragraphs: [
      "2D Galaxy Shooter explores a compact arcade loop where player response, enemy waves, and power-up feedback all need to remain clear under pressure.",
      "The build uses an event-driven lives and score manager, reusable object pools for projectiles and enemies, and modular power-up behaviours for shield, triple-shot, and speed boost states.",
    ],
    notes: [
      [Gamepad2, "Player system", "Responsive 2D controls are paired with an event-driven lives and score manager and dynamic invulnerability frames."],
      [Box, "Object pooling", "Projectile and enemy-wave pools reduce runtime GC allocation and memory spikes."],
      [Layers3, "Power-up behaviour", "Shield, triple-shot, and speed boost features are modular behaviours instead of one-off rules."],
      [Wrench, "Layered feedback", "Audio and visual feedback support each power-up so state changes are easier to read in play."],
    ],
    delivery: [["Playable release", "A browser-accessible build is available through itch.io"], ["Runtime focus", "Reusable pools support projectile and enemy waves during active play"]],
    play: "https://inboxrohanm.itch.io/2d-galaxy-shooter",
  },
} as const;

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in projects)) notFound();
  const project = projects[slug as ProjectSlug];

  return (
    <main className="case-study">
      <header className="case-header page-width">
        <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Portfolio</Link>
        <span>{project.title} / Case study</span>
      </header>
      <section className="case-hero page-width">
        <div className="case-hero-copy">
          <p className="eyebrow"><span /> {project.index} / {project.label}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={project.play} target="_blank" rel="noreferrer"><Play aria-hidden="true" /> Play in browser</a>
            {"github" in project && <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">View source <ArrowUpRight aria-hidden="true" /></a>}
          </div>
        </div>
        <div className="case-blueprint" aria-label={`${project.title} system diagram`}>
          <div className="blueprint-label">{project.visualLabel}</div>
          <div className="blueprint-platform platform-one" />
          <div className="blueprint-platform platform-two" />
          <div className="blueprint-platform platform-three" />
          <div className="blueprint-character"><span /></div>
          <span className="blueprint-caption caption-one">{project.stages[0]}</span>
          <span className="blueprint-caption caption-two">{project.stages[1]}</span>
          <span className="blueprint-caption caption-three">{project.stages[2]}</span>
        </div>
      </section>
      <section className="case-facts page-width">
        {project.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </section>
      <section className="case-section page-width">
        <div className="case-section-heading"><p className="eyebrow"><span /> Build intent</p><h2>{project.intent}</h2></div>
        <div className="case-body-copy">{project.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="case-systems">
        <div className="page-width">
          <div className="case-section-heading"><p className="eyebrow"><span /> System notes</p><h2>Systems behind the run</h2></div>
          <div className="system-notes">
            {project.notes.map(([Icon, title, copy], index) => <article key={title}><Icon aria-hidden="true" /><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="case-section page-width delivery-section">
        <div className="case-section-heading"><p className="eyebrow"><span /> Delivery</p><h2>Built to be played, then inspected</h2></div>
        <div className="delivery-list">{project.delivery.map(([label, copy], index) => <div key={label}>{index === 0 ? <Play aria-hidden="true" /> : <Box aria-hidden="true" />}<span>{label}</span><p>{copy}</p></div>)}</div>
      </section>
      <section className="case-cta page-width">
        <p className="eyebrow"><span /> Explore {project.title}</p><h2>See the systems in motion</h2>
        <div className="hero-actions">
          <a className="button button-primary" href={project.play} target="_blank" rel="noreferrer"><Play aria-hidden="true" /> Play {project.title}</a>
          {"github" in project && <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>}
        </div>
      </section>
      <footer className="page-width site-footer"><span>Rohan Manav / Unity game developer</span><Link href="/">Back to portfolio <ArrowUpRight aria-hidden="true" /></Link></footer>
    </main>
  );
}
