
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Routes will be added here */}
        <Route index element={<div>Home Page</div>} />
        <Route path="gallery" element={<div>Gallery Page</div>} />
        <Route path="about" element={<div>About Page</div>} />
        <Route path="contact" element={<div>Contact Page</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
