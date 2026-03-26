import { useEffect, useRef, useState } from "react";

const BAR_COUNT = 40;

export function useWaveformBars(isPlaying: boolean, reduceMotion: boolean) {
  const rafRef = useRef<number>(0);
  const [barHeights, setBarHeights] = useState(() => Array.from({ length: BAR_COUNT }, () => 0.12));

  useEffect(() => {
    if (!isPlaying) {
      cancelAnimationFrame(rafRef.current);
      setBarHeights(Array.from({ length: BAR_COUNT }, () => 0.12));
      return;
    }
    if (reduceMotion) {
      setBarHeights(Array.from({ length: BAR_COUNT }, (_, i) => 0.2 + (i % 5) * 0.06));
      return;
    }

    const loop = (t: number) => {
      const phase = t * 0.002;
      setBarHeights(
        Array.from({ length: BAR_COUNT }, (_, i) => {
          const wobble =
            Math.sin(phase * 3 + i * 0.4) * 0.35 + Math.sin(phase * 1.5 + i * 0.12) * 0.25;
          return Math.min(1, Math.max(0.08, 0.35 + wobble + (i % 7) * 0.02));
        }),
      );
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, reduceMotion]);

  return barHeights;
}
