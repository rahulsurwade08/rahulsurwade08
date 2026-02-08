
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header.jsx';

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#051F20] text-[#DAF1DE]">
      <Header />
      
      <main>
        <Outlet />
      </main>

      <footer className="relative border-t border-[#235347] bg-[#051F20]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#DAF1DE]/60 text-sm">
              © 2026 Rahul Surwade. All rights reserved.
            </p>
            <p className="text-[#DAF1DE]/40 text-sm">
              Built with React, TailwindCSS & Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
