import { FaLinkedin } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md text-blue-800">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center align-center space-x-8">
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
