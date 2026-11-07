import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Box, Camera, Gamepad2, Layers3, Play, Wrench } from "lucide-react";

const cloudstepLinks = {
  github: "https://github.com/GitRohanM/CloudStep-3D",
  play: "https://inboxrohanm.itch.io/cloudstep",
};

export default function CloudstepCaseStudy() {
  return (
    <main className="case-study">
      <header className="case-header page-width">
        <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Portfolio</Link>
        <span>Cloudstep / Case study</span>
      </header>

      <section className="case-hero page-width">
        <div className="case-hero-copy">
          <p className="eyebrow"><span /> 01 / 3D precision platformer</p>
          <h1>Cloudstep</h1>
          <p>
            A Unity 6 platformer built around clear movement, predictable state, and reusable tools for a three-level experience.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={cloudstepLinks.play} target="_blank" rel="noreferrer"><Play aria-hidden="true" /> Play in browser</a>
            <a className="button button-secondary" href={cloudstepLinks.github} target="_blank" rel="noreferrer">View source <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="case-blueprint" aria-label="Cloudstep system diagram">
          <div className="blueprint-label">Movement loop / active</div>
          <div className="blueprint-platform platform-one" />
          <div className="blueprint-platform platform-two" />
          <div className="blueprint-platform platform-three" />
          <div className="blueprint-character"><span /></div>
          <span className="blueprint-caption caption-one">Input sampled</span>
          <span className="blueprint-caption caption-two">Jump buffered</span>
          <span className="blueprint-caption caption-three">Landing resolved</span>
        </div>
      </section>

      <section className="case-facts page-width">
        <div><span>Engine</span><strong>Unity 6</strong></div>
        <div><span>Render pipeline</span><strong>URP</strong></div>
        <div><span>Core language</span><strong>C#</strong></div>
        <div><span>Release</span><strong>Playable build</strong></div>
      </section>

      <section className="case-section page-width">
        <div className="case-section-heading">
          <p className="eyebrow"><span /> Build intent</p>
          <h2>Movement that stays responsive when the level does not</h2>
        </div>
        <div className="case-body-copy">
          <p>
            Cloudstep is a focused precision-platforming project. Its systems are designed to make jumps feel intentional while still handling the interruptions players notice most: late input, leaving a ledge, moving platforms, and camera occlusion.
          </p>
          <p>
            The project also treats the surrounding game flow as part of the build, with menu, HUD, pause, win/lose states, and cross-scene progression implemented across three levels.
          </p>
        </div>
      </section>

      <section className="case-systems">
        <div className="page-width">
          <div className="case-section-heading">
            <p className="eyebrow"><span /> System notes</p>
            <h2>Four systems behind the run</h2>
          </div>
          <div className="system-notes">
            <article>
              <Gamepad2 aria-hidden="true" />
              <span>01</span>
              <h3>Responsive controller</h3>
              <p>Coyote time, jump buffering, and moving-platform physics keep the controller responsive at the edges of player input.</p>
            </article>
            <article>
              <Camera aria-hidden="true" />
              <span>02</span>
              <h3>Obstacle-aware camera</h3>
              <p>A third-person camera detects obstacles and adjusts around them to reduce wall clipping during movement.</p>
            </article>
            <article>
              <Layers3 aria-hidden="true" />
              <span>03</span>
              <h3>Audio and state</h3>
              <p>Object pooling and ScriptableObjects support optimized sound effects, while UI state follows the player across scenes.</p>
            </article>
            <article>
              <Wrench aria-hidden="true" />
              <span>04</span>
              <h3>Editor tooling</h3>
              <p>Custom Unity Editor scripts automate repeatable level generation and scene setup work.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section page-width delivery-section">
        <div className="case-section-heading">
          <p className="eyebrow"><span /> Delivery</p>
          <h2>Game flow is part of the game system</h2>
        </div>
        <div className="delivery-list">
          <div><Box aria-hidden="true" /><span>Level flow</span><p>Menu, HUD, pause, win/lose, and cross-scene progression across three levels</p></div>
          <div><Play aria-hidden="true" /><span>Playable release</span><p>A browser-accessible build is available alongside the source repository</p></div>
        </div>
      </section>

      <section className="case-cta page-width">
        <p className="eyebrow"><span /> Explore Cloudstep</p>
        <h2>See the systems in motion</h2>
        <div className="hero-actions">
          <a className="button button-primary" href={cloudstepLinks.play} target="_blank" rel="noreferrer"><Play aria-hidden="true" /> Play Cloudstep</a>
          <a className="button button-secondary" href={cloudstepLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <footer className="page-width site-footer">
        <span>Rohan Manav / Unity game developer</span>
        <Link href="/">Back to portfolio <ArrowUpRight aria-hidden="true" /></Link>
      </footer>
    </main>
  );
}
