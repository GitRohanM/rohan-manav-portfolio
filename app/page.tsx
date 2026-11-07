import {
  ArrowDownRight,
  ArrowUpRight,
  Box,
  Code2,
  Gamepad2,
  Layers3,
  Mail,
  MoveRight,
  Play,
  Sparkles,
  Wrench,
} from "lucide-react";

const links = {
  github: "https://github.com/GitRohanM",
  linkedin: "https://linkedin.com/in/rohan-manav/",
  itch: "https://inboxrohanm.itch.io/",
  email: "mailto:inbox.rohanm@gmail.com",
};

const projects = [
  {
    title: "Rocket Glide",
    type: "3D physics flight game",
    stack: "Unity 6 / C# / URP",
    summary:
      "A precision flight game built around physics-based rocket controls, dynamic obstacles, landing checks, and a modular mission system.",
    details: [
      "Dynamic S/A/B/C rank scoring and high-score persistence",
      "Zero-allocation HUD timer and custom pause state machine",
      "Windows and WebGL release tuned for stable 60 FPS",
    ],
    github: "https://github.com/GitRohanM/Rocket-Boost",
    play: "https://inboxrohanm.itch.io/rocket-glide",
    accent: "cobalt",
  },
  {
    title: "Royal Rush",
    type: "3D endless runner",
    stack: "Unity / C# / WebGL",
    summary:
      "An endless runner where lane-based obstacle generation and track recycling keep the run readable as speed increases.",
    details: [
      "New Input System controls and Rigidbody collision handling",
      "Adaptive difficulty with Cinemachine camera feedback",
      "Speed-up particles tuned to communicate momentum",
    ],
    github: "https://github.com/GitRohanM/Royal-Rush",
    play: "https://inboxrohanm.itch.io/royal-rush",
    accent: "ember",
  },
  {
    title: "2D Galaxy Shooter",
    type: "2D arcade shooter",
    stack: "Unity / C# / 2D Physics",
    summary:
      "A responsive arcade shooter with event-driven player state, reusable projectile pools, and modular power-ups.",
    details: [
      "Lives and score manager with dynamic invulnerability frames",
      "Object pools for enemies, projectiles, and enemy waves",
      "Shield, triple-shot, and speed-boost behaviours with layered feedback",
    ],
    play: "https://inboxrohanm.itch.io/2d-galaxy-shooter",
    accent: "mint",
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

function SystemNode({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={`system-node ${className}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header page-width">
        <a className="wordmark" href="#top" aria-label="Rohan Manav home">
          <span className="wordmark-mark" aria-hidden="true">RM</span>
          <span>Rohan Manav</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#focus">Focus</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-link" href={links.itch} target="_blank" rel="noreferrer">
          Play games <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero page-width" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Unity game developer</p>
          <h1>Systems that make movement feel right</h1>
          <p className="hero-lede">
            I build responsive 2D and 3D games in Unity, from character control and physics to editor tools, UI state, and WebGL releases.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://inboxrohanm.itch.io/cloudstep" target="_blank" rel="noreferrer">
              <Play aria-hidden="true" /> Play Cloudstep
            </a>
            <a className="button button-secondary" href="https://github.com/GitRohanM/CloudStep-3D" target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" /> View source
            </a>
          </div>
        </div>

        <div className="systems-map" aria-label="Cloudstep gameplay systems map">
          <div className="map-topline"><span>Cloudstep</span><span>System map / 01</span></div>
          <div className="map-scene">
            <div className="map-orbit orbit-a" />
            <div className="map-orbit orbit-b" />
            <div className="platform platform-back" />
            <div className="platform platform-front" />
            <div className="player-marker" aria-hidden="true"><span /></div>
            <SystemNode className="node-controller" label="Controller" value="Coyote + buffer" />
            <SystemNode className="node-camera" label="Camera" value="Wall-aware" />
            <SystemNode className="node-audio" label="Audio" value="Pooled SFX" />
            <SystemNode className="node-tools" label="Tools" value="Scene setup" />
            <div className="path-line path-one" />
            <div className="path-line path-two" />
            <div className="path-line path-three" />
          </div>
          <div className="map-footer"><span>3 levels</span><span>Unity 6 / URP</span><span>3D precision platformer</span></div>
        </div>
      </section>

      <section className="feature-band" id="projects">
        <div className="page-width">
          <div className="section-intro">
            <p className="eyebrow"><span /> Selected work</p>
            <h2>Gameplay systems, built to be felt</h2>
            <p>Each project is a focused study in control, feedback, structure, and release-ready implementation.</p>
          </div>

          <article className="featured-project">
            <div className="project-index">01 / Featured build</div>
            <div className="featured-copy">
              <p className="project-kicker">3D precision platformer</p>
              <h3>Cloudstep</h3>
              <p className="project-summary">
                A Unity 6 platformer designed around a responsive controller, obstacle-aware camera, pooled audio, and custom tooling for level generation and scene setup.
              </p>
              <ul className="system-list">
                <li><MoveRight aria-hidden="true" /> Coyote time, jump buffering, and moving-platform physics</li>
                <li><Box aria-hidden="true" /> Menu, HUD, pause, and win/lose flow across three levels</li>
                <li><Wrench aria-hidden="true" /> Custom Unity Editor scripts for repeatable setup</li>
              </ul>
              <div className="text-links">
                <ExternalLink href="https://github.com/GitRohanM/CloudStep-3D">GitHub</ExternalLink>
                <ExternalLink href="https://inboxrohanm.itch.io/cloudstep">Play in browser</ExternalLink>
              </div>
            </div>
            <div className="feature-specs">
              <div><span>Engine</span><strong>Unity 6</strong></div>
              <div><span>Render</span><strong>URP</strong></div>
              <div><span>Input</span><strong>New Input System</strong></div>
              <div><span>Release</span><strong>Playable build</strong></div>
            </div>
          </article>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-card-top">
                  <span>0{index + 2}</span>
                  <span>{project.type}</span>
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p className="stack">{project.stack}</p>
                  <p>{project.summary}</p>
                </div>
                <ul>
                  {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <div className="text-links">
                  {project.github && <ExternalLink href={project.github}>GitHub</ExternalLink>}
                  <ExternalLink href={project.play}>Play build</ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="focus-section page-width" id="focus">
        <div className="section-intro compact">
          <p className="eyebrow"><span /> Build focus</p>
          <h2>Technical work that supports the player experience</h2>
        </div>
        <div className="focus-rows">
          <div><Gamepad2 aria-hidden="true" /><span>Gameplay</span><p>Character controllers, input, physics, raycasting, prefabs, animation</p></div>
          <div><Layers3 aria-hidden="true" /><span>Architecture</span><p>State machines, ScriptableObjects, UI flow, object pooling, custom editor tooling</p></div>
          <div><Sparkles aria-hidden="true" /><span>Polish</span><p>URP, Shader Graph, Cinemachine, audio feedback, profiling, Frame Debugger</p></div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="page-width about-grid">
          <div className="section-intro compact">
            <p className="eyebrow"><span /> About</p>
            <h2>Building the parts of a game players notice first</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Rohan Manav, a Unity game developer working in C#, Unity 6, and WebGL. My projects focus on the systems beneath responsive controls: clear feedback, predictable state, and performance-conscious implementation.
            </p>
            <p>
              Alongside game development, I bring a foundation in C++, JavaScript, HTML/CSS, React, Node.js, data structures, and problem solving.
            </p>
            <div className="education-line"><span>Education</span><p>MCA, Guru Nanak Dev University College, Jalandhar · 2026</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section page-width">
        <p className="eyebrow"><span /> Contact</p>
        <h2>Let&apos;s build something players want to keep moving through</h2>
        <div className="contact-actions">
          <a className="button button-primary" href={links.email}><Mail aria-hidden="true" /> Email Rohan</a>
          <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight aria-hidden="true" /> LinkedIn</a>
          <a className="button button-secondary" href={links.github} target="_blank" rel="noreferrer"><Code2 aria-hidden="true" /> GitHub</a>
        </div>
      </section>

      <footer className="page-width site-footer">
        <span>Rohan Manav / Unity game developer</span>
        <a href="#top">Back to top <ArrowDownRight aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
