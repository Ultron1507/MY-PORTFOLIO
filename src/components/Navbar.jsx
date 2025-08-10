import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#363636da] mt-5 rounded-full max-w-6xl mx-auto shadow-lg px-6 py-3 flex items-center justify-between relative">
      
      {/* Resume button */}
      <a
        href="/resume.pdf"
        download
        className="bg-[#191919] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2b2b2b] transition"
      >
        Download Resume
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8">
        {navLinks.map(link => (
          <Link
            key={link.name}
            to={link.path}
            className={`font-medium transition-colors ${
              location.pathname === link.path
                ? 'text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 bg-[#363636] rounded-lg shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden z-50">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
