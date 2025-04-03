
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary" />
            <span className="text-xl font-heading font-bold text-primary">LensVista</span>
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-dark hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-8 mt-4 md:mt-0`}
        >
          <Link
            to="/"
            className="block py-2 text-neutral-dark hover:text-primary transition-colors duration-300 md:inline-block"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="block py-2 text-neutral-dark hover:text-primary transition-colors duration-300 md:inline-block"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="block py-2 text-neutral-dark hover:text-primary transition-colors duration-300 md:inline-block"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-neutral-dark hover:text-primary transition-colors duration-300 md:inline-block"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
