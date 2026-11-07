"use client";

import { FormEvent, useState } from "react";

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  projects  Show selected Unity game builds",
    "  skills    Show the current game-development toolkit",
    "  contact   Show ways to get in touch",
    "  clear     Clear this terminal",
  ],
  projects: [
    "• Apex Canyon — High-speed canyon vehicle physics & procedural terrain",
    "• Royal Rush — 3D endless runner with track recycling & Cinemachine",
    "• Rocket Glide — 3D physics flight game & landing threshold checks",
    "• Cube Run — Fast-paced minimalist obstacle runner",
    "• Galaxy Shooter — 2D space shooter with object pooling & state machines",
  ],
  skills: [
    "• Unity 6 · C# · character kinematics · vehicle physics",
    "• ScriptableObjects · custom editor tooling · memory profiling",
    "• URP · Shader Graph · Cinemachine · Git/Git LFS · WebGL",
    "• C++ · JavaScript · Data Structures & Algorithms",
  ],
  contact: [
    "• Email: inbox.rohanm@gmail.com",
    "• GitHub: github.com/GitRohanM",
    "• LinkedIn: linkedin.com/in/rohan-manav",
    "• itch.io: inboxrohanm.itch.io",
  ],
};

export default function PortfolioTerminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "Welcome to Rohan Manav's Unity developer terminal.",
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
      setLines((current) => [
        ...current,
        `$ rohan ${command}`,
        `Command not found: '${command}'. Type 'help' for command list.`,
      ]);
    }
    setInput("");
  }

  return (
    <div className="space-y-3 font-mono">
      <div className="space-y-1.5" aria-live="polite">
        {lines.map((line, index) => (
          <p key={`${line}-${index}`} className="leading-relaxed">
            {line.startsWith("$") ? (
              <span className="text-white font-bold">{line}</span>
            ) : line.startsWith("•") ? (
              <span className="text-yellow-300">{line}</span>
            ) : (
              <span className="text-emerald-400">{line}</span>
            )}
          </p>
        ))}
      </div>

      <form onSubmit={runCommand} className="flex items-center gap-2 pt-2 border-t border-neutral-800">
        <label htmlFor="terminal-command" className="text-white font-bold select-none">
          $ rohan&nbsp;
        </label>
        <input
          id="terminal-command"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          autoComplete="off"
          spellCheck="false"
          placeholder="type 'help'..."
          aria-label="Terminal command"
          className="flex-1 bg-transparent text-white font-mono outline-none border-none placeholder-neutral-600 focus:ring-0"
        />
      </form>
    </div>
  );
}
