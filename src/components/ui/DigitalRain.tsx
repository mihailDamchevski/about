import { useEffect, useRef } from "react";

const KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const HEX = "0123456789ABCDEF";
const SYMBOLS = "{}[]!@#$%^&*()_-+=<>?/|~";

function randomChar(): string {
  const source = Math.random() < 0.45 ? KATAKANA : Math.random() < 0.75 ? HEX : SYMBOLS;
  return source[Math.floor(Math.random() * source.length)];
}

interface Column {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  chars: string[];
  len: number;
}

const FONT_SIZE = 13;
const COL_SPACING = 22;

export const DigitalRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let columns: Column[] = [];
    let w = 0;
    let h = 0;

    function resize() {
      const parent = canvas!.parentElement!;
      w = parent.offsetWidth;
      h = parent.offsetHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const colCount = Math.max(1, Math.floor(w / COL_SPACING));
      columns = Array.from({ length: colCount }, (_, i) => ({
        x: i * COL_SPACING + COL_SPACING / 2,
        y: -(Math.random() * h),
        speed: 0.4 + Math.random() * 1.8,
        opacity: 0.15 + Math.random() * 0.35,
        chars: Array.from({ length: 25 }, () => randomChar()),
        len: 6 + Math.floor(Math.random() * 16),
      }));
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    function draw() {
      ctx!.fillStyle = "rgba(5, 8, 13, 0.07)";
      ctx!.fillRect(0, 0, w, h);

      ctx!.font = `bold ${FONT_SIZE}px "JetBrains Mono", "Courier New", monospace`;
      ctx!.textAlign = "center";
      ctx!.textBaseline = "top";

      for (const col of columns) {
        col.y += col.speed;

        const tailEnd = col.y - col.len * FONT_SIZE;
        if (tailEnd > h) {
          col.y = -(col.len * FONT_SIZE);
          col.speed = 0.4 + Math.random() * 1.8;
          col.opacity = 0.15 + Math.random() * 0.35;
          continue;
        }

        const baseAlpha = col.opacity * 0.3;

        for (let i = 0; i < col.len; i++) {
          const cy = col.y - i * FONT_SIZE;
          if (cy < -FONT_SIZE || cy > h + FONT_SIZE) continue;

          const char = col.chars[(Math.floor(col.y / 2) + i * 3) % col.chars.length];
          const t = i / col.len;

          if (i === 0) {
            ctx!.fillStyle = `rgba(34, 211, 238, ${Math.min(baseAlpha * 4, 0.55)})`;
          } else if (i < 3) {
            ctx!.fillStyle = `rgba(148, 163, 184, ${baseAlpha * (1.6 - t * 0.6)})`;
          } else {
            ctx!.fillStyle = `rgba(100, 116, 139, ${baseAlpha * (1 - t) * 0.6})`;
          }
          ctx!.fillText(char, col.x, cy);
        }
      }

      const connectThreshold = 160;
      for (let i = 0; i < columns.length; i++) {
        for (let j = i + 1; j < columns.length; j++) {
          const dx = Math.abs(columns[i].x - columns[j].x);
          const dy = Math.abs(columns[i].y - columns[j].y);
          if (dx > connectThreshold || dy > connectThreshold) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectThreshold) {
            const alpha = (1 - dist / connectThreshold) * 0.1;
            ctx!.beginPath();
            ctx!.moveTo(columns[i].x, columns[i].y);
            ctx!.lineTo(columns[j].x, columns[j].y);
            ctx!.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="digital-rain-canvas pointer-events-none absolute inset-0 block h-full w-full"
      aria-hidden="true"
    />
  );
};
