
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Routes will be added here */}
        <Route index element={<div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-heading text-primary">Welcome to LensVista</h1>
        </div>} />
      </Route>
    </Routes>
  );
}

export default App;
