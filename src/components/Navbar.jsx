import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const Links = [
    { name: 'HOME', link: 'home' },
    { name: 'ABOUT', link: 'about' },
    { name: 'SKILLS', link: 'skills' },
    { name: 'PROJECTS', link: 'projects' },
    { name: 'EXPERIENCE', link: 'experience' },
    { name: 'CONTACT', link: 'contact' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 dark:text-white text-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer font-bold text-2xl font-[Poppins] text-pink-500 select-none">
          <span className="text-3xl mr-1 pt-1">
            <ion-icon name="laptop-outline"></ion-icon>
          </span>
          <span className="text-2xl font-bold text-pink-500 tracking-wide">
            Code<span className="text-gray-900 dark:text-white">Aura</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-pink-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            onClick={toggleTheme}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setOpen(true)} aria-label="Open Menu">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-pink-500 text-white transform transition-transform duration-300 z-40 px-8 py-6 space-y-8 ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close button inside sidebar */}
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)} aria-label="Close Menu">
            <X className="w-7 h-7 text-white hover:text-gray-300" />
          </button>
        </div>

        <ul className="space-y-6 mt-8">
          {Links.map((link) => (
            <li key={link.name} className="text-xl font-semibold list-none">
              <Link
                to={link.link}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-black transition duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
