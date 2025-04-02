
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-heading text-primary">Welcome to LensVista</h1>
        </div>} />
        <Route path="gallery" element={<div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-heading text-primary">Gallery Page</h1>
        </div>} />
        <Route path="about" element={<div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-heading text-primary">About Page</h1>
        </div>} />
        <Route path="contact" element={<div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-heading text-primary">Contact Page</h1>
        </div>} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-heading text-primary">Page Not Found</h1>
        </div>} />
      </Route>
    </Routes>
  );
}

export default App;
