"use client";

import React, { useRef, useState, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.02,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>("");
  const [glareStyle, setGlareStyle] = useState<{
    opacity: number;
    background: string;
  }>({
    opacity: 0,
    background: "",
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const rafId = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-maxTilt to +maxTilt)
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      // Calculate glare coordinates (percentages)
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      // Calculate dynamic shadow offsets
      const shadowX = -rotateY * 1.8;
      const shadowY = rotateX * 1.8 + 14;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        setTransformStyle(
          `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
            2
          )}deg) scale3d(${scale}, ${scale}, ${scale})`
        );
        setGlareStyle({
          opacity: 1,
          background: `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(
            1
          )}%, rgba(255, 255, 255, 0.22) 0%, rgba(0, 229, 255, 0.12) 35%, transparent 75%)`,
        });
        if (cardRef.current) {
          cardRef.current.style.boxShadow = `${shadowX.toFixed(
            1
          )}px ${shadowY.toFixed(
            1
          )}px 36px -4px rgba(0, 0, 0, 0.8), 0 0 28px rgba(0, 229, 255, 0.22)`;
        }
      });
    },
    [maxTilt, scale]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);

    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));

    if (cardRef.current) {
      cardRef.current.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? "transform 0.08s ease-out, border-color 0.3s ease"
          : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease",
      }}
    >
      {/* 3D Content */}
      <div className="tilt-card-content">{children}</div>

      {/* Dynamic Inner Glare Layer */}
      <div
        className="tilt-card-glare"
        style={{
          opacity: glareStyle.opacity,
          background: glareStyle.background,
          transition: isHovered
            ? "opacity 0.2s ease"
            : "opacity 0.5s ease",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
