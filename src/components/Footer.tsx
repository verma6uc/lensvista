
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 py-8 backdrop-blur">
      <div className="container grid gap-8 px-4 md:grid-cols-4 md:px-6">
        <div className="space-y-3">
          <Link to="/" className="flex items-center gap-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
              <path d="M18 6L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 18L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 6L3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 18L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-headings text-lg font-bold text-primary">LensVista</span>
          </Link>
          <p className="text-sm text-neutral-medium">
            Capturing moments that tell powerful stories. Professional photography services for all occasions.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-bold">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <Link to="/gallery" className="transition-colors hover:text-primary">Gallery</Link>
            <Link to="/about" className="transition-colors hover:text-primary">About</Link>
            <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-bold">Services</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/services" className="transition-colors hover:text-primary">Wedding Photography</Link>
            <Link to="/services" className="transition-colors hover:text-primary">Portrait Sessions</Link>
            <Link to="/services" className="transition-colors hover:text-primary">Event Coverage</Link>
            <Link to="/services" className="transition-colors hover:text-primary">Commercial Projects</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-bold">Contact</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <p>contact@lensvista.com</p>
            <p>+1 (555) 123-4567</p>
            <div className="flex space-x-3 pt-2">
              <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="rounded-full border border-border p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t border-border/40 pt-6 text-center">
        <p className="text-sm text-neutral-medium">
          © {new Date().getFullYear()} LensVista Photography. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
