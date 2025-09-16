'use client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MapDisplayComponent from '@/components/dashboard/MapDisplayComponent'; // Import the reusable map component
import React from 'react';

const MapPage: React.FC = () => {
  return (
    <DashboardLayout>
      <MapDisplayComponent />
    </DashboardLayout>
  );
};

export default MapPage;
