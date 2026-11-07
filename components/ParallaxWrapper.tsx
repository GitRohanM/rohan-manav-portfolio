"use client";

import React, { useEffect, useRef } from "react";

interface ParallaxWrapperProps {
  children: React.ReactNode;
}

export default function ParallaxWrapper({ children }: ParallaxWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Select all elements marked for parallax
      const elements = document.querySelectorAll<HTMLElement>("[data-parallax-speed]");

      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0");
        const zDepth = parseFloat(el.getAttribute("data-parallax-z") || "0");
        const rect = el.getBoundingClientRect();

        // Only calculate for elements near the viewport
        if (rect.top - windowHeight <= 200 && rect.bottom >= -200) {
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const distanceFromCenter = elementCenter - viewportCenter;
          const translateY = distanceFromCenter * speed * -0.15;

          el.style.transform = `translate3d(0, ${translateY.toFixed(
            1
          )}px, ${zDepth}px)`;
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax(); // Initial positioning

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="parallax-root-container">
      {children}
    </div>
  );
}
