import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { mihailAscii, qasw } from "../constants/mihailascii";

export const Header = () => {
  return (
    <>
      <style>{`
        .ascii-art {
          font-family: 'Courier New', monospace;
          font-size: 0.45rem;
          line-height: 1;
          white-space: pre;
          color: #b91c1c;
          text-shadow: 0 0 10px rgba(185, 28, 28, 0.5);
          margin: 0.5rem 0;
          overflow-x: auto;
          animation: textFlicker 8s ease-in-out infinite;
        }
      `}</style>
      <div className="bg-gradient-to-b from-red-950 via-red-900 to-red-950 py-4 border-b border-red-900 border-opacity-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ascii-art">{mihailAscii}</div>
          <div className="ascii-art" style={{ fontSize: '0.35rem', marginBottom: '0.3rem' }}>{qasw}</div>
        </div>
      </div>
      <header className="w-full bg-red-950 border-b border-red-900 border-opacity-30 py-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <style>{`
          .header-title {
            font-family: 'Courier New', 'Monaco', monospace;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: #b91c1c;
            text-shadow: 0 0 20px rgba(185, 28, 28, 0.8), 0 0 40px rgba(185, 28, 28, 0.4);
            transition: all 0.3s ease;
          }
          .header-title:hover {
            color: #ef4444;
            text-shadow: 0 0 30px rgba(239, 68, 68, 1), 0 0 50px rgba(185, 28, 28, 0.6);
          }
          .nav-link {
            font-family: 'Courier New', 'Monaco', monospace;
            font-weight: 600;
            letter-spacing: 0.05em;
            color: #b91c1c;
            text-shadow: 0 0 15px rgba(185, 28, 28, 0.6);
            text-transform: uppercase;
            font-size: 0.85rem;
            transition: all 0.2s ease;
          }
          .nav-link:hover {
            color: #ef4444;
            text-shadow: 0 0 25px rgba(239, 68, 68, 1), 0 0 40px rgba(185, 28, 28, 0.6);
          }
          .header-icon {
            color: #b91c1c;
            text-shadow: 0 0 15px rgba(185, 28, 28, 0.6);
            transition: all 0.2s ease;
          }
          .header-icon:hover {
            color: #ef4444;
            text-shadow: 0 0 25px rgba(239, 68, 68, 1);
          }
        `}</style>
        <div className="max-w-6xl mx-auto px-6 flex items-center relative">
          {/* Logo / Name */}
          <a href="#home" className="header-title text-lg md:text-xl flex-shrink-0">
            &gt; Mihail Damchevski
          </a>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#about" className="nav-link">
              $ about
            </a>
            <a href="#projects" className="nav-link">
              $ projects
            </a>
            <a href="#beat" className="nav-link">
              $ music
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6 ml-auto flex-shrink-0">
            <a
              href="https://github.com/mihailDamchevski"
              target="_blank"
              rel="noopener noreferrer"
              className="header-icon text-xl transition-colors"
            >
              <FaSquareGithub />
            </a>
            <a
              href="https://mk.linkedin.com/in/mihail-damchevski-b556ba20b"
              target="_blank"
              rel="noopener noreferrer"
              className="header-icon text-xl transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
