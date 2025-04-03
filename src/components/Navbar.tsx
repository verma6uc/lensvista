
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-light shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-primary">
              Lens<span className="text-accent">Vista</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="font-body text-dark hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className="font-body text-dark hover:text-primary transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="font-body text-dark hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="font-body text-dark hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block font-body text-dark hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="block font-body text-dark hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block font-body text-dark hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block font-body text-dark hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
