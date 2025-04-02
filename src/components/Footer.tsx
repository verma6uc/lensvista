
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-neutral-light">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-heading font-bold">
                Lens<span className="text-primary">Vista</span>
              </h2>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Capturing life's most precious moments through the lens of artistry and emotion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/gallery" className="text-sm hover:text-primary transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors duration-300">About</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <a href="mailto:info@lensvista.com" className="hover:text-primary transition-colors duration-300">
                  info@lensvista.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-400">
          <p>&copy; {currentYear} LensVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
