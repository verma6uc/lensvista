
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              <span className="text-accent">Lens</span>
              <span className="text-secondary">Vista</span>
            </h3>
            <p className="text-neutral-light mb-4 max-w-md">
              Capturing moments, framing memories, and telling stories through the art of professional photography.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-light hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-light hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-light hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-light hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <address className="not-italic text-neutral-light space-y-2">
              <p>123 Photography Lane</p>
              <p>Aperture City, PC 12345</p>
              <p>Email: info@lensvista.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-medium/20 text-center">
          <p className="text-neutral-light text-sm">
            &copy; {currentYear} LensVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
