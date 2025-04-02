
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-primary" />
          <span className="text-2xl font-heading font-bold text-neutral-dark">
            Lens<span className="text-primary">Vista</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/gallery" label="Gallery" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-neutral-dark focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
            <MobileNavLink to="/gallery" label="Gallery" onClick={toggleMenu} />
            <MobileNavLink to="/about" label="About" onClick={toggleMenu} />
            <MobileNavLink to="/contact" label="Contact" onClick={toggleMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => (
  <Link
    to={to}
    className="font-medium text-neutral-medium hover:text-primary transition-colors duration-300"
  >
    {label}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => (
  <Link
    to={to}
    className="font-medium text-neutral-medium hover:text-primary py-2 border-b border-gray-100 transition-colors duration-300"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
