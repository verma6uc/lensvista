
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-heading font-bold text-primary">
            <span className="text-accent">Lens</span>Vista
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="rounded-md p-2 text-accent hover:bg-neutral-light md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-neutral-dark font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-neutral-dark font-medium hover:text-primary transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-neutral-dark font-medium hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-neutral-dark font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 z-10 bg-white shadow-lg md:hidden">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/"
                    className="block py-2 text-neutral-dark font-medium hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="block py-2 text-neutral-dark font-medium hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 text-neutral-dark font-medium hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 text-neutral-dark font-medium hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
