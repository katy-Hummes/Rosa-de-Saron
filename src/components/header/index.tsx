export default function Header() {
  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 px-8 lg:px-12 py-5 bg-linear-65 from-pink-400 to-gray-950">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wider">
          🌹 Rosa de Saron
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-10">
          <li>
            <a 
              href="#home"
              className="text-white font-medium text-sm tracking-wider hover:text-pink-400 transition-colors relative group pb-5"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#sobre"
              className="text-white font-medium text-sm tracking-wider hover:text-pink-400 transition-colors relative group pb-5"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#contato"
              className="text-white font-medium text-sm tracking-wider hover:text-pink-400 transition-colors relative group pb-5"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}