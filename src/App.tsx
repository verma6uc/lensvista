
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div className="min-h-[calc(100vh-224px)]"></div>} />
        <Route path="/gallery" element={<div className="min-h-[calc(100vh-224px)]"></div>} />
        <Route path="/about" element={<div className="min-h-[calc(100vh-224px)]"></div>} />
        <Route path="/contact" element={<div className="min-h-[calc(100vh-224px)]"></div>} />
        <Route path="*" element={<div className="min-h-[calc(100vh-224px)]">Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
