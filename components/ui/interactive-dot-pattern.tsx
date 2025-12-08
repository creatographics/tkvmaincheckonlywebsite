"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveDotPatternProps {
  width?: number;
  height?: number;
  dotSize?: number;
  className?: string;
}

export function InteractiveDotPattern({
  width = 20,
  height = 20,
  dotSize = 1,
  className,
}: InteractiveDotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / width);
      const rows = Math.ceil(canvas.height / height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * width + width / 2;
          const y = j * height + height / 2;

          // Calculate distance from mouse
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Fade effect from top to bottom
          const fadeOpacity = Math.max(0, 1 - (y / canvas.height) * 1.5);

          // Hover effect - bump and highlight within radius
          const hoverRadius = 80;
          let size = dotSize;
          let opacity = 0.4 * fadeOpacity;

          if (distance < hoverRadius) {
            const influence = 1 - distance / hoverRadius;
            size = dotSize + influence * 2;
            opacity = Math.min(1, 0.4 + influence * 0.6) * fadeOpacity;
          }

          ctx.fillStyle = `rgba(156, 163, 175, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [width, height, dotSize, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full", className)}
      style={{ pointerEvents: "auto" }}
    />
  );
}

export default InteractiveDotPattern;
