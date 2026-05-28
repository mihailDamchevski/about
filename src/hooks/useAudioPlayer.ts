import { useCallback, useEffect, useRef, useState } from "react";

interface AudioPlayer {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isLoading: boolean;
  error: string | null;
  progress: number;
  togglePlay: () => void;
  seek: (time: number) => void;
  setVolume: (v: number) => void;
}

export function useAudioPlayer(src: string): AudioPlayer {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.9);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onLoadStart = () => { setIsLoading(true); setError(null); };
    const onCanPlay = () => setIsLoading(false);
    const onLoadedData = () => setIsLoading(false);
    const onError = () => { setIsLoading(false); setError("Failed to load audio"); };
    const onLoadedMetadata = () => setDuration(el.duration);
    const onTimeUpdate = () => setCurrentTime(el.currentTime);
    const onEnded = () => setIsPlaying(false);

    el.addEventListener("loadstart", onLoadStart);
    el.addEventListener("canplay", onCanPlay);
    el.addEventListener("loadeddata", onLoadedData);
    el.addEventListener("error", onError);
    el.addEventListener("loadedmetadata", onLoadedMetadata);
    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("ended", onEnded);

    if (el.readyState >= 2) setIsLoading(false);

    return () => {
      el.removeEventListener("loadstart", onLoadStart);
      el.removeEventListener("canplay", onCanPlay);
      el.removeEventListener("loadeddata", onLoadedData);
      el.removeEventListener("error", onError);
      el.removeEventListener("loadedmetadata", onLoadedMetadata);
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("ended", onEnded);
    };
  }, [src]);

  useEffect(() => {
    const el = audioRef.current;
    if (el) el.volume = volume;
  }, [volume]);

  const togglePlay = useCallback(() => {
    const el = audioRef.current;
    if (!el || isLoading || error) return;
    if (isPlaying) {
      el.pause();
    } else {
      void el.play();
    }
    setIsPlaying((v) => !v);
  }, [isPlaying, isLoading, error]);

  const seek = useCallback((time: number) => {
    setCurrentTime(time);
    const el = audioRef.current;
    if (el) el.currentTime = time;
  }, []);

  const handleVolume = useCallback((v: number) => {
    setVolume(v);
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    volume,
    isLoading,
    error,
    progress,
    togglePlay,
    seek,
    setVolume: handleVolume,
  };
}
