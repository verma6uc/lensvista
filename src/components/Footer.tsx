
import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-secondary" />
              <span className="text-xl font-heading font-bold text-white">LensVista</span>
            </Link>
            <p className="mt-4 text-sm font-body text-gray-300">
              Capturing life's precious moments through the lens of artistry and emotion.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2 font-body">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-secondary transition-colors duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-secondary transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-300 hover:text-secondary transition-colors duration-300" />
              </a>
            </div>
            <p className="mt-4 text-sm font-body text-gray-300">
              Email: contact@lensvista.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 font-body text-sm text-gray-300">
          <p>&copy; {currentYear} LensVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
