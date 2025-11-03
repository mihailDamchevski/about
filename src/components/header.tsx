import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { mihailAscii, qasw } from "../constants/mihailascii";

export const Header = () => {
  return (
    <header className="w-full bg-black bg-opacity-50 backdrop-blur-md text-gray-400">
      <pre className="mx-auto px-24 text-gray-900 [text-shadow:0_0_1px_#fff]">{mihailAscii}</pre>

      <pre className="mx-auto text-red-800">{qasw}</pre>
      {/* <p className="text-2xl w-fit mx-auto text-gray-600">Quality Assurance / Software Engineer</p> */}
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center align-center space-x-8">
          <a href="https://github.com/mihailDamchevski" className="h-auto">
            <FaSquareGithub />
          </a>
          <a href="https://mk.linkedin.com/in/mihail-damchevski-b556ba20b" className="h-auto">
            <FaLinkedin />
          </a>
          <li>
            <a href="#home" className="text-xl hover:text-gray-500 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-xl hover:text-gray-500 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-xl hover:text-gray-500 transition-colors duration-300">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
