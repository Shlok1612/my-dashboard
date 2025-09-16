import DashboardLayout from '@/components/dashboard/DashboardLayout';
import FilterComponent from '@/components/dashboard/FilterComponent';
import MapDisplayComponent from '@/components/dashboard/MapDisplayComponent'; // Import the reusable map component
import ChartComponent from '@/components/dashboard/ChartComponent'; // Import ChartComponent
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-extrabold text-teal-300 mb-6 text-center">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MapDisplayComponent />
        <ChartComponent /> {/* Use ChartComponent directly */}
        <FilterComponent />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
