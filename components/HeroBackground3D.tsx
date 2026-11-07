"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x121212, 0.018);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 5, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x121212, 0);
    container.appendChild(renderer.domElement);

    // 2. Wireframe Terrain Geometry (representing Unity Terrain & Mesh)
    const terrainWidth = 44;
    const terrainDepth = 44;
    const segmentsX = 36;
    const segmentsY = 36;

    const terrainGeometry = new THREE.PlaneGeometry(
      terrainWidth,
      terrainDepth,
      segmentsX,
      segmentsY
    );
    terrainGeometry.rotateX(-Math.PI / 2);

    // Store base vertices for sine wave modulation
    const positionAttr = terrainGeometry.attributes.position;
    const initialPositions = new Float32Array(positionAttr.array);

    const terrainMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });

    const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrain.position.set(0, -3.5, 0);
    scene.add(terrain);

    // 3. Floating 3D Geometric Game Object (Rotating Low-Poly Icosahedron)
    const coreGeometry = new THREE.IcosahedronGeometry(2.2, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreLines = new THREE.LineSegments(
      coreWireframe,
      new THREE.LineBasicMaterial({
        color: 0x7b2cbf,
        transparent: true,
        opacity: 0.45,
      })
    );
    coreLines.position.set(0, 1.8, -2);
    scene.add(coreLines);

    // 4. Particle Constellation
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 40;
      particlePositions[i + 1] = Math.random() * 16 - 2;
      particlePositions[i + 2] = (Math.random() - 0.5) * 35;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.14,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = (y / rect.height) * 2;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 6. Viewport Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    // 7. Render Optimization: Pause when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 8. Animation Loop
    let clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation towards mouse
      targetX += (mouseX * 3.5 - targetX) * 0.04;
      targetY += (-mouseY * 2.0 - targetY) * 0.04;

      camera.position.x = targetX;
      camera.position.y = 5 + targetY;
      camera.lookAt(0, 0.5, 0);

      // Undulate terrain vertices like game terrain mesh
      const positions = terrainGeometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const u = initialPositions[i * 3];
        const w = initialPositions[i * 3 + 2];
        const elevation =
          Math.sin(u * 0.35 + elapsed * 1.2) * 0.9 +
          Math.cos(w * 0.35 + elapsed * 0.9) * 0.9;
        positions.setY(i, elevation);
      }
      positions.needsUpdate = true;

      // Rotate geometric core
      coreLines.rotation.x = elapsed * 0.25;
      coreLines.rotation.y = elapsed * 0.35;

      // Slow particle drift
      particles.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      observer.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      terrainGeometry.dispose();
      terrainMaterial.dispose();
      coreGeometry.dispose();
      coreWireframe.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-3d-canvas-container"
      aria-hidden="true"
    />
  );
}
