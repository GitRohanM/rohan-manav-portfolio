import { ArrowDown, ArrowUpRight, Code2, Download, ExternalLink, Gamepad2, Link2, Mail, Play } from "lucide-react";
import Link from "next/link";
import PortfolioTerminal from "../components/PortfolioTerminal";

const links = {
  github: "https://github.com/GitRohanM",
  linkedin: "https://linkedin.com/in/rohan-manav/",
  itch: "https://inboxrohanm.itch.io/",
  email: "mailto:inbox.rohanm@gmail.com",
};

const projects = [
  {
    slug: "cloudstep",
    title: "Cloudstep",
    description:
      "A 3D precision platformer built around responsive movement, readable obstacles, and polished level flow.",
    tags: ["Unity 6", "C#", "URP", "Platformer"],
    github: "https://github.com/GitRohanM/CloudStep-3D",
    play: "https://inboxrohanm.itch.io/cloudstep",
    art: "cloudstep-art",
  },
  {
    slug: "rocket-glide",
    title: "Rocket Glide",
    description:
      "A physics flight game with dynamic obstacles, landing checks, missions, and a custom HUD state flow.",
    tags: ["Unity", "C#", "Physics", "WebGL"],
    github: "https://github.com/GitRohanM/Rocket-Boost",
    play: "https://inboxrohanm.itch.io/rocket-glide",
    art: "rocket-art",
  },
  {
    slug: "royal-rush",
    title: "Royal Rush",
    description:
      "A lane-based 3D endless runner with recycled tracks, adaptive difficulty, and Cinemachine feedback.",
    tags: ["Unity", "C#", "Runner", "Cinemachine"],
    github: "https://github.com/GitRohanM/Royal-Rush",
    play: "https://inboxrohanm.itch.io/royal-rush",
    art: "royal-art",
  },
  {
    slug: "2d-galaxy-shooter",
    title: "2D Galaxy Shooter",
    description:
      "A responsive arcade shooter with reusable object pools, player state, power-ups, and wave systems.",
    tags: ["Unity", "C#", "2D", "Object pools"],
    play: "https://inboxrohanm.itch.io/2d-galaxy-shooter",
    art: "galaxy-art",
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
      {children} <ArrowUpRight aria-hidden="true" />
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
            <a href="#projects">Projects</a>
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
            Building responsive controls, readable feedback, and robust game systems in Unity and C#.
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

      {/* Retained Sections for Step 3 and beyond */}
      <section
        className="intro-section site-frame"
        id="projects"
        aria-labelledby="projects-title"
      >
        <h2 id="projects-title" style={{ marginTop: "64px" }}>
          Featured Work
        </h2>
        <p className="section-lede">
          A selection of playable Unity projects focused on responsive
          controls, readable feedback, and game systems built with care.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className={`project-art ${project.art}`}>
                <span className="engine-badge">Unity</span>
                <span className="art-title">{project.title}</span>
                <div className="art-shapes" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="project-copy">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="card-links">
                  <Link href={`/projects/${project.slug}`}>
                    Case study <ArrowUpRight aria-hidden="true" />
                  </Link>
                  {project.github && (
                    <OutboundLink href={project.github}>Code</OutboundLink>
                  )}
                  <OutboundLink href={project.play}>Play</OutboundLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

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
          <a href="#terminal">
            Open terminal <ArrowDown aria-hidden="true" />
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

      <section className="play-section" aria-labelledby="play-title">
        <div className="site-frame">
          <h2 id="play-title">Explore a playable build</h2>
          <p>
            Cloudstep is available in the browser—move through three levels
            built around precise, responsive platforming.
          </p>
          <div className="play-panel">
            <div className="play-grid" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="play-copy">
              <Gamepad2 aria-hidden="true" />
              <span>Cloudstep</span>
              <strong>Playable Unity build</strong>
              <OutboundLink href="https://inboxrohanm.itch.io/cloudstep">
                <Play aria-hidden="true" /> Play in browser
              </OutboundLink>
            </div>
            <span className="play-meta">Unity 6 / WebGL</span>
          </div>
        </div>
      </section>

      <section
        className="terminal-section site-frame"
        id="terminal"
        aria-labelledby="terminal-title"
      >
        <h2 id="terminal-title">Interactive Terminal</h2>
        <p>
          Explore the portfolio the developer way. Type <code>help</code> to get
          started.
        </p>
        <PortfolioTerminal />
        <span className="terminal-tip">
          Try <code>projects</code>, <code>skills</code>, or <code>contact</code>
        </span>
      </section>

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

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="site-frame">
          <h2 id="contact-title">Let&apos;s Connect</h2>
          <p>
            I&apos;m open to game-development opportunities and conversations
            about building thoughtful interactive work.
          </p>
          <div className="social-links">
            <OutboundLink href={links.linkedin}>
              <Link2 aria-hidden="true" /> LinkedIn
            </OutboundLink>
            <OutboundLink href={links.github}>
              <Code2 aria-hidden="true" /> GitHub
            </OutboundLink>
            <OutboundLink href={links.itch}>
              <ExternalLink aria-hidden="true" /> itch.io
            </OutboundLink>
          </div>
          <a className="primary-button" href={links.email}>
            <Mail aria-hidden="true" /> Email Rohan
          </a>
        </div>
      </section>

      <footer>
        <div className="site-frame">
          <span>© 2026 Rohan Manav</span>
          <a href="#top">
            Back to top <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
