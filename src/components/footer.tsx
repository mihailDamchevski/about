export const Footer = () => (
  <footer className="bg-black bg-opacity-50 backdrop-blur-md py-6">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2024 John Doe. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="text-2xl hover:text-pink-400 transition-colors duration-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-2xl hover:text-pink-400 transition-colors duration-300">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-2xl hover:text-pink-400 transition-colors duration-300">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  </footer>
);
