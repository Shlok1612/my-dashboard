import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="bg-blue-900 text-white p-4 shadow-lg">
        <h1 className="text-3xl font-extrabold text-teal-300">Marine Data Dashboard</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-950 text-white p-4 shadow-md">
          <nav>
            <ul>
              <li className="mb-2"><a href="/dashboard" className="block p-2 rounded hover:bg-blue-600 transition-colors duration-200">Overview</a></li>
              <li className="mb-2"><a href="/map" className="block p-2 rounded hover:bg-blue-600 transition-colors duration-200">Map</a></li>
              <li className="mb-2"><a href="/charts" className="block p-2 rounded hover:bg-blue-600 transition-colors duration-200">Charts</a></li>
              <li className="mb-2"><a href="#" className="block p-2 rounded hover:bg-blue-600 transition-colors duration-200">Oceanographic Data</a></li>
              <li className="mb-2"><a href="#" className="block p-2 rounded hover:bg-blue-600 transition-colors duration-200">Fisheries Data</a></li>
              <li className="mb-2"><a href="#" className="block p-2 rounded hover:bg-blue-600 transition-colors duration-200">eDNA Data</a></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
      <footer className="bg-gray-900 text-gray-300 p-4 text-center">
        &copy; 2025 Marine Data Platform
      </footer>
    </div>
  );
};

export default DashboardLayout;
