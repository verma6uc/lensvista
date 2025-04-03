
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary">Welcome to <span className="text-accent">LensVista</span></h1>
        </div>} />
        <Route path="gallery" element={<div className="min-h-[60vh] flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark">Gallery Page</h2>
        </div>} />
        <Route path="about" element={<div className="min-h-[60vh] flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark">About Page</h2>
        </div>} />
        <Route path="contact" element={<div className="min-h-[60vh] flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark">Contact Page</h2>
        </div>} />
        <Route path="*" element={<div className="min-h-[60vh] flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">Page Not Found</h2>
        </div>} />
      </Route>
    </Routes>
  );
}

export default App;
