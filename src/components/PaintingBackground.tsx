"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export const PaintingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Dynamic pastel watercolor pigment droplets matching the uploaded art
    interface PastelWash {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
      phase: number;
    }

    const washes: PastelWash[] = [
      // Soft rose & blush (top-right & center)
      { x: width * 0.75, y: height * 0.15, radius: 400, color: "244, 185, 198", vx: -0.06, vy: 0.04, alpha: 0.35, phase: 0 },
      { x: width * 0.55, y: height * 0.35, radius: 460, color: "253, 222, 228", vx: 0.05, vy: -0.04, alpha: 0.45, phase: 1.5 },
      // Warm buttercup & lemon chiffon (top-left & bottom-right accents)
      { x: width * 0.3, y: height * 0.1, radius: 360, color: "254, 235, 169", vx: 0.05, vy: 0.06, alpha: 0.32, phase: 2 },
      { x: width * 0.85, y: height * 0.9, radius: 380, color: "253, 219, 114", vx: -0.05, vy: -0.04, alpha: 0.35, phase: 3 },
      // Subtle tranquil turquoise / marine edge (top-left and bottom edges)
      { x: width * 0.05, y: height * 0.02, radius: 320, color: "142, 214, 210", vx: 0.04, vy: 0.05, alpha: 0.28, phase: 4 },
      { x: width * 0.1, y: height * 0.85, radius: 340, color: "178, 222, 227", vx: 0.05, vy: -0.04, alpha: 0.25, phase: 2.5 },
    ];

    let t = 0;
    const render = () => {
      t += 0.004;
      ctx.clearRect(0, 0, width, height);

      // Base porcelain paper fill
      ctx.fillStyle = "#fff8f6";
      ctx.fillRect(0, 0, width, height);

      washes.forEach((w) => {
        w.x += w.vx;
        w.y += w.vy;

        if (w.x < -150) w.x = width + 150;
        if (w.x > width + 150) w.x = -150;
        if (w.y < -150) w.y = height + 150;
        if (w.y > height + 150) w.y = -150;

        const dynamicAlpha = w.alpha + Math.sin(t + w.phase) * 0.04;
        const grad = ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.radius);
        grad.addColorStop(0, `rgba(${w.color}, ${Math.max(0.05, dynamicAlpha)})`);
        grad.addColorStop(0.55, `rgba(${w.color}, ${Math.max(0.02, dynamicAlpha * 0.4)})`);
        grad.addColorStop(1, `rgba(${w.color}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Dynamic Animated Canvas Wash */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* High-Resolution Exact Painted Artwork Overlay */}
      <div 
        className="absolute inset-0 opacity-60 mix-blend-multiply bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/watercolor-bg-hd.png')`,
        }}
      />

      {/* Gentle Artistic Paper Texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
