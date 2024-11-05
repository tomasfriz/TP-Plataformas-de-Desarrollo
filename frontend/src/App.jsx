import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import OrganizeEvent from './pages/organize/OrganizeEvent.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organize" element={<OrganizeEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
