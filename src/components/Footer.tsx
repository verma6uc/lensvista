
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-primary" />
              <span className="text-2xl font-heading tracking-tight">LensVista</span>
            </Link>
            <p className="text-neutral-light text-sm mb-4">
              Capturing life\'s precious moments through the lens of artistic excellence.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="mailto:contact@lensvista.com" icon={<Mail className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-heading mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services/portraits">Portrait Photography</FooterLink>
              <FooterLink to="/services/weddings">Wedding Photography</FooterLink>
              <FooterLink to="/services/events">Event Coverage</FooterLink>
              <FooterLink to="/services/commercial">Commercial Shoots</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-heading mb-4">Contact</h3>
            <address className="not-italic text-neutral-light">
              <p className="mb-2">123 Photography Lane</p>
              <p className="mb-2">New York, NY 10001</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Email: contact@lensvista.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-light/10 pt-6 text-center text-sm text-neutral-light">
          <p>&copy; {currentYear} LensVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href} 
    className="text-neutral-light hover:text-primary transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link 
      to={to} 
      className="text-neutral-light hover:text-primary transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
