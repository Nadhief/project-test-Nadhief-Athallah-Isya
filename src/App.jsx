import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ideas from './Pages/Ideas';
import Work from './Pages/Work';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Careers from './Pages/Careers';
import Layoutpage from './Layout/Layoutpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layoutpage />} />
        <Route path="/Pages/Work" element={<Work />} />
        <Route path="/Pages/Careers" element={<Careers />} />
        <Route path="/Pages/Contact" element={<Contact />} />
        <Route path="/Pages/About" element={<About />} />
        <Route path="/Pages/Ideas" element={<Ideas />} />
        <Route path="/Pages/Services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
