
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
