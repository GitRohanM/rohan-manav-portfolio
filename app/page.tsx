import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  ExternalLink,
  Gamepad2,
  Link2,
  Mail,
  Play,
  Video,
} from "lucide-react";
import Link from "next/link";
import PortfolioTerminal from "../components/PortfolioTerminal";

const links = {
  github: "https://github.com/GitRohanM",
  linkedin: "https://linkedin.com/in/rohan-manav/",
  itch: "https://inboxrohanm.itch.io/",
  email: "mailto:inbox.rohanm@gmail.com",
};

interface TechTag {
  name: string;
  type: "unity" | "csharp" | "secondary";
}

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: TechTag[];
  github?: string;
  play: string;
}

const projects: Project[] = [
  {
    slug: "apex-canyon",
    title: "Apex Canyon",
    description:
      "High-speed canyon racer built with responsive vehicle drift physics, dynamic camera shakes, and procedural canyon terrain.",
    tags: [
      { name: "Unity 6", type: "unity" },
      { name: "C#", type: "csharp" },
      { name: "Vehicle Physics", type: "secondary" },
      { name: "URP", type: "secondary" },
    ],
    github: "https://github.com/GitRohanM",
    play: "https://inboxrohanm.itch.io/",
  },
  {
    slug: "royal-rush",
    title: "Royal Rush",
    description:
      "A lane-based 3D endless runner with continuous track recycling, adaptive difficulty scaling, and Cinemachine camera feedback.",
    tags: [
      { name: "Unity", type: "unity" },
      { name: "C#", type: "csharp" },
      { name: "Cinemachine", type: "secondary" },
      { name: "New Input System", type: "secondary" },
    ],
    github: "https://github.com/GitRohanM/Royal-Rush",
    play: "https://inboxrohanm.itch.io/royal-rush",
  },
  {
    slug: "rocket-glide",
    title: "Rocket Glide",
    description:
      "A precision flight game with physics-based rocket thrust, dynamic obstacles, landing checks, and structured rank scoring.",
    tags: [
      { name: "Unity 6", type: "unity" },
      { name: "C#", type: "csharp" },
      { name: "Physics", type: "secondary" },
      { name: "WebGL", type: "secondary" },
    ],
    github: "https://github.com/GitRohanM/Rocket-Boost",
    play: "https://inboxrohanm.itch.io/rocket-glide",
  },
  {
    slug: "cube-run",
    title: "Cube Run",
    description:
      "A fast-paced minimalist obstacle runner built on tight collision physics, smooth input response, and progressive difficulty curves.",
    tags: [
      { name: "Unity", type: "unity" },
      { name: "C#", type: "csharp" },
      { name: "Physics", type: "secondary" },
      { name: "Game Systems", type: "secondary" },
    ],
    play: "https://inboxrohanm.itch.io/",
  },
  {
    slug: "galaxy-shooter",
    title: "Galaxy Shooter",
    description:
      "A responsive arcade space shooter featuring reusable object pools, invulnerability state machines, and modular power-up systems.",
    tags: [
      { name: "Unity", type: "unity" },
      { name: "C#", type: "csharp" },
      { name: "2D", type: "secondary" },
      { name: "Object Pooling", type: "secondary" },
    ],
    play: "https://inboxrohanm.itch.io/2d-galaxy-shooter",
  },
];

function OutboundLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight className="card-link-icon" aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      {/* Header Navigation */}
      <header className="site-header">
        <div className="site-frame header-frame">
          <a className="wordmark" href="#top">
            <span className="wordmark-dot" aria-hidden="true"></span>
            <strong>Rohan Manav</strong>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#projects">Featured Work</a>
            <a href="#lab">Laboratory</a>
            <a href="#terminal">Terminal</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Step 2: Dedicated Hero Section */}
      <section className="hero-section" aria-label="Introduction">
        <div className="site-frame hero-content">
          <div className="hero-badge">
            <span className="status-dot" aria-hidden="true"></span>
            <span>Unity Gameplay &amp; Systems Programmer</span>
          </div>

          <h1 className="hero-name">Rohan Manav</h1>
          <p className="hero-role">Unity Game Developer</p>
          <p className="hero-tagline">
            Building responsive controls, readable feedback, and robust game
            systems in Unity and C#.
          </p>

          <div className="hero-actions">
            <a className="btn-cta-resume" href="#contact">
              <Download className="btn-icon" aria-hidden="true" />
              <span>Resume</span>
            </a>
            <a className="btn-secondary-action" href="#projects">
              <Gamepad2 className="btn-icon" aria-hidden="true" />
              <span>View Projects</span>
            </a>
          </div>
        </div>
      </section>

      {/* Step 3: Featured Work with 16:9 Media Placeholders */}
      <section
        className="featured-section site-frame"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="section-header">
          <div className="section-kicker">
            <span>[ 01 // FEATURED WORK ]</span>
          </div>
          <h2 className="section-title" id="projects-title">
            Playable Systems &amp; Games
          </h2>
          <p className="section-lede">
            A selection of Unity game projects built around responsive player
            controls, deterministic physics, and robust C# gameplay architecture.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              {/* Locked 16:9 Aspect Ratio Media Container */}
              <div
                className="media-placeholder-container"
                aria-label={`${project.title} gameplay preview`}
              >
                <div
                  className="media-placeholder-wireframe"
                  aria-hidden="true"
                />
                <div className="media-placeholder-badge">
                  <Video aria-hidden="true" />
                  <span>Video/GIF Placeholder (16:9)</span>
                </div>
              </div>

              {/* Project Card Information */}
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                {/* Color-coded Technology Pills */}
                <div
                  className="tech-pill-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tags.map((tag) => {
                    const tagClass =
                      tag.type === "unity"
                        ? "tech-pill-unity"
                        : tag.type === "csharp"
                        ? "tech-pill-csharp"
                        : "tech-pill-secondary";

                    return (
                      <span className={`tech-pill ${tagClass}`} key={tag.name}>
                        {tag.name}
                      </span>
                    );
                  })}
                </div>

                {/* Card Action Links */}
                <div className="card-links">
                  <a
                    className="card-link-play"
                    href={project.play}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Play className="card-link-icon" aria-hidden="true" />
                    <span>Play Build</span>
                  </a>
                  {project.github && (
                    <a
                      className="card-link-secondary"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Code2 className="card-link-icon" aria-hidden="true" />
                      <span>Code</span>
                    </a>
                  )}
                  <Link
                    className="card-link-secondary"
                    href={`/projects/${project.slug}`}
                  >
                    <span>System Details</span>
                    <ArrowUpRight
                      className="card-link-icon"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Laboratory Section */}
      <section
        className="lab-section site-frame"
        id="lab"
        aria-labelledby="lab-title"
      >
        <div className="section-heading">
          <div>
            <h2 id="lab-title">Laboratory</h2>
            <p>
              A quick strip of the systems and tools I keep sharpening across
              projects.
            </p>
          </div>
          <a href="#terminal" style={{ color: "var(--accent-cyan)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <span>Open terminal</span> <ArrowDown className="card-link-icon" aria-hidden="true" />
          </a>
        </div>
        <div className="lab-grid">
          <article>
            <span>01 / Unity tooling</span>
            <h3>Custom editor workflows</h3>
            <p>
              Editor scripts that make repeatable scene and level setup quicker
              to manage.
            </p>
          </article>
          <article>
            <span>02 / Visual fidelity</span>
            <h3>URP and Shader Graph</h3>
            <p>
              Lighting, materials, and environment work grounded in Unity&apos;s
              Universal Render Pipeline.
            </p>
          </article>
          <article>
            <span>03 / Build quality</span>
            <h3>Profiling and release checks</h3>
            <p>
              Profiler, Frame Debugger, Git LFS, and WebGL considerations for
              dependable builds.
            </p>
          </article>
        </div>
      </section>

      {/* Playable Build Spotlight */}
      <section className="play-section" aria-labelledby="play-title">
        <div className="site-frame">
          <h2 id="play-title">Explore a Playable Build</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
            Rocket Glide is available right in your browser—experience responsive
            physics controls and landing mechanics.
          </p>
          <div className="play-panel">
            <div className="play-copy">
              <Gamepad2 aria-hidden="true" />
              <span>Rocket Glide</span>
              <strong>Playable Unity Build</strong>
              <OutboundLink href="https://inboxrohanm.itch.io/rocket-glide">
                <Play className="card-link-icon" aria-hidden="true" /> Play in browser
              </OutboundLink>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section
        className="terminal-section site-frame"
        id="terminal"
        aria-labelledby="terminal-title"
      >
        <h2 id="terminal-title">Interactive Terminal</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
          Explore the portfolio the developer way. Type <code>help</code> to get
          started.
        </p>
        <PortfolioTerminal />
      </section>

      {/* About Section */}
      <section
        className="about-section site-frame"
        id="about"
        aria-labelledby="about-title"
      >
        <h2 id="about-title">About Me</h2>
        <div className="about-grid">
          <div className="monogram" aria-label="Rohan Manav monogram">
            <span>RM</span>
            <i>Unity / C#</i>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Rohan Manav, a Unity game developer working with C#,
              Unity 6, URP, and WebGL. I focus on the systems that make a game
              feel clear and responsive: movement, physics, UI state, feedback,
              and reliable release builds.
            </p>
            <p>
              I also work with C++, JavaScript, HTML/CSS, React, Node.js, data
              structures, and problem solving. The work here is a record of
              building, testing, and refining interactive ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section
        className="experience-section site-frame"
        id="experience"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title">Education &amp; Build Focus</h2>
        <div className="experience-grid">
          <article>
            <span>2026</span>
            <h3>Master of Computer Applications</h3>
            <p>Guru Nanak Dev University College, Jalandhar</p>
          </article>
          <article>
            <span>2024</span>
            <h3>Bachelor of Computer Applications</h3>
            <p>Lyallpur Khalsa College, Jalandhar</p>
          </article>
          <article>
            <span>Now</span>
            <h3>Unity game development</h3>
            <p>Gameplay systems, tools, performance, and playable web releases</p>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="site-frame" style={{ textAlign: "center" }}>
          <h2 id="contact-title">Let&apos;s Connect</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "32px", maxWidth: "600px", marginInline: "auto" }}>
            I&apos;m open to game-development opportunities and conversations
            about building thoughtful interactive systems.
          </p>
          <div className="social-links">
            <OutboundLink href={links.linkedin}>
              <Link2 className="card-link-icon" aria-hidden="true" /> LinkedIn
            </OutboundLink>
            <OutboundLink href={links.github}>
              <Code2 className="card-link-icon" aria-hidden="true" /> GitHub
            </OutboundLink>
            <OutboundLink href={links.itch}>
              <ExternalLink className="card-link-icon" aria-hidden="true" /> itch.io
            </OutboundLink>
          </div>
          <a className="primary-button" href={links.email}>
            <Mail className="card-link-icon" aria-hidden="true" /> Email Rohan
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="site-frame">
          <span>© 2026 Rohan Manav — Unity Game Developer</span>
          <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            Back to top <ArrowUpRight className="card-link-icon" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
