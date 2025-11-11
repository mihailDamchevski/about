import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { mihailAscii, qasw } from "../constants/mihailascii";

export const Header = () => {
  return (
  <>
   
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md text-gray-400 z-50 flex flex-col items-center justify-center overflow-hidden px-4 py-2">
      
      <div className="w-full flex justify-center overflow-hidden">
        <pre
          className="font-mono leading-none whitespace-pre text-center"
          style={{
            transform: "scale(0.5)",       // shrink ASCII horizontally
            transformOrigin: "top center",
          }}
        >
          {mihailAscii}
        </pre>
      </div>

      <div className="w-full flex justify-center overflow-hidden mt-2">
        <pre
          className="font-mono text-red-800 leading-none whitespace-pre text-center"
          style={{
            transform: "scale(0.5)",
            transformOrigin: "top center",
          }}
        >
          {qasw}
        </pre>
      </div>

      {/* Navigation */}
      <nav className="mt-4 w-full max-w-[90rem]">
        <ul className="flex justify-center items-center space-x-8">
          <li>
            <a
              href="https://github.com/mihailDamchevski"
              className="h-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub />
            </a>
          </li>
          <li>
            <a
              href="https://mk.linkedin.com/in/mihail-damchevski-b556ba20b"
              className="h-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="#home"
              className="text-xl hover:text-gray-500 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-xl hover:text-gray-500 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-xl hover:text-gray-500 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main className="mt-[15vh] md:mt-[150px]">
    </main>
  </>
);
};
