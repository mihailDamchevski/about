import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaDownload, FaPause, FaPlay, FaSliders, FaVolumeHigh } from "react-icons/fa6";
import { musicAscii } from "../../constants/sectionascii";
import { portfolioTrack } from "../../data/music";
import { useWaveformBars } from "../../hooks/useWaveformBars";
import { formatTime } from "../../lib/formatTime";
import { scaleIn, springSnappy, viewport } from "../../lib/motion";
import { Reveal } from "../motion/Reveal";
import { SectionIntro } from "../ui/SectionIntro";

export const Beat = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.9);
  const reduce = useReducedMotion() ?? false;
  const barHeights = useWaveformBars(isPlaying, reduce);

  useEffect(() => {
    const el = audioRef.current;
    if (el) el.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        void audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="beat" className="beat-section" aria-labelledby="beat-heading">
      <div className="beat-container-wide">
        <Reveal>
          <SectionIntro
            kicker="// studio.output"
            ascii={musicAscii}
            srTitle="Music & audio"
            headingId="beat-heading"
            asciiClassName="music-ascii-tight"
            subtitle="Audio engineer & producer—beats, balance, and the same attention to detail I bring to test design."
            subtitleClassName="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-[var(--text-secondary)]"
          />
        </Reveal>

        <motion.div
          className="music-showcase-card"
          variants={scaleIn}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={viewport}
        >
          <div className="music-showcase-grid">
            <div className={`music-art ${isPlaying ? "music-art--playing" : ""}`} aria-hidden>
              <div className="music-art__glow" />
              <div className="music-art__vinyl" />
              <span className="music-art__label">MD</span>
            </div>

            <div className="music-meta">
              <p className="music-meta__kicker font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[var(--accent)]">
                Original · instrumental
              </p>
              <h3 className="music-meta__title">{portfolioTrack.title}</h3>
              <p className="music-meta__artist">{portfolioTrack.artist}</p>
              <p className="music-meta__role">{portfolioTrack.role}</p>
              <dl className="music-meta__stats font-mono text-xs text-[var(--text-muted)]">
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <div>
                    <dt className="inline text-[var(--text-muted)]">Tempo </dt>
                    <dd className="inline text-[var(--text-secondary)]">{portfolioTrack.bpm} BPM</dd>
                  </div>
                  <div>
                    <dt className="inline text-[var(--text-muted)]">Format </dt>
                    <dd className="inline text-[var(--text-secondary)]">Stereo · 44.1k</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <div className="music-wave" aria-hidden>
            {barHeights.map((h, i) => (
              <span
                key={i}
                className={`music-wave__bar ${isPlaying ? "music-wave__bar--active" : ""}`}
                style={{ height: `${h * 100}%` }}
              />
            ))}
          </div>

          <audio
            ref={audioRef}
            src={portfolioTrack.audioSrc}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onEnded={() => setIsPlaying(false)}
          />

          <div className="music-transport">
            <motion.button
              type="button"
              className="music-play-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              whileHover={reduce ? undefined : { scale: 1.06 }}
              whileTap={reduce ? undefined : { scale: 0.94 }}
              transition={springSnappy}
            >
              {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} className="ml-0.5" />}
            </motion.button>

            <div className="music-progress-block">
              <div className="music-time-row font-mono text-xs text-[var(--text-muted)]">
                <span>{formatTime(currentTime)}</span>
                <span className="flex items-center gap-1.5 text-[var(--text-muted)]/80">
                  <FaSliders size={12} aria-hidden />
                  master
                </span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="music-progress-wrap">
                <div className="music-progress-fill" style={{ width: `${progress}%` }} />
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleTimeChange}
                  className="music-progress-input"
                  aria-label="Seek"
                />
              </div>
            </div>

            <div className="music-volume-block">
              <FaVolumeHigh size={16} className="text-[var(--text-muted)]" aria-hidden />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="music-volume-input"
                aria-label="Volume"
              />
            </div>
          </div>

          <motion.a
            href={portfolioTrack.audioSrc}
            download={portfolioTrack.downloadFilename}
            className="music-download"
            onClick={() =>
              window.alert(
                "[SECURITY NOTICE]\n\nOnly download files from sources you trust.\n\nThis track is hosted here on purpose.\n",
              )
            }
            whileHover={reduce ? undefined : { scale: 1.01 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={springSnappy}
          >
            <FaDownload size={14} aria-hidden />
            Download .mp3
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
