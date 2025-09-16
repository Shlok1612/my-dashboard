'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const speciesOptions = ['Tuna', 'Mackerel', 'Sardine', 'Whale Shark', 'Dolphin', 'Coral', 'Clownfish', 'Plankton'];
const regionOptions = ['Arabian Sea', 'Bay of Bengal', 'Red Sea', 'Gulf of Aden'];

const FilterComponent: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const handleSpeciesChange = (species: string) => {
    setSelectedSpecies((prev) =>
      prev.includes(species) ? prev.filter((s) => s !== species) : [...prev, species]
    );
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  const handleFilterChange = () => {
    console.log({
      selectedSpecies,
      startDate: startDate?.toISOString().split('T')[0],
      endDate: endDate?.toISOString().split('T')[0],
      selectedRegions,
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded card">
      <h2 className="text-2xl font-bold text-teal-300 mb-4 text-center">Data Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-lg font-bold text-gray-300 mb-1">Species:</label>
          <div className="border p-2 rounded-md bg-gray-700 max-h-40 overflow-y-auto">
            {speciesOptions.map((species) => (
              <div key={species} className="flex items-center">
                <input
                  type="checkbox"
                  id={`species-${species}`}
                  className="mr-2 text-blue-400 focus:ring-blue-500"
                  checked={selectedSpecies.includes(species)}
                  onChange={() => handleSpeciesChange(species)}
                />
                <label htmlFor={`species-${species}`} className="text-base text-gray-300">{species}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-bold text-gray-300 mb-1">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            inline
            calendarClassName="!bg-gray-700 !text-gray-300 !border-gray-600"
            dayClassName={() => "text-gray-300"}
            className="w-full px-4 py-2 text-base border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block text-lg font-bold text-gray-300 mb-1">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            inline
            calendarClassName="!bg-gray-700 !text-gray-300 !border-gray-600"
            dayClassName={() => "text-gray-300"}
            className="w-full px-4 py-2 text-base border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block text-lg font-bold text-gray-300 mb-1">Region:</label>
          <div className="border p-2 rounded-md bg-gray-700 max-h-40 overflow-y-auto">
            {regionOptions.map((region) => (
              <div key={region} className="flex items-center">
                <input
                  type="checkbox"
                  id={`region-${region}`}
                  className="mr-2 text-blue-400 focus:ring-blue-500"
                  checked={selectedRegions.includes(region)}
                  onChange={() => handleRegionChange(region)}
                />
                <label htmlFor={`region-${region}`} className="text-base text-gray-300">{region}</label>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleFilterChange}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
