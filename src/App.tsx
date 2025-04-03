
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Page routes will be nested here */}
        <Route index element={<div className="min-h-screen flex items-center justify-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary text-center">
            Welcome to LensVista
          </h1>
        </div>} />
      </Route>
    </Routes>
  );
}

export default App;
