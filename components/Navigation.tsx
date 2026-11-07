"use client";

import { Mail, Gamepad2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <div className="sticky top-6 z-50 container mx-auto px-4 py-2">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-2xl px-5 py-3 max-w-4xl mx-auto shadow-[6px_6px_0px_0px_#000000] transition-all">
        {/* Brand / Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#FFC224] border-2 border-black rounded-xl flex items-center justify-center font-black text-black shadow-[2px_2px_0px_0px_#000000] group-hover:-translate-y-0.5 transition-transform">
            RM
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base leading-tight text-black">
              Rohan Manav
            </span>
            <span className="text-xs font-semibold text-neutral-600">
              Unity Developer
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          <a
            href="#projects"
            className="text-base font-bold text-black hover:text-[#2F81F7] transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-base font-bold text-black hover:text-[#FF6B7A] transition-colors"
          >
            Systems
          </a>
          <a
            href="#playable"
            className="text-base font-bold text-black hover:text-[#6366F1] transition-colors"
          >
            Playable
          </a>
          <a
            href="#terminal"
            className="text-base font-bold text-black hover:text-[#10B981] transition-colors"
          >
            Terminal
          </a>
          <a
            href="#about"
            className="text-base font-bold text-black hover:text-[#FFC224] transition-colors"
          >
            About
          </a>
        </div>

        {/* CTA Contact Button */}
        <div className="flex items-center gap-2">
          <a href="mailto:inbox.rohanm@gmail.com">
            <Button
              size="sm"
              className="bg-black text-white hover:bg-neutral-800 rounded-xl px-4 py-2 font-bold flex items-center gap-2 shadow-[3px_3px_0px_0px_#000000]"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Get in Touch</span>
            </Button>
          </a>
        </div>
      </nav>
    </div>
  );
}
