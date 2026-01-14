import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeLow } from 'react-icons/fa6';

export const Beat = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section className="beat-section">
      <div className="beat-container">
        <h3 className="beat-title">Listen to a beat I've made</h3>
        <div className="audio-wrapper">
          <audio
            ref={audioRef}
            src="/audio/beat.mp3"
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onEnded={() => setIsPlaying(false)}
          />

          <div className="custom-player">
            <div className="player-controls">
              <button className="play-btn" onClick={togglePlay}>
                {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
              </button>

              <div className="progress-section">
                <span className="time-display">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleTimeChange}
                  className="progress-bar"
                />
                <span className="time-display">{formatTime(duration)}</span>
              </div>

              <div className="volume-control">
                <FaVolumeLow size={14} className="volume-icon" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                />
              </div>
            </div>
          </div>
        </div>

        <a
          href="/audio/beat.mp3"
          download="beat.mp3"
          className="download-link"
          onClick={() => alert("⚠️You shouldn't download random files from the internet!⚠️\nThis one's okay though :)\n")}
        >
          ↓ Download beat
        </a>
      </div>
    </section>
  );
};
