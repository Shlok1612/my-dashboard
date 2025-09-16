'use client';
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

const fishAbundanceData = [
  { temperature: 20, abundance: 10 },
  { temperature: 22, abundance: 15 },
  { temperature: 21, abundance: 12 },
  { temperature: 23, abundance: 18 },
  { temperature: 19, abundance: 8 },
  { temperature: 24, abundance: 20 },
  { temperature: 20, abundance: 11 },
];

const seaSurfaceTemperatureData = [
  { name: 'Jan', temperature: 18 },
  { name: 'Feb', temperature: 19 },
  { name: 'Mar', temperature: 21 },
  { name: 'Apr', temperature: 23 },
  { name: 'May', temperature: 25 },
  { name: 'Jun', temperature: 24 },
  { name: 'Jul', temperature: 22 },
  { name: 'Aug', temperature: 20 },
  { name: 'Sep', temperature: 19 },
  { name: 'Oct', temperature: 20 },
  { name: 'Nov', temperature: 21 },
  { name: 'Dec', temperature: 19 },
];

const ChartComponent: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 rounded card space-y-8">
      <h2 className="text-2xl font-bold text-teal-300 mb-4 text-center">Marine Data Charts</h2>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">Temperature vs. Fish Abundance (Scatter Plot)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="temperature" name="Temperature (°C)" unit="°C" />
            <YAxis type="number" dataKey="abundance" name="Fish Abundance" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Fish Data" data={fishAbundanceData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">Sea Surface Temperature Over Time (Line Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={seaSurfaceTemperatureData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComponent;
