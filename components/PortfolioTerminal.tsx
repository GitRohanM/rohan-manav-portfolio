"use client";

import { FormEvent, useState } from "react";

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  projects  Show selected Unity builds",
    "  skills    Show the current game-development toolkit",
    "  contact   Show ways to get in touch",
    "  clear     Clear this terminal",
  ],
  projects: [
    "Cloudstep — 3D precision platformer",
    "Rocket Glide — 3D physics flight game",
    "Royal Rush — 3D endless runner",
    "2D Galaxy Shooter — 2D arcade shooter",
  ],
  skills: [
    "Unity 6 URP · C# · character physics · procedural generation",
    "ScriptableObjects · custom editor tooling · profiling · Shader Graph",
    "Cinemachine · Git/Git LFS · WebGL · C++ · JavaScript",
  ],
  contact: [
    "Email: inbox.rohanm@gmail.com",
    "GitHub: github.com/GitRohanM",
    "LinkedIn: linkedin.com/in/rohan-manav",
  ],
};

export default function PortfolioTerminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "Welcome to Rohan Manav's portfolio terminal.",
    "Type 'help' to see available commands.",
  ]);

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setLines([]);
    } else if (commands[command]) {
      setLines((current) => [...current, `$ rohan ${command}`, ...commands[command]]);
    } else {
      setLines((current) => [...current, `$ rohan ${command}`, `Command not found: ${command}. Try 'help'.`]);
    }
    setInput("");
  }

  return (
    <div className="terminal-shell">
      <div className="terminal-bar" aria-hidden="true">
        <span className="terminal-dots"><i /><i /><i /></span>
        <span>rohan@portfolio:~</span>
      </div>
      <div className="terminal-body" aria-live="polite">
        {lines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}
        <form onSubmit={runCommand}>
          <label htmlFor="terminal-command">$ rohan&nbsp;</label>
          <input id="terminal-command" value={input} onChange={(event) => setInput(event.target.value)} autoComplete="off" spellCheck="false" aria-label="Terminal command" />
        </form>
      </div>
    </div>
  );
}
