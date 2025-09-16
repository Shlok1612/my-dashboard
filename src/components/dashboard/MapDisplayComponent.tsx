'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapDisplayComponent: React.FC = () => {
  const [leafletComponents, setLeafletComponents] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      import('leaflet'),
      import('react-leaflet'),
    ]).then(([L, ReactLeaflet]) => {
      delete (L.Icon.Default as any).prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });
      setLeafletComponents(ReactLeaflet);
    });
  }, []);

  if (!leafletComponents) {
    return <div className="bg-gray-800 text-white p-4 rounded shadow h-96 w-full flex items-center justify-center"><p>Loading Map...</p></div>;
  }

  const { MapContainer, TileLayer, Marker, Popup } = leafletComponents;

  const position: [number, number] = [15, 70]; // Arabian Sea
  const zoom = 5;

  const markers = [
    {
      position: [17, 65] as [number, number],
      name: "Site A",
      species: "Tuna, Dolphin",
      temperature: "25°C",
    },
    {
      position: [12, 75] as [number, number],
      name: "Site B",
      species: "Coral, Clownfish",
      temperature: "28°C",
    },
    {
      position: [20, 72] as [number, number],
      name: "Site C",
      species: "Whale Shark, Plankton",
      temperature: "22°C",
    },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded card">
      <h2 className="text-2xl font-bold text-teal-300 mb-4 text-center">Marine Map</h2>
      <div className="h-96 w-full">
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>
                <div className="text-gray-900"> {/* Ensure popup text is visible against light background */}
                  <h3>{marker.name}</h3>
                  <p>Species Found: {marker.species}</p>
                  <p>Temperature: {marker.temperature}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapDisplayComponent;
