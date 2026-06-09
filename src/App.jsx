import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/layout/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;