"use client";

import React, { useEffect, useRef } from "react";

export const PaintingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Render once or on resize - NOT continuously on every frame!
    const renderStaticWash = () => {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      ctx.clearRect(0, 0, width, height);

      // Base porcelain paper fill
      ctx.fillStyle = "#fff8f6";
      ctx.fillRect(0, 0, width, height);

      const washes = [
        { x: width * 0.75, y: height * 0.15, radius: 450, color: "244, 185, 198", alpha: 0.35 },
        { x: width * 0.55, y: height * 0.35, radius: 520, color: "253, 222, 228", alpha: 0.4 },
        { x: width * 0.3, y: height * 0.1, radius: 400, color: "254, 235, 169", alpha: 0.32 },
        { x: width * 0.85, y: height * 0.9, radius: 420, color: "253, 219, 114", alpha: 0.35 },
        { x: width * 0.05, y: height * 0.02, radius: 360, color: "142, 214, 210", alpha: 0.28 },
        { x: width * 0.1, y: height * 0.85, radius: 380, color: "178, 222, 227", alpha: 0.25 },
      ];

      washes.forEach((w) => {
        const grad = ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.radius);
        grad.addColorStop(0, `rgba(${w.color}, ${w.alpha})`);
        grad.addColorStop(0.55, `rgba(${w.color}, ${w.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${w.color}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    renderStaticWash();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(renderStaticWash, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden will-change-transform">
      {/* High-Performance Canvas Wash (Zero GPU/CPU overhead) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* High-Resolution Exact Painted Artwork Overlay */}
      <div 
        className="absolute inset-0 opacity-55 mix-blend-multiply bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('/watercolor-bg-hd.png')`,
        }}
      />
    </div>
  );
};
