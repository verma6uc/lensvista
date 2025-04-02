
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-heading mb-4">
              <span className="text-primary">Lens</span>Vista
            </h3>
            <p className="font-body mb-4">
              Capturing moments, preserving memories, and telling stories through the art of photography.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter size={20} />
              </SocialLink>
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="mailto:info@lensvista.com" aria-label="Email">
                <Mail size={20} />
              </SocialLink>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading mb-4">Contact</h3>
            <address className="font-body not-italic">
              <p className="mb-2">info@lensvista.com</p>
              <p className="mb-2">+1 (555) 123-4567</p>
              <p>New York, NY 10001</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-medium/30 mt-8 pt-8 text-center">
          <p className="font-body text-sm">
            © {currentYear} LensVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="font-body text-light/80 hover:text-primary transition-colors duration-200"
  >
    {children}
  </Link>
);

const SocialLink = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a 
    href={href}
    className="text-light/80 hover:text-primary transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default Footer;
