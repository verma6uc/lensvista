
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="text-primary">Lens</span>
              <span className="text-secondary">Vista</span>
            </h3>
            <p className="text-gray-300 font-body mb-4">
              Capturing moments that last a lifetime through the art of professional photography.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">info@lensvista.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-body">
          <p>&copy; {currentYear} LensVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link
      to={to}
      className="text-gray-300 hover:text-secondary transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Footer;
