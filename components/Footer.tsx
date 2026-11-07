"use client";

import {
  Mail,
  Gamepad2,
  ArrowUpRight,
  Code2,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16 md:py-20 mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Connect Neo-Brutalist Box */}
        <div className="bg-white text-black border-4 border-black rounded-[36px] p-8 md:p-12 shadow-[10px_10px_0px_0px_#FFC224] mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="bg-black text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
                Have a game project or opportunity?
              </h2>
              <p className="text-neutral-700 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                I&apos;m always excited to discuss Unity development, gameplay systems,
                physics challenges, and collaborative game builds.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a href="mailto:inbox.rohanm@gmail.com" className="w-full">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full h-14 bg-black text-white hover:bg-neutral-800 rounded-2xl text-base font-black shadow-[4px_4px_0px_0px_#000000]"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Email inbox.rohanm@gmail.com</span>
                </Button>
              </a>

              <a
                href="https://linkedin.com/in/rohan-manav/"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button
                  variant="blue"
                  size="lg"
                  className="w-full h-14 rounded-2xl text-base font-black"
                >
                  <Link2 className="w-5 h-5 mr-2" />
                  <span>Connect on LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14 border-b border-neutral-800 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFC224] border-2 border-white rounded-xl flex items-center justify-center font-black text-black">
                RM
              </div>
              <span className="text-xl font-black text-white">Rohan Manav</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Unity Game Developer &amp; Systems Programmer building responsive,
              deterministic game experiences.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/GitRohanM"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-[#2F81F7] border-2 border-white rounded-xl flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-[3px_3px_0px_0px_#ffffff]"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/rohan-manav/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-[#FF6B7A] border-2 border-white rounded-xl flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-[3px_3px_0px_0px_#ffffff]"
              >
                <Link2 className="w-5 h-5" />
              </a>
              <a
                href="https://inboxrohanm.itch.io/"
                target="_blank"
                rel="noreferrer"
                aria-label="itch.io"
                className="w-10 h-10 bg-[#FFC224] border-2 border-white rounded-xl flex items-center justify-center text-black hover:-translate-y-1 transition-transform shadow-[3px_3px_0px_0px_#ffffff]"
              >
                <Gamepad2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-black text-base text-white uppercase tracking-wider">
              Sections
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400 font-medium">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Game Systems &amp; Toolkit
                </a>
              </li>
              <li>
                <a href="#playable" className="hover:text-white transition-colors">
                  Playable WebGL Builds
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-white transition-colors">
                  Developer Terminal
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
            </ul>
          </div>

          {/* Playable Games */}
          <div className="space-y-3">
            <h3 className="font-black text-base text-white uppercase tracking-wider">
              Playable Games
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400 font-medium">
              <li>
                <a
                  href="https://inboxrohanm.itch.io/rocket-glide"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Rocket Glide (WebGL)
                </a>
              </li>
              <li>
                <a
                  href="https://inboxrohanm.itch.io/royal-rush"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Royal Rush (Runner)
                </a>
              </li>
              <li>
                <a
                  href="https://inboxrohanm.itch.io/2d-galaxy-shooter"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Galaxy Shooter (2D Arcade)
                </a>
              </li>
              <li>
                <a
                  href="https://inboxrohanm.itch.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  itch.io Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h3 className="font-black text-base text-white uppercase tracking-wider">
              Direct Contact
            </h3>
            <p className="text-neutral-400 text-sm">
              inbox.rohanm@gmail.com
            </p>
            <p className="text-neutral-400 text-sm">
              Punjab, India
            </p>
            <div className="pt-2">
              <a
                href="#top"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#FFC224] hover:underline"
              >
                <span>Back to top</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-xs font-bold gap-4">
          <p>© 2026 Rohan Manav. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed in Paperfolio Style with Unity &amp; Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
