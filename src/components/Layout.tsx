
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col dynamic-bg">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8 md:py-12">
        <Outlet />
        {/* If no outlet route is active, show welcome message */}
        <div className="flex h-full flex-col items-center justify-center space-y-8 py-12 text-center">
          <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-5xl font-bold text-transparent">
            Welcome to LensVista
          </h1>
          <p className="max-w-2xl text-lg text-neutral-dark/80">
            A professional photography portfolio showcasing stunning imagery, creative vision, and
            artistic excellence.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map(index => (
              <div
                key={index}
                className="card-pattern group flex h-64 items-end overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="transform space-y-2 transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-xl font-bold text-primary">
                    {index === 1
                      ? 'Photo Gallery'
                      : index === 2
                      ? 'Professional Services'
                      : 'Creative Vision'}
                  </h3>
                  <p className="text-sm text-neutral-medium">
                    {index === 1
                      ? 'Explore our diverse collection of professional photography'
                      : index === 2
                      ? 'Custom photography services for every occasion'
                      : 'Capturing moments that tell powerful stories'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
