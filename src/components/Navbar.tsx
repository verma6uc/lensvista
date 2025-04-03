
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-neutral-light/80 backdrop-blur-sm sticky top-0 z-50 border-b border-neutral-light/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary" />
            <span className="text-2xl font-heading tracking-tight">LensVista</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-dark"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu} className="block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center">
              Contact
            </MobileNavLink>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink = ({ to, className, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`font-body text-neutral-dark hover:text-primary transition-colors ${className || ''}`}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, className, onClick, children }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className={`block py-2 font-body text-neutral-dark hover:text-primary transition-colors ${className || ''}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
