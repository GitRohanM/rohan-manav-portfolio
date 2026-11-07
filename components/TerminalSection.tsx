"use client";

import { Terminal as TerminalIcon, Sparkles } from "lucide-react";
import PortfolioTerminal from "./PortfolioTerminal";

export function TerminalSection() {
  return (
    <section id="terminal" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-black">
          Developer{" "}
          <span className="bg-[#10B981] text-white px-3.5 py-1 inline-block rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
            CLI Terminal
          </span>
        </h2>
        <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          Explore the portfolio the developer way. Type <code>help</code>,{" "}
          <code>projects</code>, or <code>skills</code>.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-black border-4 border-black rounded-[32px] overflow-hidden shadow-[10px_10px_0px_0px_#000000]">
        {/* Retro Header Bar */}
        <div className="bg-white border-b-4 border-black px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#FF6B7A] border-2 border-black inline-block" />
            <span className="w-4 h-4 rounded-full bg-[#FFC224] border-2 border-black inline-block" />
            <span className="w-4 h-4 rounded-full bg-[#10B981] border-2 border-black inline-block" />
          </div>
          <div className="flex items-center gap-2 text-xs font-black uppercase text-black tracking-wider">
            <TerminalIcon className="w-4 h-4" />
            <span>rohan@game-dev-terminal:~</span>
          </div>
          <div className="text-xs font-bold text-neutral-500">zsh</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base text-emerald-400 bg-neutral-950 min-h-[300px]">
          <PortfolioTerminal />
        </div>
      </div>
    </section>
  );
}
