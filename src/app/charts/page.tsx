import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ChartComponent from '@/components/dashboard/ChartComponent';
import React from 'react';

const ChartsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <ChartComponent />
    </DashboardLayout>
  );
};

export default ChartsPage;
