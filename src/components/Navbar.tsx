
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-heading text-dark">
            <span className="text-primary">Lens</span>Vista
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden container mx-auto px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="font-body text-dark hover:text-primary transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="font-body text-dark hover:text-primary py-2 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
