
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="gallery" element={<div>Gallery</div>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="contact" element={<div>Contact</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
