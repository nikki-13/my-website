import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Portfolio Name / Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-400">MyPortfolio</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 py-4 text-center">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
